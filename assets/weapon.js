WELL.weapon.fireLeft = function () {

    if (WELL.run.game.time.now > WELL.weapon.nextShot) {
        //  Grab the first bullet we can from the pool
        bullet = WELL.weapon.bullets.getFirstExists(false);

        if (bullet) {
            //  And fire it
            bullet.reset(WELL.player.sprite.x - 8, WELL.player.sprite.y);
            bullet.body.velocity.x = -400;
            WELL.weapon.nextShot = WELL.run.game.time.now + WELL.weapon.cooldownTime;
            WELL.player.sprite.body.moveRight(WELL.weapon.blowback);
            }
        }
    };

WELL.weapon.fireRight = function () {

    if (WELL.run.game.time.now > WELL.weapon.nextShot) {
        //  Grab the first bullet we can from the pool
        bullet = WELL.weapon.bullets.getFirstExists(false);

        if (bullet) {
            //  And fire it
            bullet.reset(WELL.player.sprite.x + 8, WELL.player.sprite.y);
            bullet.body.velocity.x = +400;
            WELL.weapon.nextShot = WELL.run.game.time.now + WELL.weapon.cooldownTime;
            WELL.player.sprite.body.moveLeft(WELL.weapon.blowback);
            }
        }
    };

WELL.weapon.updateShooting = function () {

    if (WELL.run.game.input.activePointer.isDown === true) {

        if (WELL.run.game.input.x < (WELL.config.SCREEN_WIDTH / 3)) {
            WELL.weapon.fireLeft();
            }

        else if (WELL.run.game.input.x > (WELL.config.SCREEN_WIDTH - (WELL.config.SCREEN_WIDTH / 3))) {
            WELL.weapon.fireRight();
            }
        }
    };

WELL.weapon.preload = function () {
    WELL.run.game.load.image('bullet', WELL.config.BULLET_IMG);
    };

WELL.weapon.create = function () {
    WELL.weapon.bullets = WELL.run.game.add.group();
    WELL.weapon.bullets.enableBody = true;
    WELL.weapon.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    WELL.weapon.bullets.createMultiple(30, 'bullet');
    WELL.weapon.bullets.setAll('anchor.x', 0.5);
    WELL.weapon.bullets.setAll('anchor.y', 1);
    WELL.weapon.bullets.setAll('outOfBoundsKill', true);
    WELL.weapon.bullets.setAll('checkWorldBounds', true);

    WELL.weapon.nextShot = 0;
    WELL.weapon.cooldownTime = WELL.config.DEFAULT_COOLDOWN_TIME;
    WELL.weapon.blowback = WELL.config.DEFAULT_BLOWBACK;
    };

WELL.weapon.update = function () {
	WELL.weapon.updateShooting();
    };