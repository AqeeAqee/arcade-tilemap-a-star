
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
let res: tiles.Location[] = []
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

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let ms1=0,ms2=0
    for(let i=0;i<10;i++){
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
        let ms=0

        const col = mySprite.tilemapLocation().col
        const row = mySprite.tilemapLocation().row
        ms = control.millis()
        res = scene1.aStar(tiles.getTileLocation(0, 0), mySprite.tilemapLocation())
        ms2 += control.millis() - ms
        info.setLife(ms2)
        
        ms=control.millis()
        res = scene.aStar(tiles.getTileLocation(0, 0), mySprite.tilemapLocation())
        ms1+=control.millis()-ms
        info.setScore(ms1)

        pause(1)
    }
    // if (((res[res.length - 2].x - mySprite.x) ** 2 + (res[res.length - 2].y - mySprite.y) ** 2)<256)
    //     res.pop()
    scene.followPath(mySprite2, res, 200)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let l of res) {
        tiles.setTileAt(l, sprites.castle.tilePath7)
        pause(50)
    }
})

// testPath()
function testPath() {
    game.consoleOverlay.setVisible(true, 2)
    tiles.setTilemap(tilemap`level`)

    let mySprite: Sprite = sprites.create(img`
        . . . . . f f 4 4 f f . . . . .
        . . . . f 5 4 5 5 4 5 f . . . .
        . . . f e 4 5 5 5 5 4 e f . . .
        . . f b 3 e 4 4 4 4 e 3 b f . .
        . . f 3 3 3 3 3 3 3 3 3 3 f . .
        . f 3 3 e b 3 e e 3 b e 3 3 f .
        . f 3 3 f f e e e e f f 3 3 f .
        . f b b f b f e e f b f b b f .
        . f b b e 1 f 4 4 f 1 e b b f .
        f f b b f 4 4 4 4 4 4 f b b f f
        f b b f f f e e e e f f f b b f
        . f e e f b d d d d b f e e f .
        . . e 4 c d d d d d d c 4 e . .
        . . e f b d b d b d b b f e . .
        . . . f f 1 d 1 d 1 d f f . . .
        . . . . . f f b b f f . . . . .
    `)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)

    let flag = false;
    controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
        const res = scene.aStar(tiles.getTileLocation(0, 11), tiles.getTileLocation(0, 3), sprites.castle.tilePath5);
        const enemy = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 6 6 6 6 . . . . . .
            . . . . 6 6 6 5 5 6 6 6 . . . .
            . . . 7 7 7 7 6 6 6 6 6 6 . . .
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . .
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . .
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 .
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 .
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 .
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 .
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . .
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . .
            . . . 6 8 8 8 8 8 8 8 8 6 . . .
            . . . . 6 6 8 8 8 8 6 6 . . . .
            . . . . . . 6 6 6 6 . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
        enemy.setPosition(mySprite.x, mySprite.y)
        scene.followPath(enemy, res)
    });
    mySprite.setFlag(SpriteFlag.BounceOnWall, false)
    scene.onPathCompletion(SpriteKind.Enemy, function (sprite: Sprite, location: tiles.Location) {
        sprite.destroy(effects.ashes);
    });

    controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
        const pfs = sprites.allOfKind(SpriteKind.Enemy);
        pfs.forEach(s => {
            scene.followPath(s, null);
            s.vx = 0;
            s.vy = 0;
        });
    });

    const dbg = false;
    game.onUpdate(() => {
        if (dbg) {
            sprites.allOfKind(SpriteKind.Enemy)
                .forEach(s => s.say(Math.round(scene.spritePercentPathCompleted(s)).toString()));
        }
    });
}

// createIcon()
function createIcon() {
    scene.setBackgroundColor(13)
    tiles.setTilemap(tilemap`level1`);
    const start = tiles.getRandomTileByType(myTiles.tile2);
    const end = tiles.getRandomTileByType(myTiles.tile3)
    const path = scene.aStar(start, end)

    game.onUpdateInterval(1500, function() {
        const car = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . 6 6 6 6 6 6 6 6 . . . .
            . . . 6 9 6 6 6 6 6 6 c 6 . . .
            . . 6 c 9 6 6 6 6 6 6 c c 6 . .
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6
            . 6 8 b b b 8 b b b b 8 6 6 6 6
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8
            . 8 f f f f 8 8 8 8 f f f 8 8 8
            . . f f f f f 8 8 f f f f f 8 .
            . . . f f f . . . . f f f f . .
            . . . . . . . . . . . . . . . .
        `, randint(1, 3))
        tiles.placeOnTile(car, start)
        scene.followPath(car, path)
    });

    game.onUpdate(() => {
        for (const s of sprites.allOfKind(1)) {
            if (s.vy < 0) {
                s.setImage(sprites.vehicle.carBlueBack)
            } else if (s.vx > 0) {
                s.setImage(sprites.vehicle.carBlueRight)
            } else if (s.vx < 0) {
                s.setImage(sprites.vehicle.carBlueLeft)
            }
        }
        for (const s of sprites.allOfKind(2)) {
            if (s.vy < 0) {
                s.setImage(sprites.vehicle.carRedBack)
            } else if (s.vx > 0) {
                s.setImage(sprites.vehicle.carRedRight)
            } else if (s.vx < 0) {
                s.setImage(sprites.vehicle.carRedLeft)
            }
        }
        for (const s of sprites.allOfKind(3)) {
            if (s.vy < 0) {
                s.setImage(sprites.vehicle.carPinkBack)
            } else if (s.vx > 0) {
                s.setImage(sprites.vehicle.carPinkRight)
            } else if (s.vx < 0) {
                s.setImage(sprites.vehicle.carPinkLeft)
            }
        }
    });
    for (let i = 1; i <= 3; ++i ){
        scene.onPathCompletion(
            i,
            (sprite: Sprite, location: tiles.Location) => sprite.destroy()
        );
    }
}

