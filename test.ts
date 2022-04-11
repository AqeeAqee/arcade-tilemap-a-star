
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
tiles.setTilemap(map)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
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
tiles.placeOnRandomTile(mySprite, img`
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
`)
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
const resultSprite=sprites.create(image.create(screen.width,screen.height))
resultSprite.setFlag(SpriteFlag.RelativeToCamera, true)

/* run a-star 100 times, and show result as graphical
*  red dots for optimized, yellow for origin
*  x= time used in millisecond, y= steps of path
*/
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 100; i++) {
        let loc=tiles.getRandomTileByType(imgGround)
        let ms1 = 0, ms2 = 0

        ms1 =control.millis()
        path = scene_origin.aStar(tiles.getTileLocation(0, 0), loc)
        ms1 =control.millis()-ms1

        ms2 = control.millis()
        path = scene.aStar(tiles.getTileLocation(0, 0), loc)
        ms2 = control.millis() - ms2
        
        const y = path ? path.length:119
        resultSprite.image.setPixel(ms1, y, 5)
        resultSprite.image.setPixel(ms2, y, 2)

        pause(1)

    }
    // scene.followPath(mySprite2, res, 200)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    takeScreenshot()
    // for (let l of path) {
    //     tiles.setTileAt(l, sprites.castle.tilePath7)
    //     pause(50)
    // }
})

//copied from github:aqeeaqee//arcade-screenshot, for can't import dependent ext for test
let hexChars="0123456789abcdef"
function takeScreenshot(tranparentAsBlack:boolean=true) {
    console.log("img`")
    let strLast = ""
    // let str = "img`"
    for (let y = 0; y < screen.height; y++) {
        let str = "        "
        for (let x = 0; x < screen.width; x++) {
            const c = screen.getPixel(x, y)
            str += (tranparentAsBlack&&c==0)? "f" : hexChars[c]
        }
        if (str == strLast)
            str = " " + str
        console.log(str)
        strLast = str
    }
    console.log("`")
}

let screenshotOnMeobit=img`
    3777177761677311377717776167731137771777616773113777177761677311377717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1171717777771166117171777777116611717177777711661171717777771166117171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3677777777776311367777777777631136777777777763113677777777776311367777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7727525757777777777757777777777777775777777777777777577777777777777757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff2ffffffff5fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff2ffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff2fff2ffffffffffffff5f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff22fffffffffffffffffffffffffffffffff5fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff22ffffffffffffffffffffffffffff55ffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff22fff2ffffffffffffffffffffffffffffffffff5ffff5ffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2f22f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff5f5f5fffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff2ffff2fffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
    fffffffffffff22ff2ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff5ffff5fffff5ffffffffffffffffffffffffffff
    fffffffffff2ff22ffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2fff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffff2ffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff22ff22f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffff5ff5fffff5ffffffffffff
    ffffffffffffffffffffffffffff2ff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff2f2222ff2ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5fffffffff5
    ffffffffffffffffffffffff2ffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff2fffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff2fffff2f2ffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff22ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff2ff2ff2fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff2fffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff2ffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff2fffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff2f2ffffffffffffffff2f2ffffff2fffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffff2f2fffffffff2fff2ffff2ffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff2fff2fff222fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff2fffffffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5757777777777777575777777777777757577777777777775757727777777772ffff22fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777177777777777777717777777777777771777777777772272127fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7771177777771717777117777777171777711777772717177771177777771717fff2ffffff2ff2fffff22fffffffffffffff2fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff77311377757761677731137775776167773113777577616777311377252aaaaafffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff71166117757777777116611775777777711661177577777771166117757acccaffffffffffffffffff2fffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767ac3cafffffffffffffffffff2fff2fffffffffffffff2ffffffff2fffffffffffffffffffffffffffff
    ffffffffffffffffff76311367777577777631136777757777763113677775777776311367777acccafffffffffff2fffffff2fffffffffff2ffffffffffff2fffffffffffffffffffffffffffffffff
    ffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777776dd677775aaaaafffffffffffffffffffffffffffffff2ffffffffffffffffff2fff2fffffffffffffffffffffff
    ffffffffffffffffff7777777177567777777777717756777777777771775677777777777177567777fffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777771717771177777777171777117777777717177711777777771717771177ffffffffffff2fffffffffffffffffffffffffff2ffffffffffffffff2ffffffffffffffffffff
    ffffffffffffffffff7717776167731137771777616773113777177761677311377717776167731137fffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7171777777116611717177777711661171717777771166117171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffff
    ffffffffffffffffff7777777777631136777777777763113677777777776311367777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff777777777776dd67777777777776dd67777777777776dd67777777777776dd67ffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7757777777777777775777777777777777577777777777777757777777777777fffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    17ffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    67ffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    37ffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    11ffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1dffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    36ffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    67ffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    775757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffff
    777777777777777177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffff
    177771177777771717ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffff
    677731137775776167ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffff
    777116611775777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffff
    777d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffff
    777631136777757777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffff
    77776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffff
    777777777177567777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffff
    777777771717771177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffff
    377717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffff
    117171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffff
    1d7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffff
    367777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffff
    67777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffff
    777757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffff
    7757577777777777775757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff57577777777777775757777777777777ffffffffffffffffffffffffffffff
    7777777777777771777777777777777177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777771777777777777777177ffffffffffffffffffffffffffffff
`

