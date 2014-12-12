WELL.level1.preload = function () {
	WELL.run.game.load.image('gameTiles', WELL.config.TILEMAP_IMG);
    WELL.run.game.load.tilemap('level1', WELL.config.LEVEL1_MAP, null, Phaser.Tilemap.TILED_JSON);
    };




WELL.level1.create = function () {
    WELL.level1.map = WELL.run.game.add.tilemap('level1');

    //the first parameter is the tileset name as specified in Tiled.
    WELL.level1.map.addTilesetImage('tilemap', 'gameTiles');

    // 'background' and 'walls' are both specified in Tiled.
    WELL.level1.backgroundlayer = WELL.level1.map.createLayer('background');
    WELL.level1.blockedLayer = WELL.level1.map.createLayer('walls');

    WELL.run.game.physics.p2.enable(WELL.level1.blockedLayer);
    //collision on blockedLayer
    WELL.level1.map.setCollisionBetween(1, 2000, true, WELL.level1.blockedLayer);
    };

WELL.level1.update = function () {
    };
