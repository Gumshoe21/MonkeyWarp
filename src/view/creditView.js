var getAnyGamepad = require('../gamepad').getAnyGamepad;
var viewManager   = require('../viewManager');
var TextBox       = require('../TextBox');

var SCREEN_HEIGHT = settings.screen.height;


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
var textbox = new TextBox(160, 144, assets.font.tetris).setColor(3);
var y = 0;
textbox.setColor(1).addText("      HI THERE.", 0, 8 * y++);
y++;
textbox.setColor(1).addText(" THIS IS OUR ENTRY", 0, 8 * y++);
textbox.setColor(1).addText("FOR THE GAMEBOYJAM#5", 0, 8 * y++);
textbox.setColor(1).addText("HELD BETWEEN OCT 1ST", 0, 8 * y++);
textbox.setColor(1).addText(" AND OCT 10TH 2016 ", 0, 8 * y++);
y++;
textbox.setColor(3).addText("   SARAH O'DONNELL", 0, 8 * y++);
textbox.setColor(2).addText("ENDING ILLUSTRATIONS", 0, 8 * y++);
y++;
textbox.setColor(3).addText("   MARK SPARLING", 0, 8 * y++);
textbox.setColor(2).addText("       MUSIC", 0, 8 * y++);
y++;
textbox.setColor(3).addText("   CEDRIC STOQUER", 0, 8 * y++);
textbox.setColor(2).addText("   PIXELS, CODING", 0, 8 * y++);
// textbox.addText(" USING PIXELBOX AND", 0, 8 * y++);
// textbox.addText("    FAMITRACKER", 0, 8 * y++);
y++;
y++;
textbox.setColor(1).addText(" THANKS FOR PLAYING ", 0, 8 * y++);

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
exports.open = function () {
	camera(0, 0);
	paper(3).cls();
	draw(textbox.texture, 0, 0);
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
exports.update = function () {
	var gamepads = getAnyGamepad();
	// action
	if (gamepads.btnp.A    ) viewManager.open('title');
	if (gamepads.btnp.B    ) viewManager.open('title');
	if (gamepads.btnp.start) viewManager.open('title');
};
