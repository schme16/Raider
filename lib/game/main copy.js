
var Font ;
var map
var planetNum = [];
console.log = console.log;
var player = {x: 0, y:0, realX:0, realY:0,}



ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.imageblender',
	'game.multitouch'
	
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		ig.input.bind( ig.KEY.UP_ARROW, 'up')
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down')
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left')
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right')
		Font = this.font
		ig.input.initMouse()
		ship = new ig.Image( 'media/ship.gif' );
		hex = new ig.Image( 'media/hex.png' );
		hexr = new ig.Image( 'media/hexr.png' );


	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();


		if( ig.input.state('left') ) {
			player.x +=5;
			player.realX -=5;
		}
		
		if( ig.input.state('right') ) {
			player.x -=5;
			player.realX +=5;
		}
		
		if( ig.input.state('up') ) {
			player.y +=5;
			player.realY -=5;
		}
		
		if( ig.input.state('down') ) {
			player.y -=5;
			player.realY +=5;
		}			

	
		
	},
	
	draw: function() {
		this.parent();
		
		var ctx = ig.system.context;
		ctx.save()
		ctx.translate( player.x, player.y )
		
		var minX = player.x
		var maxX = 	player.x+1024
		var minY = player.y-384
		var maxY = Math.ceil(768/hex.width)
		
		
		var w = (hex.width-2)
		var numHexes = 0
			for(X = -1; X<22; X++){
				var x = (X*48)+(player.x)
				hex.draw(x,100)
				numHexes++
			}
				
		$('.output').html(
			'Hexs: '+numHexes+ '<br>'
			+'minX: '+minX+ '<br>'
			+'maxX: '+maxX+ '<br>'
			+'miny: '+minY+ '<br>'
			+'maxY: '+maxY+ '<br>'
		)
		//player[1].drawScale(512,384, 1, ship.rotation)
		ctx.restore()
	}
	
});
	MyGame.width = 1024
	MyGame.height = 768

//network.init(prompt('Enter your username:'))

ig.main( '#canvas', MyGame, 60, MyGame.width, MyGame.height, 1 );

});



