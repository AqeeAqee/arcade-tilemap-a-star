
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
let count: number = 0
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

let printSprite=sprites.create(image.create(60,40))
printSprite.left=0
printSprite.top=78
let msTotal1=0, msTotal2=0
while(1)
{
    comparing()
    if (controller.B.isPressed()) {
        takeScreenshot()
    }
}

/* run a-star 100 times, and show result as graphical
*  red dots for optimized, yellow for origin
*  x= time used in millisecond, y= steps of path
*/
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 100; i++) {
        comparing()
    }
    // scene.followPath(mySprite2, res, 200)
})

function comparing(){
    let loc:tiles.Location
    // do{
    loc = tiles.getRandomTileByType(imgGround)
    // }while(loc.col>31||loc.row>31)

    let ms1 = 0, ms2 = 0
    printSprite.image.fill(0)

    ms1 = control.micros()
    path = scene1.aStar(tiles.getTileLocation(19, 17), loc)
    ms1 = control.micros() - ms1

    ms2 = control.micros()
    path = scene1.aStar(tiles.getTileLocation(19, 17), loc)
    ms2 = control.micros() - ms2

    ms2 = control.micros()
    path = scene.aStar(tiles.getTileLocation(19, 17), loc)
    ms2 = control.micros() - ms2

    ms1 = control.micros()
    path = scene2.aStar(tiles.getTileLocation(19, 17), loc)
    ms1 = control.micros() - ms1

    if(path){
        count++
        msTotal2 += ms2/100
        msTotal1+=ms1/100
    }
    const y = path ? path.length : 119
    resultSprite.image.setPixel(ms2*1/1000, y, 2)
    printSprite.image.print(msTotal2.toString(), 0, 10)
    resultSprite.image.setPixel(ms1*1/1000, y, 5)
    printSprite.image.print(msTotal1.toString(), 0, 0)
    printSprite.image.print("%" +Math.roundWithPrecision(msTotal1 * 100 / msTotal2, 2).toString(), 0, 20)
    printSprite.image.print(count.toString(), 0, 30)

    
    pause(1)
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    takeScreenshot()
    // for (let l of path) {
    //     tiles.setTileAt(l, sprites.castle.tilePath7)
    //     pause(50)
    // }
})

