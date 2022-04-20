//meowbit: 101%
namespace scene_noLocation {
    class PrioritizedLocation {
        constructor(
            public loc: number[],
            public cost: number,
            // cost from heuristic
            public extraCost: number
        ) { }
    }

    class LocationNode {
        public visited: boolean;

        constructor(
            public l: number[],
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
    export function aStar(start1: tiles.Location, end1: tiles.Location, onTilesOf: Image = null) {
        const tm = game.currentScene().tileMap;
        const end=[end1.col,end1.row]
        const start= [start1.col, start1.row]
        if (!tm || !start || !end || !isWalkable(end, onTilesOf, tm))
            return undefined;

        return generalAStar(tm, start, onTilesOf,
            t => tileLocationHeuristic(t, end),
            l => l[0] == end[0] && l[1] == end[1]);
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

    export function generalAStar(tm: tiles.TileMap, start: number[], onTilesOf: Image,
        heuristic: (tile: number[]) => number,
        isEnd: (tile: number[]) => boolean): tiles.Location[] {

        let countDebug=0

        if (!isWalkable(start, onTilesOf, tm)) {
            return undefined;
        }

        const consideredTiles = new Heap<PrioritizedLocation>(
            (a, b) => (a.cost + a.extraCost) - (b.cost + b.extraCost)
            // (a, b) => (a.cost ** 2 + a.extraCost) - (b.cost ** 2 + b.extraCost)
        );
        const encountedLocations: LocationNode[][] = [[]];

        function updateOrFillLocation(loc: number[], parent: LocationNode, cost: number) {
            const row = loc[1];
            const col = loc[0];

            // if (tm.isObstacle(col, row)) {
            //     return;
            // }

            const colData = (encountedLocations[col] || (encountedLocations[col] = []));
            const lData = colData[row];

            if (!lData) {
                colData[row] = new LocationNode(
                    loc,
                    parent,
                    cost
                );
            } else if (!lData.visited && lData.lastCost > cost) {//!lData.visited &&
                lData.lastCost = cost;
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
                    loc,
                    cost,
                    h * 100
                )
            );

        }
        updateOrFillLocation(start, null, 0);

        let end: number[] = null;

        while (consideredTiles.length !== 0) {

            const currLocation = consideredTiles.pop();

            if (isEnd(currLocation.loc)) {
                end = currLocation.loc;
                break;
            }

            const row = currLocation.loc[1];
            const col = currLocation.loc[0];

            const neighborCost = currLocation.cost + 1000;
            const cornerCost = currLocation.cost + 1414//1.414213562373095;  //much faster

            const dataForCurrLocation = encountedLocations[col][row];

            if (dataForCurrLocation && dataForCurrLocation.visited) {
                continue;
            }

            dataForCurrLocation.visited = true;

            const left =   [col - 1, row];
            const right =  [col + 1, row];
            const top =    [col, row - 1];
            const bottom = [col, row + 1];

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
                leftIsWall = tm.isObstacle(left[0], left[1]);
                rightIsWall = tm.isObstacle(right[0], right[1]);
                topIsWall = tm.isObstacle(top[0], top[1]);
                bottomIsWall = tm.isObstacle(bottom[0], bottom[1]);
            }
            if (!leftIsWall) {
                updateOrFillLocation(left, dataForCurrLocation, neighborCost);
                if (!topIsWall) {
                    const topLeft = [col - 1, row - 1];
                    if (!tm.isObstacle(topLeft[0], topLeft[1])) updateOrFillLocation(topLeft, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomLeft = [col - 1, row + 1];
                    if (!tm.isObstacle(bottomLeft[0], bottomLeft[1])) updateOrFillLocation(bottomLeft, dataForCurrLocation, cornerCost);
                }
            }

            if (!rightIsWall) {
                updateOrFillLocation(right, dataForCurrLocation, neighborCost);
                if (!topIsWall) {
                    const topRight = [col + 1, row - 1];
                    if (!tm.isObstacle(topRight[0], topRight[1])) updateOrFillLocation(topRight, dataForCurrLocation, cornerCost);
                }
                if (!bottomIsWall) {
                    const bottomRight = [col + 1, row + 1];
                    if (!tm.isObstacle(bottomRight[0], bottomRight[1])) updateOrFillLocation(bottomRight, dataForCurrLocation, cornerCost);
                }
            }

            if (!topIsWall) updateOrFillLocation(top, dataForCurrLocation, neighborCost);
            if (!bottomIsWall) updateOrFillLocation(bottom, dataForCurrLocation, neighborCost);
        }

        const endCol = end && encountedLocations[end[0]];
        const endDataNode = endCol && endCol[end[1]];

        // no path found
        if (!end || !endDataNode)
            return undefined;

        let curr = endDataNode;

        // otherwise trace back path to end
        const output:tiles.Location[] = [];

        while (curr) {
            output.unshift(new tiles.Location(curr.l[0],curr.l[1],tm));
            curr = curr.parent;
        }
        return output;
    }

    function tileLocationHeuristic(tile: number[], target: number[]) {
        // const startCol = locationCol(tile);
        // const startRow = locationRow(tile);
        // const endCol =   locationCol(target);
        // const endRow =   locationRow(target);
        const xDist = Math.abs(target[0] - tile[0])
        const yDist = Math.abs(target[1] - tile[1])

        return Math.max(xDist, yDist) * 1000 + Math.min(xDist, yDist) * 414
        // return ((startCol - endCol) ** 2
        //     + (startRow - endRow) ** 2)
    }

    function isWalkable(l: number[], onTilesOf: Image, tm: tiles.TileMap): boolean {
        if (tm.isObstacle(l[0], l[1])) return false;
        // if (!onTilesOf) 
        return true;
        // const img = tm.getTileImage(tm.getTileIndex(l.col, l.row))
        // return img.equals(onTilesOf);
    }
}
