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
	player : {},
	run : {},
    };

WELL.config.SCREEN_WIDTH = 600;
WELL.config.SCREEN_HEIGHT = 800;

WELL.config.MAP_WIDTH = WELL.config.SCREEN_WIDTH;
WELL.config.MAP_HEIGHT = 2000;

WELL.config.CENTER_X = (WELL.config.SCREEN_WIDTH / 2);
WELL.config.CENTER_Y = (WELL.config.SCREEN_HEIGHT / 2);

WELL.config.TILEMAP = 'assets/images/tilemap.png';

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