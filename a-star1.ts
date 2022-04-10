namespace scene1 {
    class PrioritizedLocation {
        constructor(
            public loc: tiles.Location,
            public cost: number,
            // cost from heuristic
            public extraCost: number
        ) { }
    }

    class LocationNode {
        public visited: boolean;

        constructor(
            public l: tiles.Location,
            public parent: LocationNode,
            public lastCost: number
        ) {
            this.visited = false;
        }
    }

    /**
     * Find the shortest path between start and end that does not contain walls and optionally limited to a pathable tile.
     */
    //% block="path from $start to $end||on tiles of $onTilesOf"
    //% start.shadow=mapgettile
    //% end.shadow=mapgettile
    //% onTilesOf.shadow=tileset_tile_picker
    //% onTilesOf.decompileIndirectFixedInstances=true
    //% help=github:arcade-tilemap-a-star/docs/a-star
    //% group="Path Following" weight=10
    export function aStar(start: tiles.Location, end: tiles.Location, onTilesOf: Image = null) {
        const tm = game.currentScene().tileMap;
        if (!tm || !start || !end || !isWalkable(end, onTilesOf, tm))
            return undefined;

        return generalAStar(tm, start, onTilesOf,
            t => tileLocationHeuristic(t, end),
            l => l.x === end.x && l.y === end.y);
    }

    export function aStarToAnyOfType(start: tiles.Location, tile: Image, onTilesOf: Image) {
        const tm = game.currentScene().tileMap;
        if (!tm || !start)
            return undefined;
        const endIndex = tm.getImageType(tile);
        const potentialEndPoints = tm.getTilesByType(endIndex);

        if (!potentialEndPoints || potentialEndPoints.length === 0)
            return undefined;

        return generalAStar(tm, start, onTilesOf,
            t => 0,
            l => {
                return endIndex === tm.getTileIndex((l as any)._col, (l as any)._row)
            });
    }

    export function generalAStar(tm: tiles.TileMap, start: tiles.Location, onTilesOf: Image,
        heuristic: (tile: tiles.Location) => number,
        isEnd: (tile: tiles.Location) => boolean): tiles.Location[] {

        if (!isWalkable(start, onTilesOf, tm)) {
            return undefined;
        }

        const consideredTiles = new Heap<PrioritizedLocation>(
            (a, b) => (a.cost + a.extraCost) - (b.cost + b.extraCost)
            // (a, b) => (a.cost ** 2 + a.extraCost) - (b.cost ** 2 + b.extraCost)
        );
        const encountedLocations: LocationNode[][] = [[]];

        function updateOrFillLocation(l: tiles.Location, parent: LocationNode, cost: number) {
            const row = l.row;
            const col = l.col;

            // if (tm.isObstacle(col, row)) {
            //     return;
            // }

            const colData = (encountedLocations[col] || (encountedLocations[col] = []));
            const lData = colData[row];

            if (!lData) {
                colData[row] = new LocationNode(
                    l,
                    parent,
                    cost
                );
            } else if (!lData.visited &&lData.lastCost > cost) {//!lData.visited &&
                lData.lastCost = cost;
                lData.parent = parent;
            } else {
                return;
            }

            let h = heuristic(l);
            // need to store extra cost on location node too, and keep that up to date
            // if (h > parent.extraCost) {

            // }

            consideredTiles.push(
                new PrioritizedLocation(
                    l,
                    cost,
                    h*100
                )
            );
        }
        updateOrFillLocation(start, null, 0);

        let end: tiles.Location = null;
        while (consideredTiles.length !== 0) {
            const currLocation = consideredTiles.pop();

            if (isEnd(currLocation.loc)) {
                end = currLocation.loc;
                break;
            }

            const row = currLocation.loc.row;
            const col = currLocation.loc.col;

            const neighborCost = currLocation.cost + 100;
            const cornerCost = currLocation.cost + 141//.414213562373095;  //much faster

            const dataForCurrLocation = encountedLocations[col][row];

            if (dataForCurrLocation && dataForCurrLocation.visited) {
                continue;
            }

            dataForCurrLocation.visited = true;

            const neighbors: tiles.Location[] = [];
            const corners: tiles.Location[] = [];

            const left = tiles.getTileLocation(col - 1, row);
            const right = tiles.getTileLocation(col + 1, row);
            const top = tiles.getTileLocation(col, row - 1);
            const bottom = tiles.getTileLocation(col, row + 1);

            let leftIsWall = false
            let rightIsWall = false
            let topIsWall = false
            let bottomIsWall = false

            if (onTilesOf) {
                leftIsWall = !isWalkable(left, onTilesOf, tm);
                rightIsWall = !isWalkable(right, onTilesOf, tm);
                topIsWall = !isWalkable(top, onTilesOf, tm);
                bottomIsWall = !isWalkable(bottom, onTilesOf, tm);
            } else {
                leftIsWall = tm.isObstacle(left.col, left.row);
                rightIsWall = tm.isObstacle(right.col, right.row);
                topIsWall = tm.isObstacle(top.col, top.row);
                bottomIsWall = tm.isObstacle(bottom.col, bottom.row);
            }
            if (!leftIsWall) {
                updateOrFillLocation(left, dataForCurrLocation, neighborCost);
                if (!topIsWall) {
                    const topLeft = tiles.getTileLocation(col - 1, row - 1);
                    if (!tm.isObstacle(topLeft.col, topLeft.row)) updateOrFillLocation(topLeft, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomLeft = tiles.getTileLocation(col - 1, row + 1);
                    if (!tm.isObstacle(bottomLeft.col, bottomLeft.row)) updateOrFillLocation(bottomLeft, dataForCurrLocation, cornerCost);
                }
            }

            if (!rightIsWall) {
                updateOrFillLocation(right, dataForCurrLocation, neighborCost);
                if (!topIsWall) {
                    const topRight = tiles.getTileLocation(col + 1, row - 1);
                    if (!tm.isObstacle(topRight.col, topRight.row)) updateOrFillLocation(topRight, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomRight = tiles.getTileLocation(col + 1, row + 1);
                    if (!tm.isObstacle(bottomRight.col, bottomRight.row)) updateOrFillLocation(bottomRight, dataForCurrLocation, cornerCost);
                }
            }

            if (!topIsWall) updateOrFillLocation(top, dataForCurrLocation, neighborCost);
            if (!bottomIsWall) updateOrFillLocation(bottom, dataForCurrLocation, neighborCost);
        }

        const endCol = end && encountedLocations[end.col];
        const endDataNode = endCol && endCol[end.row];

        // no path found
        if (!end || !endDataNode)
            return undefined;

        let curr = endDataNode;

        // otherwise trace back path to end
        const output = [];

        while (curr) {
            output.unshift(curr.l);
            curr = curr.parent;
        }

        return output;
    }

    function tileLocationHeuristic(tile: tiles.Location, target: tiles.Location) {
        // const startCol = locationCol(tile);
        // const startRow = locationRow(tile);
        // const endCol =   locationCol(target);
        // const endRow =   locationRow(target);
        const xDist = Math.abs(target.col - tile.col)
        const yDist = Math.abs(target.row - tile.row)
        
        return Math.max(xDist, yDist) * 14 - Math.min(xDist, yDist)*10
        // return ((startCol - endCol) ** 2
        //     + (startRow - endRow) ** 2)
    }

    // TODO: these should probably be exposed on tiles.Location;
    // no reason for them to be hidden
    // function locationRow(l: tiles.Location): number {
    //     return l.y >> 4;
    // }

    // function locationCol(l: tiles.Location): number {
    //     return l.x >> 4;
    // }

    // function isWall(l: tiles.Location, tm: tiles.TileMap) {
    //     // const r = l.col // locationRow(l);
    //     // const c = l.row // locationCol(l);
    //     return tm.isObstacle(l.col, l.row) //(c, r);
    // }

    function isWalkable(l: tiles.Location, onTilesOf: Image, tm: tiles.TileMap): boolean {
        if (tm.isObstacle(l.col, l.row)) return false;
        if (!onTilesOf) return true;
        const img = tm.getTileImage(tm.getTileIndex(l.col, l.row))
        return img.equals(onTilesOf);
    }
}
