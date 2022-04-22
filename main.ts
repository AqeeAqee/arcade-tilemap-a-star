

let map = tiles.createTilemap(hex`2800280005000000000000000303000000000000000000000000000000000000000000000000000000000000030300030000000003000000000000000000000000000000000000000000000000000000000000000303030303000000030000000000000000000000000000000000000000000000000000000000000000030300030300000303000000000000000000000000000000000000000000000000000000000000000003030300030000030000000003030303030303000000000000000000000000000000000000000000000303030300030300000003030000000000000000000000000000000000000000000000000000000303030303030303000003030000000000000000000000000000000000030000000000000000000303000003030303030000030000000000000000000000000000000000000300000000000000000000000000030303030000000300000000030303030000000000000000000000030000000000000000000000000303030300000003000000000300000003000000000000000000000300000300000000000000000003030303000303030303030003000000030000000000000300000300000003000000000000000000030303030303030303030303000000000003000000000303000003000000030000000000000000000303030303030303030303030300000000030300000303000003000000000300000000000000000003030303030303030303030303000000000003030300000003000000000003000000000000000000000303030303030303030303030300000000000003030303000000000000030000000000000000000303000000000303000303030303000000030303030300000000000000000300000000000000030303000000000303000000030303030303030300000303000000000000000300000000000003030300000000000303000000000303030303030300000303030000000000000303000000000003030000000000000303000000000003000303030000000303000000000000000003000000000000030000000000000303000000000003030003000000030303000000000000000003000000000000000303000000000303000000000000030000000000030303030000000000030303000000000000000000000000000303000000000000030000000000030303030303030303030000000000000000000000000000000003000000000000000300000000000303030303030300000000000000000000000000000000000003030000000000000300000000000303030303030303030303000000000000000000000000000000030300000000000300000000000303030303030303030303030300000000000000000000000000000300000000000303000000000303030303000300030303030303030000000000000000000000000303000000000300000000000003030303030003000000000303030303030000000000000000000003000000000303000000000003030303030000030000000000030303030303000000000000000000030000000003000000000003030003030300000300000000000003030303030000000000000000030300000003000000000003030000030303000003000000000000000003030303000000000000000300000000030000000000030300000303030000030000000000000000030303030300000000000003000000000300000000030300000003030300000003000000000000000003030303000000000000030000000003000000000303000000030303030300030000000000000000000303030300000000000000000003000000000303000000000303030303000300000000000000000003030303000000000000000000030000000003030000000003030303030003000000000000000000000303030000000000000000000300030003030300000000000000000003000000000000000000000003030300000000000000000003030000030300000000000000000000030000000000000000000000030303000000000000000000000000000303000000000000000000030300000000000000000000000303030303030000000000000000000003030300000000000000030300000000000000000000000003030303030300000000000000000000000000000000000000030300000000000000000000000000030303030306`, img`
.2222222..222222222222222222222222222222
..2.2222.22............................2
.....222.22............................2
2..2..22..2..222222222.................2
22...2.22.2..2.......2.................2
222....2..222..2222222........222......2
22........22..22..............2.2......2
2..22.....22.22.222222........2.22.....2
22222....222.2.22....22.......22.22222.2
....2....222.2222.222.2....222.2.22.22.2
....2....2......2.222.22..22.22.222.2..2
....2............22222.2222..22.2.2.2..2
....2.............2222..22..22.22.2.2..2
....2.............22222...222.22..2.2.22
....22.............222222....22...2.2.22
..222..2222..2.....222.....222...22.2.22
222...2222..222........22..2....22.22.22
2...22222..22.2.......22...2...22..2..22
..222.22..22.22.2...222..222...22.222.22
.22..22..22..2..2.222...22.22222.22...22
..2.22..22..22.22222....22222...22.....2
222.2..22...2.22..2..........22222.....2
...22.22...22.2.222.......2222.........2
...2..2...22.22.22...........22........2
...2..2..22.22.22.............22.......2
..22.22.22..2..2.....2.2.......222.....2
.22..2.22.222.22.....2.2222......22....2
.22.22.2..2..22.....22.2..22......2....2
.22.2.22.22.22..2...22.2...22.....222..2
.2..2.2.22..2..22...22.2....222....22..2
.2.22.2.2..22..22...22.22.....2.....2222
.2.2..2.2..2..222...222.2.....22....2222
.2.2.22.2.22..2.2.....2.2......22....222
.222.2.22.2..22.2.....2.2.......2....222
.....2.2222..2..2.....2.2.......22...2.2
.....2.2.2...2..222222.22.......22...2.2
....22..22..22......22.2........22...222
.....222.2..22.....22..2........22......
.........2...2....22..22.........2......
.........22222....2..22..........2......
`, [myTiles.transparency16, sprites.castle.tilePath7, sprites.castle.tilePath4, sprites.castle.tileGrass2, sprites.castle.tilePath8, sprites.builtin.forestTiles0, sprites.castle.tileDarkGrass2], TileScale.Sixteen);
let mySprite2: Sprite = null
let path: tiles.Location[] = []
let path1: tiles.Location[] = []
let path2: tiles.Location[] = []
let count: number = 0
// tiles.setTilemap(map)
tiles.setTilemap(tilemap`level2`)

