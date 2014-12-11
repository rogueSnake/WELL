WELL.player.createSprite = function () {
    WELL.player.sprite = WELL.run.game.add.sprite(WELL.config.CENTER_X, 
            WELL.config.CENTER_Y, 'player');
    WELL.run.game.physics.p2.enableBody(WELL.player.sprite);
    WELL.run.game.camera.follow(WELL.player.sprite);
    };

WELL.player.createEmitter = function () {
    WELL.player.particleEmitter = WELL.run.game.add.emitter(WELL.player.sprite.body.x, 1, 1);
    WELL.player.particleEmitter.makeParticles('playerHitParticle');
    WELL.player.particleEmitter.maxParticles = 1000;
    WELL.player.particleEmitter.start(false, 900, 20);
    };

WELL.player.createScaffolding = function () {
    WELL.player.scaffolding = WELL.run.game.add.sprite(WELL.config.CENTER_X, 0);
    WELL.run.game.physics.p2.enable(WELL.player.scaffolding, true, true);
//    WELL.player.scaffolding.body.setRectangle(150,50);
    WELL.player.scaffolding.body.kinematic = true;
//    WELL.player.scaffolding.body.setCollisionGroup(scaffolingCollision);
    };

WELL.player.createTether = function () {
    WELL.player.tether = 
            WELL.run.game.physics.p2.createSpring(WELL.player.scaffolding, 
            WELL.player.sprite, 300, 10, 1);
    };

WELL.player.updateScaffolding = function () {
    if (WELL.player.scaffolding.body.y < (WELL.config.WORLD_HEIGHT - WELL.config.SCREEN_HEIGHT)) {
        WELL.player.scaffolding.body.moveDown(WELL.config.DESCENT_SPEED);
        }    
    };
// ^^^ I'm not sure why this update function isn't making the scaffolding descend.
//Me neith'.

WELL.player.updateEmitter = function() {
    WELL.player.particleEmitter.x = WELL.player.sprite.body.x;
    WELL.player.particleEmitter.y = WELL.player.sprite.body.y;
    };

WELL.player.preload = function () {
	WELL.run.game.load.image('player', WELL.config.PLAYER_IMG);
    WELL.run.game.load.image('playerHitParticle', WELL.config.PLAYER_HIT_PARTICLE);
    };

WELL.player.create = function () {
    WELL.player.createSprite();
    WELL.player.createEmitter();
    WELL.player.createScaffolding();
    WELL.player.createTether();
    WELL.run.game.physics.p2.collide(WELL.player.sprite, WELL.level1.blockedLayer);
    };

WELL.player.update = function () {
    WELL.player.updateScaffolding();
    WELL.player.updateEmitter();
    };