WELL.player.preload = function () {
	WELL.run.game.load.image('player', WELL.config.PLAYER_IMG);
    };

WELL.player.create = function () {
    WELL.player.sprite = WELL.run.game.add.sprite(WELL.config.CENTER_X, WELL.config.CENTER_Y, 'player');
    WELL.run.game.physics.p2.enableBody(WELL.player.sprite);
    };

WELL.player.update = function () {
    };