let layers:Image=(game.currentScene().tileMap.data as any).layers 

let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    3 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . a a a a a . . . . . .
    . . . . . a c c c a . . . . . .
    . . . . . a c 3 c a . . . . . .
    . . . . . a c c c a . . . . . .
    . . . . . a a a a a . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . 2 2 b b b b b . . . . . . .
    . 2 b 4 4 4 4 4 4 b . . . . . .
    2 2 4 4 4 4 d d 4 4 b . . . . .
    2 b 4 4 4 4 4 4 d 4 b . . . . .
    2 b 4 4 4 4 4 4 4 d 4 b . . . .
    2 b 4 4 4 4 4 4 4 4 4 b . . . .
    2 b 4 4 4 4 4 4 4 4 4 e . . . .
    2 2 b 4 4 4 4 4 4 4 b e . . . .
    . 2 b b b 4 4 4 b b b e . . . .
    . . e b b b b b b b e e . . . .
    . . . e e b 4 4 b e e e b . . .
    . . . . . e e e e e e b d b b .
    . . . . . . . . . . . b 1 1 1 b
    . . . . . . . . . . . c 1 d d b
    . . . . . . . . . . . c 1 b c .
    . . . . . . . . . . . . c c . .
`, SpriteKind.Player)
const imgGround = img`
    5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7
    7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7
    7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7
    7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7
    7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7
    7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7
    7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7
    7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7
    7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7
    7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7
    7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1
    7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d
    7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6
    7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7
    7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
