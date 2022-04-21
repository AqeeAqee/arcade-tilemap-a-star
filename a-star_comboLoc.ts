//meowbit: 128%, sim: 96%, comparing with MyLocation
namespace scene_comboLoc {
    class PrioritizedLocation {
        public visited: boolean;
        constructor(
            public col: number,
            public row: number,
            public cost?: number,
            // cost from heuristic
            public extraCost?: number,
            public parent?: PrioritizedLocation,
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
    export function aStar(start1: tiles.Location, end1: tiles.Location, onTilesOf: Image = null) {
        const tm = game.currentScene().tileMap;
        const end = new PrioritizedLocation(end1.col, end1.row)
        const start = new PrioritizedLocation(start1.col, start1.row)
        if (!tm || !start || !end || !isWalkable(end, onTilesOf, tm))
            return undefined;

        return generalAStar(tm, start, onTilesOf,
            t => tileLocationHeuristic(t, end),
            l => l.col == end.col && l.row == end.row);
    }

    // export function aStarToAnyOfType(start: tiles.Location, tile: Image, onTilesOf: Image) {
    //     const tm = game.currentScene().tileMap;
    //     if (!tm || !start)
    //         return undefined;
    //     const endIndex = tm.getImageType(tile);
    //     const potentialEndPoints = tm.getTilesByType(endIndex);

    //     if (!potentialEndPoints || potentialEndPoints.length === 0)
    //         return undefined;

    //     return generalAStar(tm, start, onTilesOf,
    //         t => 0,
    //         l => {
    //             return endIndex === tm.getTileIndex((l as any)._col, (l as any)._row)
    //         });
    // }

    export function generalAStar(tm: tiles.TileMap, start: PrioritizedLocation, onTilesOf: Image,
        heuristic: (tile: PrioritizedLocation) => number,
        isEnd: (tile: PrioritizedLocation) => boolean): tiles.Location[] {

        let countDebug = 0

        if (!isWalkable(start, onTilesOf, tm)) {
            return undefined;
        }

        const consideredTiles = new Heap<PrioritizedLocation>(
            (a, b) => (a.cost + a.extraCost) - (b.cost + b.extraCost)
            // (a, b) => (a.cost ** 2 + a.extraCost) - (b.cost ** 2 + b.extraCost)
        );
        const encountedLocations: PrioritizedLocation[][] = [[]];

        function updateOrFillLocation(loc: PrioritizedLocation, parent: PrioritizedLocation, cost: number) {
            const row = loc.row;
            const col = loc.col;

            // if (tm.isObstacle(col, row)) {
            //     return;
            // }

            const colData = (encountedLocations[col] || (encountedLocations[col] = []));
            const lData = colData[row];

            if (!lData) {
                loc.parent=parent
                loc.cost=cost
                colData[row] = loc
            } else if (!lData.visited && lData.cost > cost) {//!lData.visited &&
                lData.cost = cost;
                lData.parent = parent;
            } else {
                return;
            }

            let h = heuristic(loc);
            // need to store extra cost on location node too, and keep that up to date
            // if (h > parent.extraCost) {

            // }
            consideredTiles.push(
                new PrioritizedLocation(
                    loc.col,
                    loc.row,
                    cost,
                    h 
                )
            );

        }
        updateOrFillLocation(start, null, 0);

        let end: PrioritizedLocation = null;

        while (consideredTiles.length !== 0) {

            const currLocation = consideredTiles.pop();

            if (isEnd(currLocation)) {
                end = currLocation
                break;
            }

            const row = currLocation.row;
            const col = currLocation.col;

            const neighborCost = currLocation.cost + 1000;
            const cornerCost = currLocation.cost + 1414//1.414213562373095;  //much faster

            const dataForCurrLocation = encountedLocations[col][row];

            if (dataForCurrLocation && dataForCurrLocation.visited) {
                continue;
            }

            dataForCurrLocation.visited = true;

            const left = new PrioritizedLocation(col - 1, row);
            const right = new PrioritizedLocation(col + 1, row);
            const top = new PrioritizedLocation(col, row - 1);
            const bottom = new PrioritizedLocation(col, row + 1);

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
                    const topLeft = new PrioritizedLocation(col - 1, row - 1);
                    if (!tm.isObstacle(topLeft.col, topLeft.row)) updateOrFillLocation(topLeft, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomLeft = new PrioritizedLocation(col - 1, row + 1);
                    if (!tm.isObstacle(bottomLeft.col, bottomLeft.row)) updateOrFillLocation(bottomLeft, dataForCurrLocation, cornerCost);
                }
            }

            if (!rightIsWall) {
                updateOrFillLocation(right, dataForCurrLocation, neighborCost);
                if (!topIsWall) {
                    const topRight = new PrioritizedLocation(col + 1, row - 1);
                    if (!tm.isObstacle(topRight.col, topRight.row)) updateOrFillLocation(topRight, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomRight = new PrioritizedLocation(col + 1, row + 1);
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
        const output: tiles.Location[] = [];

        while (curr) {
            output.unshift(new tiles.Location(curr.col, curr.row, tm));
            curr = curr.parent;
        }
        return output;
    }

    function tileLocationHeuristic(tile: PrioritizedLocation, target: PrioritizedLocation) {
        // const startCol = locationCol(tile);
        // const startRow = locationRow(tile);
        // const endCol =   locationCol(target);
        // const endRow =   locationRow(target);
        const xDist = Math.abs(target.col - tile.col)
        const yDist = Math.abs(target.row - tile.row)

        return Math.max(xDist, yDist) * 1000 + Math.min(xDist, yDist) * 414
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

    function isWalkable(l: PrioritizedLocation, onTilesOf: Image, tm: tiles.TileMap): boolean {
        if (tm.isObstacle(l.col, l.row)) return false;
        // if (!onTilesOf) 
        return true;
        // const img = tm.getTileImage(tm.getTileIndex(l.col, l.row))
        // return img.equals(onTilesOf);
    }
}
