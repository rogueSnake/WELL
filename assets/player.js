WELL.player.createSprite = function () {
    WELL.player.sprite = WELL.run.game.add.sprite(WELL.config.CENTER_X, 
            WELL.config.CENTER_Y, 'player');
    WELL.run.game.physics.p2.enableBody(WELL.player.sprite);
    WELL.player.sprite.body.fixedRotation = true;

    if (WELL.config.DEBUG === true) {
        WELL.player.sprite.body.debug = true;
    }
};

WELL.player.createEmitter = function () {
    WELL.player.particleEmitter = WELL.run.game.add.emitter(WELL.player.sprite.body.x, 1, 1);
    WELL.player.particleEmitter.makeParticles('playerHitParticle');
    WELL.player.particleEmitter.maxParticles = 1000;
    WELL.player.particleEmitter.start(false, 900, 20);
    WELL.player.particleEmitter.on = false;
    WELL.player.particleEmitterCooldown = 0;
};

WELL.player.updateEmitter = function () {
    WELL.player.particleEmitter.x = WELL.player.sprite.body.x;
    WELL.player.particleEmitter.y = WELL.player.sprite.body.y;

    if (WELL.player.particleEmitterCooldown > 0) {
        WELL.player.particleEmitterCooldown -= 1;
    }
};

WELL.player.emitShit = function () {
    WELL.player.particleEmitter.on = true;
    WELL.player.particleEmitterCooldown = 200;
};

WELL.player.preload = function () {
	WELL.run.game.load.image('player', WELL.config.PLAYER_IMG);
    WELL.run.game.load.image('playerHitParticle', WELL.config.PLAYER_HIT_PARTICLE);
};

WELL.player.create = function () {
    WELL.player.createSprite();
    WELL.player.createEmitter();

    WELL.scaffolding.createScaffolding();
    WELL.scaffolding.createTether();
    WELL.scaffolding.createSteadyCam();

    WELL.run.game.physics.p2.collide(WELL.player.sprite, WELL.level1.blockedLayer);
    WELL.player.sprite.body.onBeginContact.add(WELL.player.emitShit);
};

WELL.player.update = function () {
    WELL.scaffolding.update();
    WELL.player.updateEmitter();
};