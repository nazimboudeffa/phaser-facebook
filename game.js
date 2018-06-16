PixelW = window.innerWidth;
PixelH = window.innerHeight;
var game = new Phaser.Game(PixelW, PixelH, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var sprite;

function  preload () {
  // This is equivalent to <https://examples.phaser.io/assets/>.
  this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create() {
  game.stage.backgroundColor = 0x3b5998;
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
  sprite.inputEnabled = true;
  sprite.events.onInputDown.add(myHandler, this);
  var text = game.add.text(10, 10, PixelW + " " + " " + PixelH, { font: "65px Arial", fill: "#ffff00", align: "center" });
}

function myHandler() {
  sprite.anchor.setTo(0.5, 0.5);
  sprite.x = Math.floor(Math.random() * PixelW);
  sprite.y = Math.floor(Math.random() * PixelH);
}

function update() {

}