`
const resultSprite = sprites.create(image.create(screen.width, screen.height))
resultSprite.setFlag(SpriteFlag.RelativeToCamera, true)

let printSprite = sprites.create(image.create(60, 40))
printSprite.left = 0
printSprite.bottom = 120
let pathSprite = sprites.create(image.create(32, 40))
pathSprite.setScale(3)
pathSprite.left=0
pathSprite.right=160
let msTotal1 = 0, msTotal2 = 0
while (1) {
    comparing()
    if (controller.A.isPressed())
        controller.pauseUntilAnyButtonIsPressed()
    if (controller.B.isPressed()) 
       takeScreenshot()
}

/* run a-star 100 times, and show result as graphical
*  red dots for optimized, yellow for origin
*  x= time used in millisecond, y= steps of path
*/
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // for (let i = 0; i < 100; i++) {
    comparing()
    // }
    // scene.followPath(mySprite2, res, 200)
})

const color1=9, color2=5, colorBoth=7
function comparing() {
    let {locStart, locTarget, path}=getRandomPath()
    
    if (!path) // ensure can go from start to target
        return
    if (path.length < 2)  // too easy, skip
        return


    let ms1 = 0, ms2 = 0
    ms1 = control.micros()
    path1 = scene.aStar(locStart, locTarget)
    ms1 = control.micros() - ms1

    ms2 = control.micros()
    path2 = scene_origin.aStar(locStart, locTarget)
    ms2 = control.micros() - ms2

    if (!path1) {
        game.splash("[e] failed to(" + path.length + "):" + locTarget.col + "," + locTarget.row)
        return
    }
    if (!checkPath(path1)) {
        const srtPath = path1.map((loc) => { "[" + loc.col + "," + loc.row + "] " }).join()
        game.splash("[e] path(" + path1.length + "/" + path.length + "):" + srtPath + locTarget.col + "," + locTarget.row)
        return
    }
    count++
    ms2/=1000
    ms1/=1000
    msTotal2 += ms2 
    msTotal1 += ms1 

    printSprite.image.fill(0)
    const y = path1 ? path1.length : 119
    let c1 = resultSprite.image.getPixel(ms1, y)
    resultSprite.image.setPixel(ms1, y, (c1 == color2 || c1 == colorBoth) ? colorBoth : color1)
    let c2 = resultSprite.image.getPixel(ms2, y)
    resultSprite.image.setPixel(ms2, y, (c2 == color1 || c2 == colorBoth) ? colorBoth : color2)
    printSprite.image.print(msTotal1.toString(), 0, 0, color1)
    printSprite.image.print(msTotal2.toString(), 0, 10, color2)
    printSprite.image.print("%" + Math.roundWithPrecision(msTotal1 * 100 / msTotal2, 2).toString(), 0, 20, color1)
    printSprite.image.print(Math.roundWithPrecision(msTotal1 / 10 / count, 3) + "ms", 0, 30, color1)

    comparePaths(path2, path1)
    //!!no worry, short path may have higher cost sometime, e.g. 3 corner step longer than 4 straight step
    if(path1.length!=path2.length){ 
        // controller.pauseUntilAnyButtonIsPressed()
        
        // console.log("[e] length: " + path.length + ":" + path1.length + "[" + locStart.col + "," + locStart.row + "]->" + "[" + locTarget.col + "," + locTarget.row + "]" )
        // const srtPath1 = path1.map((loc) => { return "[" + loc.col + "," + loc.row + "]" }).join()
    }

    pause(1)
}

function getRandomPath(){
    let locTarget: tiles.Location
    do {
        locTarget = tiles.getRandomTileByType(imgGround)
    } while (tiles.tileAtLocationIsWall(locTarget))

    let locStart: tiles.Location
    do {
        locStart = tiles.getRandomTileByType(imgGround)
    } while (tiles.tileAtLocationIsWall(locStart))

    // locStart = new tiles.Location(2, 27, game.currentScene().tileMap)
    // locTarget = new tiles.Location(30, 18, game.currentScene().tileMap)


    let ms1 = 0, ms2 = 0
    //skip if impossible 
    ms2 = control.micros()
    path = scene_origin.aStar(locStart, locTarget)
    ms2 = control.micros() - ms2
    return {locStart,locTarget,path}
}

function comparePaths(path:tiles.Location[], path1:tiles.Location[]){
    pathSprite.image.fill(15)
    pathSprite.image.drawTransparentImage(layers,0,0)
    path.forEach((loc) => {
        const c=pathSprite.image.getPixel(loc.col, loc.row)
        if(c ==colorBoth) return
        pathSprite.image.setPixel(loc.col, loc.row, c == color1? colorBoth : color2) })
    path1.forEach((loc) => {
        const c = pathSprite.image.getPixel(loc.col, loc.row)
        if (c == colorBoth) return
        pathSprite.image.setPixel(loc.col, loc.row, c == color2 ? colorBoth : color1) })

    pathSprite.image.setPixel(path1[0].col, path1[0].row, 1)
    pathSprite.image.setPixel(path1[path1.length-1].col, path1[path1.length-1].row, 3)
    const charWidth = image.font5.charWidth
    pathSprite.image.print(path.length.toString(), 0, pathSprite.image.height - 8, color2)
    pathSprite.image.print(":", charWidth * 2, pathSprite.image.height - 8, colorBoth)
    pathSprite.image.print(path1.length.toString(), charWidth * 3, pathSprite.image.height - 8, color1)
}

function checkPath(path: tiles.Location[]) {
    if (path.length <= 1)
        return false
    for (let i = 1; i < path.length; i++) {
        const xDist = Math.abs(path[i].col - path[i - 1].col)
        const yDist = Math.abs(path[i].row - path[i - 1].row)
        if (xDist > 1 || yDist > 1 || (xDist == 0 && yDist == 0))
            return false
    }
    return true
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // for (let l of path) {
    //     tiles.setTileAt(l, sprites.castle.tilePath7)
    //     pause(50)
    // }
})

//copied from github:aqeeaqee//arcade-snapshot, for can't import dependent ext for test
function takeScreenshot(tranparentAsBlack: boolean = true) {
    const hexChars = "0123456789abcdef"
    console.log("img`")
    let strLast = ""
    // let str = "img`"
    for (let y = 0; y < screen.height; y++) {
        let str = "        "
        for (let x = 0; x < screen.width; x++) {
            const c = screen.getPixel(x, y)
            str += (tranparentAsBlack && c == 0) ? "f" : hexChars[c]
        }
        if (str == strLast)
            str = " " + str
        console.log(str)
        strLast = str
    }
    console.log("`")
}

