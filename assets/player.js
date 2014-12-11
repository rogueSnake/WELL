

WELL.player.preload = function () {
	WELL.run.game.load.image('player', WELL.config.PLAYER_IMG);
    };

WELL.player.create = function () {
    WELL.player.sprite = WELL.run.game.add.sprite(WELL.config.CENTER_X, 
    	    WELL.config.CENTER_Y, 'player');

    WELL.player.scaffolding = WELL.run.game.add.sprite(WELL.config.CENTER_X, 0);
    WELL.run.game.physics.p2.enable(WELL.player.scaffolding, true, true);
//    WELL.player.scaffolding.body.setRectangle(150,50);
    WELL.player.scaffolding.body.kinematic = true;
//    WELL.player.scaffolding.body.setCollisionGroup(scaffolingCollision);

    WELL.run.game.physics.p2.enableBody(WELL.player.sprite);
    WELL.run.game.camera.follow(WELL.player.sprite);

    WELL.player.spring = 
            WELL.run.game.physics.p2.createSpring(WELL.player.scaffolding, 
            WELL.player.sprite, 300, 10, 1);

    WELL.run.game.physics.p2.collide(WELL.player.sprite, WELL.level1.blockedLayer);
    };

WELL.player.update = function () {
	if (WELL.player.scaffolding.body.y < (WELL.config.MAP_HEIGHT - WELL.config.SCREEN_HEIGHT)) {
        WELL.player.scaffolding.body.moveDown(WELL.config.DESCENT_SPEED);
    	}
    };
// ^^^ I'm not sure why this update function isn't making the scaffolding descend.