//copied from github:aqeeaqee//arcade-snapshot, for can't import dependent ext for test
function takeScreenshot(tranparentAsBlack:boolean=true) {
const hexChars="0123456789abcdef"
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

let screenshotOnMeowbit=img`
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

// after fix, Meowbit
img`
    fff6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff57577777777777775757777777777777
    f66777777777766fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777771777777777777777177
    267777777777776fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77711777777717177771177777771717
    2255577777777776ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77311377757761677731137775776167
    6227255777777776ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff71166117757777777116611775777777
    6222755557777676ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d1771d7767777777d1771d776777777
    8622725577755768ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff76311367777577777631136777757777
    8722272277755555f55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777
    672222672776777655ff55f5f5f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777771775677777777777177567777
    6862227222776686ffff555f5ff555fffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777717177711777777771717771177
    8662627266676668ffffff55fff55ffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77177761677311377717776167731137
    8686222226668668ffffffffffff5fffffff5ffffffff55fff5ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff71717777771166117171777777116611
    8866862222228888ffffffffffffffffffffffffff5f5ff5ff5ffff5f5ff5fffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d
    ff6ee862222222f2ffffffffffffffffffffffffffffffffffffff5fffff555ffff5fff5ff5f55fffff5fff5ffffffffffffffffffffffffffffffffffffffff77777777776311367777777777631136
    fffeee6222228ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff5ff5f5ff55fffffffffffffffffff5ffffffffffffff777777777776dd67777777777776dd67
    ffffff8eef222222fffffffffffffffffffffffffffffffffffffffffffffffffff5fffffff5fffffffffffffff5ffff5ff5f5ff5ffffff55f5fffffffffffff77575777777777777757777777777777
    57577777722222222757777777777777ffffffffffffffff5757777777777777ffffff5fffffffffffffffffffffffffffffff55fffff55ff5f55fffffff5ff55757777777577777f5f5ffff5fffffff
    77777777727222277272777777777177ffffffffffffffff7777777777777177ffffffffff5fffffffffffffffffffffffffffffffffffff5fff5ffff5ffffff5777777777577177ffffffff55ffff5f
    77711777777727222221277227771717ffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7771177777751717ffff5f5ff5fffff5
    77311377757762222731132725776167ffffffffffffffff7731137775776167fffffffffffff5ffffffffffffffffffffffffffffffffffffffff5fffffffff7751135775776167ffffffffffff5fff
    71166117757727777222621722777777ffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffff
    7d1771d7767777277d1222d276272777ffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777757ffffffffffffffff
    76311367777577222622122227227777ffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777fffffffffff5ffff
    776dd677775567777762262272526222ffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffff
    777777717756777777727722725627772ff2ffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffff
    77777717177712777777771717721227ff2fff2fffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffff
    77177761677311377712226122731237f2ffff2fffff2fff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffff
    71717777771166112171277777112611f2fff2ffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffff
    7616777777d1771d2616277777d1771dffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffff
    77777777776311367227772777631136ffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffff
    777777777776dd67777777777776dd67ffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffff
    77577777777777777757777777777777ffffff2f2fffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffff
    57577777777777775757777777777277572722772277227757577777777777775757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffff
    77777777777771777727277727227177777722727222717777777777777771777777777777777177ffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffff
    77711777777717177771177777771717777117722772171777711777777717177771177777771717ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffff
    77311377757761677731137775776267723123777577626777311377757761677731137775776167ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffff
    71166117757777777116211775777777711661177527777771166117757777777116611775777777ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffff
    7d1771d7767777777d1772d7767727772d1771d7767772777d1771d7767777777d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffff
    76311367777577777631236777727777763113677775277726311367777577777631136777757777ffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffff
    776dd67777556777776dd67777556777776dd677775562727762267777556777776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffff
    77777771775677777777777177527777727777717252722277777271772677777777777177567777ffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffff
    77777717177711777777771717771277777777271777212277722712177222772777771717771177ffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffff
    77177761677311377717776127731137771777616773112272172762277221377217776167731137ffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffff
    71717777771166117171777777116611717177772711661171227772722166222171277777116611ffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffff
    7616777777d1771d7616777777d1771d7616777777d177127212727272d122222226777777d177122fffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffff
    77777777776311367777777777631136777777777763122677272777772322227222777777631132fffffffff2ffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffff
    777777777776dd67777777777776dd67777777777776dd677777772277762d67722222777776dd62ffffffff2fffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffff
    775777777777777777577777777777777757777777777777775777277277777777527777772727722fffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffff
    ffffffffffffffff575777777777777757577777777777772ff2fff2f2ffffff22572227727777275252277727777772ffff2fffffffffffffffffffffffffff57577777777777775757777777777777
    ffffffffffffffff77777777777771777777777777777172f2fffff2fff2ff2f77777222722771777277277727727177ffffffffffffffffffffffffffffffff77777777777771777777777777777177
    ffffffffffffffff77711777777717177771177777771717fffffff2fffff2ff27711727727222277771177277771717f2ffffffffffffffffffffffffffffff77711777777717177771177777771717
    ffffffffffffffff77311377757761677731137775776167fffff2fff2f2222277312372757761677732137722772167fffffffffff2ffffffffffffffffffff77311377757761677731137775776167
    ffffffffffffffff71166117757777777116611775777777ffffffffffff2ff271166127752222bbb122611775727777fffff2f2fffffffffffffff2ffffffff71166112757777777116611775777777
    ffffffffffffffff7d1771d7767777777d1771d776777777ffffffffffffffff7d1771d772b422442b1771d776777777ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d776777777
    ffffffffffffffff76311367777577777631136777757777ffffffffffffffff76311367224444dd22b1136777757777ffffffffffffffffffffffffffffffff76311367777577777631136777757777
    ffffffffffffffff776dd67777556777776dd67777556777ffffffffffffffff776dd6772b444444d4bdd627725267772fffffffffffffffffffffffffffffff776dd67777556777776dd67777556777
    ffffffffffffffff77777771775677777777777177567777ffffffffffffffff777777712b4444444d4b777127567777ff2fffffffffffffffffffffffffffff77777771775677777777777177567777
    ffffffffffffffff77777717177711777777771717771177ffffffffffffffff777777172b444444444b721717271127ffff2ff222ff2ffffff2ff22ff2fffff77777717177711777777771717771177
    ffffffffffffffff77177761677311377717776167731137ffffffffffffffff771777612b444444442e7722677311272ff2f2ff2ff2ff2fffffffffffffffff72177761677311377717776167731137
    ffffffffffffffff71717777771166117171777777116611ffffffffffffffff7171777722b4424244be277727116611f2fff22222ff22ffff2fffffffffffff71717777771166117171777777116611
    ffffffffffffffff7616777777d1771d7616777777d1771dffffffffffffffff7616777772bbb444bbbe777777d1771dffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d
    ffffffffffffffff77777777776311367777777777631136ffffffffffffffff7777777777ebbbbbbbee777777631136ffffffffffffffffffffffffffffffff77777777776311367777777777631136
    ffffffffffffffff777777777776dd67777777777776dd67ffffffffffffffff77777777777eeb44beeeb7777776dd67ffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67
    ffffffffffffffff77577777777777777757777777777777ffffffffffffffff7757777777777eeeeeebdbb777777777ffffffffffffffffffffffffffffffff77577777777777777757777777777777
    ffffffffffffffffffffffffffffffff575777777777777757577777777777775757777777777777fffb111bffffffff5757777777777777ffffffffffffffffffffffffffffffff5757777777777777
    ffffffffffffffffffffffffffffffff777777777777717777777777777771777777777777777177fffc1ddbffffffff7777777777777177ffffffffffffffffffffffffffffffff7777777777777177
    ffffffffffffffffffffffffffffffff777117777777171777711777777717177771177777771717fffc1bcfffffffff7771177777771717ffffffffffffffffffffffffffffffff7771177777771717
    ffffffffffffffffffffffffffffffff773113777577616777311377757761677731137775776167ffffccffffffffff7731137775776167ffffffffffffffffffffffffffffffff7731137775776167
    ffffffffffffffffffffffffffffffff711661177577777771166117757777777116611775777777ffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffff7116611775777777
    ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d776777777ffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffff7d1771d776777777
    ffffffffffffffffffffffffffffffff763113677775777776311367777577777631136777757777ffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffff7631136777757777
    ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777ffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffff776dd67777556777
    ffffffffffffffffffffffffffffffff777777717756777777777771775677777777777177567777ffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffff7777777177567777
    ffffffffffffffffffffffffffffffff777777171777117777777717177711777777771717771177ffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffff7777771717771177
    ffffffffffffffffffffffffffffffff771777616773113777177761677311377717776167731137ffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffff7717776167731137
    ffffffffffffffffffffffffffffffff717177777711661171717777771166117171777777116611ffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffff7171777777116611
    f1111fff11ffff11fff1111ffff1fff11116771177d1771d7616777717d1771d7616777777d1771dffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffff7616777777d1771d
    fff1fff1ff1ff1fffff1ffffff11ffff717771771763113671177771176311367777777777631136ffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffff7777777777631136
    ff11ffffff1ff111fff111fff1f1ffff117771771776dd67771777771776dd67777777777776dd67ffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffff777777777776dd67
    ffff1ffff1fff1ff1fffff1f1ff1ffff771771771777777777177777177777777757777777777777ffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffff7757777777777777
    ffff1fff1ffff1ff1fffff1f11111fffff1ff1ff1fff11ff5717777717777777575777777777777757577777777777775757777777777777ffffffffffffffff57577777777777775757777777777777
    f111fff1111fff11fff111fffff1fff111ffff11ffff11ff7111777111777177777777777777717777777777777771777777777777777177ffffffffffffffff77777777777771777777777777777177
    ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717777117777777171777711777777717177771177777771717ffffffffffffffff77711777777717177771177777771717
    ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167773113777577616777311377757761677731137775776167ffffffffffffffff77311377757761677731137775776167
    ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777711661177577777771166117757777777116611775777777ffffffffffffffff71166117757777777116611775777777
    ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777ffffffffffffffff7d1771d7767777777d1771d776777777
    fff1fff1111fff11ffff11ffff11ffff11fffffffff1111f7611136777757777763113677775777776311367777577777631136777757777ffffffffffffffff76311367777577777631136777757777
    ff11fffff1fff1ff1ff1ff1ff1ff1ff1ff1ffffffff1ffff716d167777556777776dd67777556777776dd67777556777776dd67777556777ffffffffffffffff776dd67777556777776dd67777556777
    f1f1ffff11fff1ff1fffff1ff1ff1ff1ff1ffffffff111ff7177177177567777777777717756777777777771775677777777777177567777ffffffffffffffff77777771775677777777777177567777
    1ff1ffffff1fff111ffff1ffff111ff1ff1fffffffffff1f7711171717771177777777171777117777777717177711777777771717771177ffffffffffffffff77777717177711777777771717771177
    11111fffff1fffff1fff1fffffff1ff1ff1fff11ffffff1f7717176167731137771777616773113777177761677311377717776167731137ffffffffffffffff77177761677311377717776167731137
    fff1fff111ffff11fff1111fff11ffff11ffff11fff111ff7111777777116611717177777711661171717777771166117171777777116611ffffffffffffffff71717777771166117171777777116611
    ffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771dffffffffffffffff7616777777d1771d7616777777d1771d
    ffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136777777777763113677777777776311367777777777631136ffffffffffffffff77777777776311367777777777631136
    ffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67777777777776dd67777777777776dd67ffffffffffffffff777777777776dd67777777777776dd67
    ffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777775777777777777777577777777777777757777777777777ffffffffffffffff77577777777777777757777777777777
    ffffffffffffffffffffffffffffffff57577777777777775757777777777777575777777777777757577777777777775757777777777777575777777777777757577777777777775757777777777777
    ffffffffffffffffffffffffffffffff77777777777771777777777777777177777777777777717777777777777771777777777777777177777777777777717777777777777771777777777777777177
    ffffffffffffffffffffffffffffffff77711777777717177771177777771717777117777777171777711777777717177771177777771717777117777777171777711777777717177771177777771717
    ffffffffffffffffffffffffffffffff77311377757761677731137775776167773113777577616777311377757761677731137775776167773113777577616777311377757761677731137775776167
    ffffffffffffffffffffffffffffffff71166117757777777116611775777777711661177577777771166117757777777116611775777777711661177577777771166117757777777116611775777777
    ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777
    ffffffffffffffffffffffffffffffff76311367777577777631136777757777763113677775777776311367777577777631136777757777763113677775777776311367777577777631136777757777
    ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777
    ffffffffffffffffffffffffffffffff77777771775677777777777177567777777777717756777777777771775677777777777177567777777777717756777777777771775677777777777177567777
    ffffffffffffffffffffffffffffffff77777717177711777777771717771177777777171777117777777717177711777777771717771177777777171777117777777717177711777777771717771177
    ffffffffffffffffffffffffffffffff77177761677311377717776167731137771777616773113777177761677311377717776167731137771777616773113777177761677311377717776167731137
    ffffffffffffffffffffffffffffffff71717777771166117171777777116611717177777711661171717777771166117171777777116611717177777711661171717777771166117171777777116611
    ffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d
    ffffffffffffffffffffffffffffffff77777777776311367777777777631136777777777763113677777777776311367777777777631136777777777763113677777777776311367777777777631136
    ffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67
    ffffffffffffffffffffffffffffffff77577777777777777757777777777777775777777777777777577777777777777757777777777777775777777777777777577777777777777757777777777777
    ffffffffffffffff57577777777777775757777777777777ffffffffffffffffffffffffffffffff57577777777777775757777777777777575777777777777757577777777777775757777777777777
    ffffffffffffffff77777777777771777777777777777177ffffffffffffffffffffffffffffffff77777777777771777777777777777177777777777777717777777777777771777777777777777177
    ffffffffffffffff77711777777717177771177777771717ffffffffffffffffffffffffffffffff77711777777717177771177777771717777117777777171777711777777717177771177777771717
    ffffffffffffffff77311377757761677731137775776167ffffffffffffffffffffffffffffffff77311377757761677731137775776167773113777577616777311377757761677731137775776167
    ffffffffffffffff71166117757777777116611775777777ffffffffffffffffffffffffffffffff71166117757777777116611775777777711661177577777771166117757777777116611775777777
    ffffffffffffffff7d1771d7767777777d1771d776777777ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777
    ffffffffffffffff76311367777577777631136777757777ffffffffffffffffffffffffffffffff76311367777577777631136777757777763113677775777776311367777577777631136777757777
    ffffffffffffffff776dd67777556777776dd67777556777ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777
`

//usingImageTppe_onTileOf On Meowbit, a little slow though
const usingImageTppe_onTileOf_OnMeobit = img`
    fff6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff57577777777777775757777777777777
    f66777777777766fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777771777777777777777177
    267577777777776fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77711777777717177771177777771717
    2275577777777776ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77311377757761677731137775776167
    6227777777777776ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff71166117757777777116611775777777
    6727577777777676ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d1771d7767777777d1771d776777777
    8222527777777768ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff76311367777577777631136777757777
    8752272777777778ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777
    6725226777767776ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777771775677777777777177567777
    6862227775776686ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777717177711777777771717771177
    8662252255676668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77177761677311377717776167731137
    8685255525528668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff71717777771166117171777777116611
    8866222522565588ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d
    ff6ee252555522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777776311367777777777631136
    fffeee2525252ff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67
    ffffff22555522f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77577777777777777757777777777777
    57577722225555552757577777777777ffffffffffffffff5757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffff
    77777772525252222777777777777177ffffffffffffffff7777777777777177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffff
    77711777222527277525577777771717ffffffffffffffff7771177777771717ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffff
    77311377757551227731137775776167ffffffffffffffff7731137775776167ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffff
    71166117522572555212611775777777ffffffffffffffff7116611775777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffff
    7d1771d776257225522551d776777777ffffffffffffffff7d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffff
    76311367752572255255536557757777ffffffffffffffff7631136777757777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffff
    776dd677772227255525267777556777ffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffff
    77777771775572222525255577567777ffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffff
    77777717175225252522255527775177ffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffff
    77177761677352572512555222555157ffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffff
    71717777771566252522525527516515ffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffff
    7616777777d2252d2652555252d1571dffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffff
    77777777776311367757722777635136ffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffff
    7777777777765d272757552525765567ff2fffff5fffffff777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffff
    77577777777777722752555725557577ffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffff
    57577777777772772257252552257575575577777777777757577777777777775757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff5757777777777777ffffffffffffffff
    77777777777771722575275525522557757777777777717777777777777771777777777777777177ffffffffffffffffffffffffffffffffffffffffffffffff7777777777777177ffffffffffffffff
    77711777777717172572177777571717777117777777171777711777777717177771177777771717ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717ffffffffffffffff
    77311377757761677731137575722525225115777577616777311377757761677731137775776167ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167ffffffffffffffff
    71166117757777775112215775527277511651177577777771166117757777777116611775777777ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777ffffffffffffffff
    7d1771d77677777772257527767775277d1771d7767777777d1771d7767777777d1771d776777777ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d776777777ffffffffffffffff
    76311367777577777222156577552752522223677775777776311367777577777631136777757777ffffffffffffffffffffffffffffffffffffffffffffffff7631136777757777ffffffffffffffff
    776dd67777556777756d262755552227226d567775556777776dd67777556777776dd67777556777ffffffffffffffffffffffffffffffffffffffffffffffff776dd67777556777ffffffffffffffff
    77777771775677777727777175562522272755557225777777777771775677777777777177567777ffffffffffffffffffffffffffffffffffffffffffffffff7777777177567777ffffffffffffffff
    77777717177711777777721717771572252222255757255225725527177711777777771717771177ffffffffffffffffffffffffffffffffffffffffffffffff7777771717771177ffffffffffffffff
    77177761677311377755272225735537775222522525253257177761677311377717776167731137ffffffffffffffffffffffffffffffffffffffffffffffff7717776167731137ffffffffffffffff
    71717777771166117171777777116611252557725522525522725257522566117171777777116611ffffffffffffffffffffffffffffffffffffffffffffffff7171777777116611ffffffffffffffff
    7616777777d1771d7616777777d1771d7616777772d525222515275575d2522d7616777777d1771dffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771dffffffffffffffff
    77777777776311367777777777631136777777777252513225525522775311522777777777631136ffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136ffffffffffffffff
    777777777776dd67777777777776dd677777772777525d62757777272552dd57777777777776dd67ffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67ffffffffffffffff
    77577777777777777757777777777777775752777252577752577255725777277757777777777777ffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777ffffffffffffffff
    ffffffffffffffff57577777777777775757252252252257f5f225555ff2f2ff57577777777777775757777777777777ffffffffffffffffffffffffffffffff57577777777777775757777777777777
    ffffffffffffffff7777777777777177757777277775257522f5ff25f52ffff277777777777771777777777777777177ffffffffffffffffffffffffffffffff77777777777771777777777777777177
    ffffffffffffffff777117777777171777711777727515522555f522ff52552575211777757727122751177777771717ffffffffffffffffffffffffffffffff77711777777717177771177777771717
    ffffffffffffffff773113777577616777311377552725255ff5555f2525252572251377757761677731137775776167ffffffffffffffffffffffffffffffff77311377757761677731137775776167
    ffffffffffffffff71166117757777777116611775722775f55f2f2f225f22f5712661177522bbbb2116615725777777ffffffffffffffffffffffffffffffff71166117757777777116611775777777
    ffffffffffffffff7d1771d7767777777d1771d7267722252f2f25f5525ff2ff221771d772b444444b1771d776777777ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d776777777
    ffffffffffffffff76311367777577777631135772752275f5fffff5ff525f2556512357224444dd44b1136775727777ffffffffffffffffffffffffffffffff76311367777577777631136777757777
    ffffffffffffffff776dd67777556777776dd6777555527725252f555f5225552522522222424444d4bdd67757556772ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777
    ffffffffffffffff77777771775677777777777157527752225fff5ff2555f55225527522b4244444d4b777177567777ffffffffffffffffffffffffffffffff77777771775677777777777177567777
    ffffffffffffffff777777171777117777777717177715772ff5ff2ff5555f52552722225b552244244b772717771177ffffffffffffffffffffffffffffffff77777717177711777777771717771177
    ffffffffffffffff77177761677311377717776167731137ff5f55f5522f225f2752556125455252225e756267731137ffffffffffffffffffffffffffffffff77177761677311377717776167731137
    ffffffffffffffff71717777771166117171777775116611ff25ff52fffffff5717175722552522244be757577222611ffffffffffffffffffffffffffffffff71717777771166117171777777116611
    ffffffffffffffff7616777777d1771d7616777777d1775dffffff22ffffff5f7215777772b5b545252225725221771dffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d
    ffffffffffffffff77777777776311367777777777631136ffffffffffffffff7777757555eb2b555222275772231256f2f5fffff25f55f225f2252ff2ffff2f77777777776311367577777777631136
    ffffffffffffffff777777777776dd67777777777776dd67fffffffffffff5ff77757257727e5b442e5e577722752255f252ff2ff52fffff2fffffffffffffff777777777776dd67777777777776dd67
    ffffffffffffffff77577777777777777757777777777777ffffffffffffffff7755725757727e2eee55db2577755772ffff5f2fffffffffffffffffffffffff77577777777777777757777777777777
    ffffffffffffffffffffffffffffffff57577777777777775757777777777757555772557227777222fb115bffff5ff55757577277777772f2ffffffffffffffffffffffffffffff5757777777777777
    ffffffffffffffffffffffffffffffff777777777777717777777777777771777777777775777177fffc12dbf5ff2fff7777777777577177fffffff22fffffffffffff5fffffffff7777777777777177
    ffffffffffffffffffffffffffffffff7771177777771717777117777777171777711777777517172ff51bc2fffffff27771175727771717ffffffffffffffffffffffffffffffff7771177777771717
    ffffffffffffffffffffffffffffffff773113777577616777311377757761677731137775776167ff5fc2ffffffffff7731137775776165fffff55fffff2fffffffff22ffffffff7731137775776167
    ffffffffffffffffffffffffffffffff711661177577777771166117757777777116611775777777fffff5ffff2fffff5116611725777777ffffffffffffffffffffffffffffffff7116611775777777
    ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d776777777fffffffffffffff5721771d776777777ffffffffffffffffffffffffffffffff7d1771d776777777
    ffffffffffffffffffffffffffffffff763113677775777776311367777577777631136777757777fffffffffff5f2ff7631136777757777ffffffffffffffffffffffffffffffff7631136777757777
    ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777ffffffffffffffff776dd67777556777ffffffffffffffffffffffffffffffff776dd67777556777
    ffffffffffffffffffffffffffffffff777777717756777777777771775677777777777177567777ffffffffffffffff7777777177567777ffffffffffffffffffffffffffffffff7777777177567777
    ffffffffffffffffffffffffffffffff777777171777117777777717177711777777771717771177ffffffffffffffff7777771717771177ffffffffffffffffffffffffffffffff7777771717771177
    ffffffffffffffffffffffffffffffff771777616773113777177761677311377717776167731137ffffffffffffffff7717776167731137ffffffffffffffffffffffffffffffff7717776167731137
    ffffffffffffffffffffffffffffffff717177777711661171717777771166117171777777116611ffffffffffffffff7171777777116611ffffffffffffffffffffffffffffffff7171777777116611
    ff11ffff11ffff11ffff11fff1111fff1116777777d1111d7111177777d1771d7616777777d1771dffffffffffffffff7616777777d1771dffffffffffffffffffffffffffffffff7616777777d1771d
    f1fffff1ff1ff1ff1ff1fffffff1fff1771777777761113677771777776311367777777777631136ffffffffffffffff7777777777631136ffffffffffffffffffffffffffffffff7777777777631136
    f111fff1ff1fff11fff111ffff11fff17717777777711167777717777776dd67777777777776dd67ffffffffffffffff777777777776dd67ffffffffffffffffffffffffffffffff777777777776dd67
    f1ff1ff1ff1ff1ff1ff1ff1fffff1ff1771777777777771777517777777777777757777777777777ffffffffffffffff7757777777777777ffffffffffffffffffffffffffffffff7757777777777777
    f1ff1ff1ff1ff1ff1ff1ff1fffff1ff1ff1fff11ffffff1f5717777777777777575777777777777757577777777777775757777777777777ffffffffffffffff57577777777777775757777777777777
    ff11ffff11ffff11ffff11fff111ffff11ffff11fff111ff7717777777777177777777777777717777777777777771777777777777777177ffffffffffffffff77777777777771777777777777777177
    ffffffffffffffffffffffffffffffffffffffffffffffff7771177777771717777117777777171777711777777717177771177777771717ffffffffffffffff77711777777717177771177777771717
    ffffffffffffffffffffffffffffffffffffffffffffffff7731137775776167773113777577616777311377757761677731137775776167ffffffffffffffff77311377757761677731137775776167
    ffffffffffffffffffffffffffffffffffffffffffffffff7116611775777777711661177577777771166117757777777116611775777777ffffffffffffffff71166117757777777116611775777777
    ffffffffffffffffffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777ffffffffffffffff7d1771d7767777777d1771d776777777
    ff11ffff11ffff11fff1111fff11ffff11fffffffffff1ff7611136777757777763113677775777776311367777577777631136777757777ffffffffffffffff76311367777577777631136777757777
    f1fffff1ff1ff1ff1fffff1ff1ff1ff1ff1fffffffff11ff716d167777556777776dd67777556777776dd67777556777776dd67777556777ffffffffffffffff776dd67777556777776dd67777556777
    f111fff1ff1fff11ffffff1fff11fff1ff1ffffffff1f1ff7177177177567777777777717756777777777771775677777777777177567777ffffffffffffffff77777771775677777777777177567777
    f1ff1ff1ff1ff1ff1ffff1fff1ff1fff111fffffff1ff1ff7711171717771177777777171777117777777717177711777777771717771177ffffffffffffffff77777717177711777777771717771177
    f1ff1ff1ff1ff1ff1fff1ffff1ff1fffff1fff11ff11111f7717176167731137771777616773113777177761677311377717776167731137ffffffffffffffff77177761677311377717776167731137
    ff11ffff11ffff11ffff1fffff11ffff11ffff11fffff1ff7111777777116611717177777711661171717777771166117171777777116611ffffffffffffffff71717777771166117171777777116611
    ffffffffffffffffffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771dffffffffffffffff7616777777d1771d7616777777d1771d
    ffffffffffffffffffffffffffffffffffffffffffffffff7777777777631136777777777763113677777777776311367777777777631136ffffffffffffffff77777777776311367777777777631136
    ffffffffffffffffffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67777777777776dd67777777777776dd67ffffffffffffffff777777777776dd67777777777776dd67
    ffffffffffffffffffffffffffffffffffffffffffffffff7757777777777777775777777777777777577777777777777757777777777777ffffffffffffffff77577777777777777757777777777777
    ffffffffffffffffffffffffffffffff57577777777777775757777777777777575777777777777757577777777777775757777777777777575777777777777757577777777777775757777777777777
    ffffffffffffffffffffffffffffffff77777777777771777777777777777177777777777777717777777777777771777777777777777177777777777777717777777777777771777777777777777177
    ffffffffffffffffffffffffffffffff77711777777717177771177777771717777117777777171777711777777717177771177777771717777117777777171777711777777717177771177777771717
    ffffffffffffffffffffffffffffffff77311377757761677731137775776167773113777577616777311377757761677731137775776167773113777577616777311377757761677731137775776167
    ffffffffffffffffffffffffffffffff71166117757777777116611775777777711661177577777771166117757777777116611775777777711661177577777771166117757777777116611775777777
    ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777
    ffffffffffffffffffffffffffffffff76311367777577777631136777757777763113677775777776311367777577777631136777757777763113677775777776311367777577777631136777757777
    ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777
    ffffffffffffffffffffffffffffffff77777771775677777777777177567777777777717756777777777771775677777777777177567777777777717756777777777771775677777777777177567777
    ffffffffffffffffffffffffffffffff77777717177711777777771717771177777777171777117777777717177711777777771717771177777777171777117777777717177711777777771717771177
    ffffffffffffffffffffffffffffffff77177761677311377717776167731137771777616773113777177761677311377717776167731137771777616773113777177761677311377717776167731137
    ffffffffffffffffffffffffffffffff71717777771166117171777777116611717177777711661171717777771166117171777777116611717177777711661171717777771166117171777777116611
    ffffffffffffffffffffffffffffffff7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d7616777777d1771d
    ffffffffffffffffffffffffffffffff77777777776311367777777777631136777777777763113677777777776311367777777777631136777777777763113677777777776311367777777777631136
    ffffffffffffffffffffffffffffffff777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67777777777776dd67
    ffffffffffffffffffffffffffffffff77577777777777777757777777777777775777777777777777577777777777777757777777777777775777777777777777577777777777777757777777777777
    ffffffffffffffff57577777777777775757777777777777ffffffffffffffffffffffffffffffff57577777777777775757777777777777575777777777777757577777777777775757777777777777
    ffffffffffffffff77777777777771777777777777777177ffffffffffffffffffffffffffffffff77777777777771777777777777777177777777777777717777777777777771777777777777777177
    ffffffffffffffff77711777777717177771177777771717ffffffffffffffffffffffffffffffff77711777777717177771177777771717777117777777171777711777777717177771177777771717
    ffffffffffffffff77311377757761677731137775776167ffffffffffffffffffffffffffffffff77311377757761677731137775776167773113777577616777311377757761677731137775776167
    ffffffffffffffff71166117757777777116611775777777ffffffffffffffffffffffffffffffff71166117757777777116611775777777711661177577777771166117757777777116611775777777
    ffffffffffffffff7d1771d7767777777d1771d776777777ffffffffffffffffffffffffffffffff7d1771d7767777777d1771d7767777777d1771d7767777777d1771d7767777777d1771d776777777
    ffffffffffffffff76311367777577777631136777757777ffffffffffffffffffffffffffffffff76311367777577777631136777757777763113677775777776311367777577777631136777757777
    ffffffffffffffff776dd67777556777776dd67777556777ffffffffffffffffffffffffffffffff776dd67777556777776dd67777556777776dd67777556777776dd67777556777776dd67777556777
`
