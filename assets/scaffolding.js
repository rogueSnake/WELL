
WELL.scaffolding.createScaffolding = function () {
    WELL.scaffolding.sprite = WELL.run.game.add.sprite(WELL.config.CENTER_X, 0);
    WELL.run.game.physics.p2.enable(WELL.scaffolding.sprite);
    WELL.scaffolding.sprite.body.kinematic = true;

    if (WELL.config.DEBUG === true) {
        WELL.scaffolding.sprite.body.debug = true;
    }
};

WELL.scaffolding.createSteadyCam = function () {
    WELL.scaffolding.steadyCam = WELL.run.game.add.sprite(WELL.config.CENTER_X, (WELL.scaffolding.sprite.body.y + 300));
    WELL.run.game.camera.follow(WELL.scaffolding.steadyCam);
    WELL.run.game.physics.arcade.enable(WELL.scaffolding.steadyCam);
};

WELL.scaffolding.createTether = function () {
    WELL.scaffolding.tether = 
            WELL.run.game.physics.p2.createSpring(WELL.scaffolding.sprite, 
            WELL.player.sprite, WELL.config.TETHER_LENGTH, WELL.config.TETHER_STIFFNESS, 
            WELL.config.TETHER_DAMPING);
};

WELL.scaffolding.preload = function () {
};

WELL.scaffolding.create = function () {
    WELL.scaffolding.createScaffolding();
    WELL.scaffolding.createTether();
    WELL.scaffolding.createSteadyCam();
};

WELL.scaffolding.update = function () {

    if (WELL.scaffolding.sprite.body.y < (WELL.config.WORLD_HEIGHT - WELL.config.SCREEN_HEIGHT)) {
        WELL.scaffolding.sprite.body.moveDown(WELL.config.DESCENT_SPEED)
    }
    WELL.scaffolding.steadyCam.body.y = (WELL.scaffolding.sprite.body.y + 300);    
};