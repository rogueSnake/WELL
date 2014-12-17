WELL.weapon.shotgun = {};

WELL.weapon.spawn = function (x,y) {
    WELL.run.game.add.sprite(x,y, 'shotgun');
}

WELL.weapon.shotgun.grab = function () {
    WELL.weapon.cooldownTime = WELL.config.SHOTGUN_COOLDOWN_TIME;
    WELL.weapon.blowback = WELL.config.SHOTGUN_BLOWBACK;
    WELL.weapon.projectileSpeed = WELL.config.SHOTGUN_PROJECTILE_SPEED;
    };

// The following code DOES NOT break the game, it just does nothing.
// I want it to shoot three bullets, one of which flies at an angle. This is 
// just a test, there should be twelve shotgun pellets in all. If I can get
// this working I'll try to abstract it for other weapons, but I'm leaving it
// commented out to avoid confusion in the mean time. It does require input.
/*
WELL.weapon.shotgun.shoot = function () {
    var l = 0, // loop counter
        bullet = {};

    for (l = 0; l > 2; l += 1) {
        bullet = WELL.weapon.bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(WELL.player.sprite.x, WELL.player.sprite.y + 5);
            WELL.weapon.nextShot = WELL.run.game.time.now + WELL.weapon.cooldownTime;

            if (WELL.weapon.checkScreenThirds() === 1) {
                bullet.body.velocity.x -= WELL.weapon.projectileSpeed;
                WELL.player.sprite.body.moveRight(WELL.weapon.blowback);
            }

            else if (WELL.weapon.checkScreenThirds() === 3) {
                bullet.body.velocity.x += WELL.weapon.projectileSpeed;
                WELL.player.sprite.body.moveLeft(WELL.weapon.blowback);
            }


            if (l > 0) {
                bullet.body.velocity.y += WELL.weapon.projectileSpeed;

            } 

        }
    }
};
*/

WELL.weapon.checkScreenThirds = function (x) {

    if (WELL.run.game.input.x < (WELL.config.SCREEN_WIDTH / 3)) {
        return 1;
    }

    else if (WELL.run.game.input.x > (WELL.config.SCREEN_WIDTH - 
            (WELL.config.SCREEN_WIDTH / 3))) {
        
//        WELL.weapon.shotgun.shoot();
        return 3;
    }

    else {
        return false;
    }
};

WELL.weapon.fire = function() {
    var bullet = undefined;

    // This horribly ugly if statement is just making sure that the mouse/touch
    // is clicked and that the cursor isn't in the middle third of the screen.
    if (WELL.run.game.input.activePointer.isDown === true && 
            WELL.weapon.checkScreenThirds() !== false) {

        if (WELL.run.game.time.now > WELL.weapon.nextShot) {
        //  Grab the first bullet we can from the pool
            bullet = WELL.weapon.bullets.getFirstExists(false);

            if (bullet) {
            //  And fire it
                bullet.reset(WELL.player.sprite.x, WELL.player.sprite.y + 5);
                WELL.weapon.nextShot = WELL.run.game.time.now + WELL.weapon.cooldownTime;

                if (WELL.weapon.checkScreenThirds() === 1) {
                    bullet.body.velocity.x -= WELL.weapon.projectileSpeed;
                    WELL.player.sprite.body.moveRight(WELL.weapon.blowback);
                }

                else if (WELL.weapon.checkScreenThirds() === 3) {
                    bullet.body.velocity.x += WELL.weapon.projectileSpeed;
                    WELL.player.sprite.body.moveLeft(WELL.weapon.blowback);
                }
            }
        }
    }
};



WELL.weapon.preload = function () {
    WELL.run.game.load.image('bullet', WELL.config.BULLET_IMG);
    WELL.run.game.load.image('shotgun', WELL.config.SHOTGUN_IMG);
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

    // Each Well Inspector starts with a 1911.
    WELL.weapon.cooldownTime = WELL.config.PISTOL_COOLDOWN_TIME;
    WELL.weapon.blowback = WELL.config.PISTOL_BLOWBACK;
    WELL.weapon.projectileSpeed = WELL.config.PISTOL_PROJECTILE_SPEED;

    // The Well Inspector is ready to fire.
    WELL.weapon.nextShot = 0;
    
    //test code to spawn a shotgun
    WELL.weapon.spawn(200,500);
};

WELL.weapon.update = function () {
    WELL.weapon.fire();
};