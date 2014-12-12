// Ye olde code mappe:
var WELL = {
	config : {},
	gameOver : {},
	intro : {},
	item : {},
	lantern : {},
	level1 : {},
	level2 : {},
	level3 : {},
	monster : {},
	weapon : {},
	player : {},
	run : {},
    };

WELL.config.DEBUG = true;
// ^^^ Setting this to false removes debug boxes.

WELL.config.SCREEN_WIDTH = 320;
WELL.config.SCREEN_HEIGHT = 480;

WELL.config.WORLD_WIDTH = WELL.config.SCREEN_WIDTH;
WELL.config.WORLD_HEIGHT = (WELL.config.SCREEN_HEIGHT * 20);

WELL.config.CENTER_X = (WELL.config.SCREEN_WIDTH / 2);
WELL.config.CENTER_Y = (WELL.config.SCREEN_HEIGHT / 2);

WELL.config.GRAVITY = 900;
WELL.config.RESTITUTION = 1;
WELL.config.DESCENT_SPEED = 80;

WELL.config.TETHER_LENGTH = 300;
WELL.config.TETHER_STIFFNESS = 800;
WELL.config.TETHER_DAMPING = 30;

WELL.config.DEFAULT_BLOWBACK = 200;
WELL.config.DEFAULT_COOLDOWN_TIME = 350;

WELL.config.TILEMAP_IMG = 'assets/images/tilemap.png';
WELL.config.PLAYER_IMG = 'assets/images/player.png';
WELL.config.PLAYER_HIT_PARTICLE = 'assets/images/playerHitParticle.png';
WELL.config.BULLET_IMG = 'assets/images/bullet.png';

WELL.config.LEVEL1_MAP = 'assets/maps/level1.json';

// Check to see if we are living the future. If we are living in the future and
// the E.C.M.A. has convinced modern browsers to have Object.create predefined,
// go with that definition. Otherwise add it as a method of the global Object.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
        };
    }