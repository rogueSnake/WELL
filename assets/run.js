WELL.run.start = function() {
    WELL.run.game = new Phaser.Game(WELL.config.SCREEN_WIDTH, 
    	    WELL.config.SCREEN_HEIGHT, Phaser.AUTO, 'Well Inspector Simulator',
    	    {preload: WELL.run.preload, create: WELL.run.create, update: 
    	    WELL.run.update, render: WELL.run.render});
    };

WELL.run.preload = function () {
    WELL.gameOver.preload();
    WELL.intro.preload();
    WELL.item.preload();
    WELL.lantern.preload();
    WELL.level1.preload();
    WELL.level2.preload();
    WELL.level3.preload();
    WELL.monster.preload();
    WELL.weapon.preload();
    WELL.player.preload();
    };

WELL.run.create = function () {
    WELL.run.game.world.setBounds(0, 0, WELL.config.WORLD_WIDTH, WELL.config.WORLD_HEIGHT);
    WELL.run.game.physics.startSystem(Phaser.Physics.P2JS);
    WELL.run.game.physics.startSystem(Phaser.Physics.ARCADE);
    WELL.run.game.physics.p2.gravity.y = WELL.config.GRAVITY;
    WELL.run.game.physics.p2.restitution = WELL.config.RESTITUTION;
    WELL.run.game.input.addPointer();
//    WELL.run.game.physics.p2.updateBoundsCollisionGroup();
      
    WELL.gameOver.create();
    WELL.intro.create();
    WELL.item.create();
    WELL.lantern.create();
    WELL.level1.create();
    WELL.level2.create();
    WELL.level3.create();
    WELL.monster.create();
    WELL.weapon.create();
    WELL.player.create();
    };
        
WELL.run.update = function () {
    WELL.gameOver.update();
    WELL.intro.update();
    WELL.item.update();
    WELL.lantern.update();
    WELL.level1.update();
    WELL.level2.update();
    WELL.level3.update();
    WELL.monster.update();
    WELL.weapon.update();
    WELL.player.update();
    };

WELL.run.render = function () {

//Uncommenting this line will make debug information appear for the mouse/touch pointer, super useful:
//    WELL.run.game.debug.pointer(WELL.run.game.input.mousePointer);

    };

window.onload = WELL.run.start;