let screenshotOnMeowbit = img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222fffffffff222222222222222222fffffffff999777777777222222222fffffffffffffff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222fffffffff222222222222222222fffffffff999777777777222222222fffffffffffffff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222fffffffff222222222222222222fffffffff999777777777222222222fffffffffffffff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffff222ffffffffffffffffffffffff222222222222222777777777777777777222222fff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffff222ffffffffffffffffffffffff222222222222222777777777777777777222222fff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffff222ffffffffffffffffffffffff222222222222222777777777777777777222222fff22222
    f8888857555f55555f555f5555fff5f5f5ffffffffffffffffffffffffffffff2222222222ffffff222222222222fff222222222222222222222222222222222222222222222222777fffffffff22222
    f888887f55755f5555f5555555fff5ffffffffffffffffffffffffffffffffff2222222222ffffff222222222222fff222222222222222222222222222222222222222222222222777fffffffff22222
    ff88878f87ffff555fff555555f55ff5ffffffffffffffffffffffffffffffff2222222222ffffff222222222222fff222222222222222222222222222222222222222222222222777fffffffff22222
    ff888888f8ffff55f555f555555555555fff5ffffff5ffffffffff5ffffff5ff2222222222ffffff222222222222fffffffffffffffffffffffffffffffff222222222777777777777222222fff22222
    ff8888888ffff855f55f5555f5f55f5f55555555f5ffffffffffffffffffffff2222222222ffffff222222222222fffffffffffffffffffffffffffffffff222222222777777777777222222fff22222
    ff8888888885f5f55f5f55f555ff5555f5f555f555f55ff5ffff5fffffffffff2222222222ffffff222222222222fffffffffffffffffffffffffffffffff222222222777777777777222222fff22222
    fff888888888ffffff55ff5ff55ff5f55fff5ff555ff5f5f55ff555ff55fff5f2222222222222ffffff222222222222222222222222222222222222222fff222222222777222222ffffff222fff22222
    fff8888888888888ffff55fffff5f5f5f5f5f555f5f555555555555ffff5555f2222222222222ffffff222222222222222222222222222222222222222fff222222222777222222ffffff222fff22222
    fff888888888f88888fff5ffffff5f5555f5ff5ff55fff55f555555f5ff5fff52222222222222ffffff222222222222222222222222222222222222222fff222222222777222222ffffff222fff22222
    ff8888888888888f8887fff85ffffff55ffffff5f5fff5ff555f555f55ff5ff52222222222222222ffffffffffffffffff222222222222222222fffffffff222222222777777777222fffffffff22222
    fff8f8f88888888888ff88f5ffffffffff5ffffff5fff5f5f5ff5fff5f5f5ff52222222222222222ffffffffffffffffff222222222222222222fffffffff222222222777777777222fffffffff22222
    ffff88888888888fff8f8f8f8ff8fffffffff5fffff5ffff5ff5f5f5f5555fff2222222222222222ffffffffffffffffff222222222222222222fffffffff222222222777777777222fffffffff22222
    ffff88f8888888888888888fffff5fffffff5f5ffffff5ff5fffff5fffffffff2222222222222222222222222222222fffffffffffffff222222fff222222222222222222222777222222ffffff22222
    fffff8f888888888888f88f8888f8fff8fffffffff5f5ffff55ffff55fffff5f2222222222222222222222222222222fffffffffffffff222222fff222222222222222222222777222222ffffff22222
    fffff8f8888888888888888888f88ffffffff5f5fffffffffff5f5ffffffffff2222222222222222222222222222222fffffffffffffff222222fff222222222222222222222777222222ffffff22222
    ffff8f88f8888888888888888888ff8f8ffffffffff5fffff5fffffffff5ff5f2222222222222222222222222222222222222222ffffff222ffffffffffffffffffffffff222777fff222222ffffff22
    fffffffff88888888888888888f8888ffff8ffffffffffffffffffffffffff5f2222222222222222222222222222222222222222ffffff222ffffffffffffffffffffffff222777fff222222ffffff22
    fffffff8f8888888888888888888888888f8ff8fffffffffffffffffffff5fff2222222222222222222222222222222222222222ffffff222ffffffffffffffffffffffff222777fff222222ffffff22
    fffffffff88f8f88888888888888f8ff8f8f8ffffffffffffffffffffffffff52222222222fffffffffffffffffffff222222222ffffff222fff222222222222222222777777777ffffff222222fff22
    fffffffffff88f88f88888f888888888ff88ff8fffffff8fffffffffffffffff2222222222fffffffffffffffffffff222222222ffffff222fff222222222222222222777777777ffffff222222fff22
    ffffffffffff88f8f88888f8888888888f8fff8f88fffffffffffffffff5ffff2222222222fffffffffffffffffffff222222222ffffff222fff222222222222222222777777777ffffff222222fff22
    fffffff8ffff8ff8ff8f88888888888888888fffffff5fffffffffffffffffff2222222ffffff222222222222222fffffffffffffffffffffffffff222222222222222777222222222fff222222fff22
    fffffffffffffff8f888888f88888888f8ff888fffffffffffffffffffffffff2222222ffffff222222222222222fffffffffffffffffffffffffff222222222222222777222222222fff222222fff22
    fffffffffffffffff8888888888f8888888f88fff888ffffffffffffffffffff2222222ffffff222222222222222fffffffffffffffffffffffffff222222222222222777222222222fff222222fff22
    ffffffffffff8f8ff88ff88888888888888f8f88f88fffffffffffffffffffff2222ffffff222ffffffffffff222222fffffffff222222222222fff222222222222222777222222222fff222222fff22
    ffffffffffffffff8f8f88888888f888f888f88ffff88ffff8ffffffffffffff2222ffffff222ffffffffffff222222fffffffff222222222222fff222222222222222777222222222fff222222fff22
    fffffffffffffffff8ff8f8f88888f888888f8ffffff8f88f88ff8ffff8fffff2222ffffff222ffffffffffff222222fffffffff222222222222fff222222222222222777222222222fff222222fff22
    fffffffffffffffffff8f8ff8f88888f8888888f88888fffffffffffffffffff2222fff222222fff222222ffffff222ffffff222222222222222fff222222777777777777222222222ffffffffffff22
    ffffffffffffffffffffff8888ff8f8f8888f88888ff8f8f888f88ffffffffff2222fff222222fff222222ffffff222ffffff222222222222222fff222222777777777777222222222ffffffffffff22
    fffffffffffffffffffff8f88888ffff88fff8888888ff8ffff8f88fffffffff2222fff222222fff222222ffffff222ffffff222222222222222fff222222777777777777222222222ffffffffffff22
    ffffffffffffffffffffffff88f88888f8888ff8888f888888fff88fffffffff2222fff222222fffffffff222222222ffffff222222222222222fff222777777222222222222222222222222fff22222
    fffffffffffffffffffffff8f888fff888f88888f888f8f8f8ff88f8fffffff82222fff222222fffffffff222222222ffffff222222222222222fff222777777222222222222222222222222fff22222
    ffffffffffffffffffffffffff88ffff8f888ff88888f8888f8f88ffffffffff2222fff222222fffffffff222222222ffffff222222222222222fff222777777222222222222222222222222fff22222
    fffffffffffffffffffff8fffff8ffff8f8f88888fff88888f8ffff88f8ffff82222fffffffff222222fffffffffffffff222222222222222222fff222777222222222222fffffffffffffffffffff22
    ffffffffffffffffffffff8ffff88fffffff8f88f888ff8f88888ffffff8ffff2222fffffffff222222fffffffffffffff222222222222222222fff222777222222222222fffffffffffffffffffff22
    ffffffffffffffffffffffffffffffffffffff88f88ff88f8f888fff8f8fff8f2222fffffffff222222fffffffffffffff222222222222222222fff222777222222222222fffffffffffffffffffff22
    ffffffffffffffffffffffffffffffff8f8ff8fff8f8fff8ff88ffffff88ffff2222222222ffffff222222222222222222222222222222222222fff222777222ffffffffffff222222222222222fff22
    ffffffffffffffffffffffffffffffffffffff8ff88f8f8f88888f8ff88f8fff2222222222ffffff222222222222222222222222222222222222fff222777222ffffffffffff222222222222222fff22
    fffffffffffffffffffffffffffffffffffffffffff88ff8f8fffffff88fffff2222222222ffffff222222222222222222222222222222222222fff222777222ffffffffffff222222222222222fff22
    ffffffffffffffffffffffffffffffffff8f8fffffff888f88ff88f8ff8ffff82222222222222fff222222fffffffffffffffffffffffffffffffff222777222fff222222222222222222222222fff22
    fffffffffffffffffffffffffffffff8fffffff8ffffff8fffff8ffffff8ff8f2222222222222fff222222fffffffffffffffffffffffffffffffff222777222fff222222222222222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffff8fffffff88fff88fff8f2222222222222fff222222fffffffffffffffffffffffffffffffff222777222fff222222222222222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fff222222fff222222222222222222222222222fff222777ffffff222ffffffffffffffffffffffff22
    ffffffffffffffffffffffffffffffff8fffffffffffffffff8ffffffff8ffff2222222222222fff222222fff222222222222222222222222222fff222777ffffff222ffffffffffffffffffffffff22
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fff8ff2222222222222fff222222fff222222222222222222222222222fff222777ffffff222ffffffffffffffffffffffff22
    fffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffff2222222222222fffffffffffffffffffffffffffffffff222222fff222777222222222ffffff222fff222222222fff22
    fffffffffffffffffffffffffffff8fffffffffffffffffffffffffff8ffffff2222222222222fffffffffffffffffffffffffffffffff222222fff222777222222222ffffff222fff222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffff222222fff222777222222222ffffff222fff222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff2222222222222222fff222222222222222222222222fff222777777777777222222ffffff222222fff222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222fff222222222222222222222222fff222777777777777222222ffffff222222fff222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222fff222222222222222222222222fff222777777777777222222ffffff222222fff222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffff222222ffffffffffffffffffffffff777222222222222ffffffffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffff222222ffffffffffffffffffffffff777222222222222ffffffffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffff222222ffffffffffffffffffffffff777222222222222ffffffffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fff222222222222222222555888222222222ffffff222222222222222222fffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fff222222222222222222555888222222222ffffff222222222222222222fffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fff222222222222222222555888222222222ffffff222222222222222222fffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fffffffffffffff222222555888222222222fff222222fffffffff222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fffffffffffffff222222555888222222222fff222222fffffffff222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222fff222222fffffffffffffff222222555888222222222fff222222fffffffff222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222ffffff222222222222222fff222222777ffffff222ffffff222222ffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222ffffff222222222222222fff222222777ffffff222ffffff222222ffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222ffffff222222222222222fff222222777ffffff222ffffff222222ffffffffffffffffff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222fffffffffffffffffffff222222777222ffffffffffff222222222222222222222fff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222fffffffffffffffffffff222222777222ffffffffffff222222222222222222222fff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222fffffffffffffffffffff222222777222ffffffffffff222222222222222222222fff222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222222222222fff222222222ffffff777222222222222fffffffffffffffffffffffffffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222222222222fff222222222ffffff777222222222222fffffffffffffffffffffffffffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222222222222222222fff222222222ffffff777222222222222fffffffffffffffffffffffffffffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222fffffffff222222fffffffffffffff222777777222222222222222222222222222fff222222fff22222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fff222fffffffff222222fffffffffffffff222777777222222222222222222222222222fff222222fff22222
    f1111fff11fff1111ffff1fff1111ffffffff1111fff1ffff1111fffffffffff2222222fff222fffffffff222222fffffffffffffff222777777222222222222222222222222222fff222222fff22222
    fff1fff1ff1ff1ffffff11fff1fffffffffffff1fff11fffffff1fffffffffff2222222fffffffff222ffffff222fff222222fff222222222111fffffffffffffff222222222ffffff222222ffffff22
    ff11fff1ff1ff111fff1f1fff111ffffffffff11ffff1fffffff1fffffffffff2222222fffffffff222ffffff222fff222222fff222222222111fffffffffffffff222222222ffffff222222ffffff22
    ffff1fff111fffff1f1ff1ffffff1fffffffffff1fff1ffffff1ffffffffffff2222222fffffffff222ffffff222fff222222fff222222222111fffffffffffffff222222222ffffff222222ffffff22
    ffff1fffff1fffff1f11111fffff1fff11ffffff1fff1fffff1fffffffffffff2222222222fff222222222fffffffff222222fff222222222222222222222222fffffffffffffff222222222222fff22
    f111ffff11fff111fffff1fff111ffff11fff111fff111ffff1fffffffffffff2222222222fff222222222fffffffff222222fff222222222222222222222222fffffffffffffff222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fff222222222fffffffff222222fff222222222222222222222222fffffffffffffff222222222222fff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffff222222222222222ffffff222222222222222222222222fff222222222222222222222ffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffff222222222222222ffffff222222222222222222222222fff222222222222222222222ffffff22
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffff222222222222222ffffff222222222222222222222222fff222222222222222222222ffffff22
    f1111ff1111fff11ffff1fffff11fff1111ffffffff1111fff11ffff1fffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222
    fff1ffffff1ff1ff1ff11ffff1ff1fffff1ffffffff1fffff1ff1ff11fffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222
    ff11ffffff1ff1ff1fff1ffff1ff1fffff1ffffffff111ffff11ffff1fffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222
    ffff1ffff1fff1ff1fff1fffff111ffff1ffffffffffff1ff1ff1fff1fffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffff1fff1ffff1ff1fff1fffffff1fff1fffff11ffffff1ff1ff1fff1fffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    f111ffff1fffff11fff111ffff11ffff1fffff11fff111ffff11fff111ffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffff111111fffffffffffffffffffffffffff111111111111fffffffff111111fffffffffff
    1f1f1fff1fffff11ffffffffff11ffff11ffffffffffffffffffffffffffffffffff111111111111fffffffff111111fffffffffffffffffffffffffff111111111111fffffffff111111fffffffffff
    f1ff1ff11ffff1ff1ffffffff1fffff1ff1fffffffffffffffffffffffffffffffff111111111111fffffffff111111fffffffffffffffffffffffffff111111111111fffffffff111111fffffffffff
    fff1ffff1ffff1ff1ffffffff111ffff11ffffffffffffffffffffffffffffffffff111fffffffffffffff111ffffff111fffffffff111111fffffffff111fffffffffffffff111ffffff111ffffffff
    ff1fffff1ffff1ff1ffffffff1ff1ff1ff1fffffffffffffffffffffffffffffffff111fffffffffffffff111ffffff111fffffffff111111fffffffff111fffffffffffffff111ffffff111ffffffff
    f1ff1fff1ffff1ff1fff11fff1ff1ff1ff1fffffffffffffffffffffffffffffffff111fffffffffffffff111ffffff111fffffffff111111fffffffff111fffffffffffffff111ffffff111ffffffff
    f1f1f1f111ffff11ffff11ffff11ffff11ffffffffffffffffffffffffffffffffff111111111fffffffff111ffffff111fffffffff111111fffffffff111111111fffffffff111ffffff111ffffffff
    ffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffff111ffffff111fffffffff111111fffffffff111111111fffffffff111ffffff111ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffff111ffffff111fffffffff111111fffffffff111111111fffffffff111ffffff111ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffff111ffffff111fffffffffffffffffffffffffffffffff111ffffff111ffffff111ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffff111ffffff111fffffffffffffffffffffffffffffffff111ffffff111ffffff111ffffffff
    ff11fffffffffff1ffff11fff1111fff11ffff11ffff11ffff11fff1111ffffffffffffffffff111ffffff111ffffff111fffffffffffffffffffffffffffffffff111ffffff111ffffff111ffffffff
    f1ff1fffffffff11fff1fffffff1fff1ff1ff1ff1ff1ff1ff1ffffffff1ffffffffffffffffff111ffffff111ffffff111fffffffff111111ffffffffffffffffff111ffffff111ffffff111ffffffff
    ffff1ffffffff1f1fff111ffff11ffff11ffff11ffffff1ff111ffffff1ffffffffffffffffff111ffffff111ffffff111fffffffff111111ffffffffffffffffff111ffffff111ffffff111ffffffff
    fff1ffffffff1ff1fff1ff1fffff1ff1ff1ff1ff1ffff1fff1ff1ffff1fffffffffffffffffff111ffffff111ffffff111fffffffff111111ffffffffffffffffff111ffffff111ffffff111ffffffff
    ff1fffff11ff11111ff1ff1fffff1ff1ff1ff1ff1fff1ffff1ff1fff1fffffffffff111111111ffffffffffff111111ffffffffffff111111fffffffff111111111ffffffffffff111111fffffffffff
    f1111fff11fffff1ffff11fff111ffff11ffff11fff1111fff11ffff1fffffffffff111111111ffffffffffff111111ffffffffffff111111fffffffff111111111ffffffffffff111111fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffff111111ffffffffffff111111fffffffff111111111ffffffffffff111111fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`
