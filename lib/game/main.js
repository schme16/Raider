
var Font ;
var map
var planetNum = [];
console.log = console.log;
var player ={}
var localPlayer = 1
player[localPlayer] = {x: 0, y:0}
var screen = {width: 1010, height: 743}
var numHexes;
var ctx
var currentHex = {x:0, y: 0}

	

ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.imageblender'
	
	
	
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
		ig.input.bind( ig.KEY.MOUSE1, 'click')
		
		Font = this.font
		ig.input.initMouse()
		ship = new ig.Image( 'media/ship.gif' );
		hex = new ig.Image( 'media/hex.png#121211' );
		hexb = new ig.Image( 'media/hex.png#00B3F6' );
		hexr = new ig.Image( 'media/hex.png#FF0000' );
		hexg = new ig.Image( 'media/hex.png#00FF00' );
		hexy = new ig.Image( 'media/hex.png#FFCC00' );
		hexGrid = new ig.Image( 'media/hexGrid.png#555555' );
		ctx = ig.system.context;
		//$('#canvas').bind('swipemove',function(e,a){
			//$('.debug').text(a.delta.startX)
			//player[localPlayer].x += (a.direction.startX)*5
			//player[localPlayer].y += (a.direction.startY)*5
		//});
		
		//stats = new Stats();
		//stats.setMode(0); // 0: fps, 1: ms
		
		// Align top-left
		//stats.domElement.style.position = 'absolute';
		///stats.domElement.style.left = '0px';
		//stats.domElement.style.top = '0px';
		
		//document.body.appendChild( stats.domElement );
		

	},

	update: function() {
		
		// Update all entities and backgroundMaps
		this.parent();


		if( ig.input.state('left') ) {
			player[localPlayer].x -=5;
		}
		
		if( ig.input.state('right') ) {
			player[localPlayer].x +=5;
		}
		
		if( ig.input.state('up') ) {
			player[localPlayer].y -=5;
		}
		
		if( ig.input.state('down') ) {
			player[localPlayer].y +=5;
		}
		
	/*
		var xTile = hex.width-2
			xTile = xTile+(xTile/2)
		
		var yTile = hex.width-2
			yTile = yTile+(yTile/4)-(yTile/4)
		
		var minX = player[localPlayer].x-xTile
		var maxX = 	(minX+screen.width)+xTile
		
		var minY = (player[localPlayer].y)-yTile
		var maxY = 	(minY+screen.height)+yTile
		var w = hex.width
		var numHexes = 0
		if(ig.input.pressed('click')){

			for(X = minX; X<maxX; X+=xTile){
				var xVal = Math.getPixel(Math.getTile(X,xTile),xTile)
				for(Y = minY; Y<maxY; Y +=(yTile)){
					var yVal = Math.getPixel(Math.getTile(Y,yTile),yTile)
			
					xVal2 = xVal+(xTile/2)
					yVal2 = yVal+(yTile/2)
					
					

						var hex1Points = [
							{x : (xVal+(w/4))+1, y: yVal+1 },
							{x : (xVal+((w/4)*3))-1, y : yVal+1 },
							{x : (xVal+(w))-1, y : yVal+(w/2) },
							{x : (xVal+((w/4)*3))-1, y : (yVal+w)-1 },
							{x : (xVal+(w/4))+1, y : (yVal+w)-1 },
							{x: xVal+1,  y: yVal+(w/2) },
							{x : (xVal+(w/4))+1, y: yVal+1 },
						]
						
						var hex2Points = [
							{x : (xVal2+(w/4))+1, y: yVal2+1 },
							{x : (xVal2+((w/4)*3))-1, y : yVal2+1 },
							{x : (xVal2+(w))-1, y : yVal2+(w/2) },
							{x : (xVal2+((w/4)*3))-1, y : (yVal2+w)-1 },
							{x : (xVal2+(w/4))+1, y : (yVal2+w)-1 },
							{x: xVal2+1,  y: yVal2+(w/2) },
							{x : (xVal2+(w/4))+1, y: yVal2+1 },
						]					

						if(Math.pointInPoly(hex1Points, {x:ig.input.mouse.x+player[localPlayer].x, y: ig.input.mouse.y+player[localPlayer].y})){
							if(currentHex.x !=  xVal || currentHex.y != yVal){
								currentHex = {x: xVal, y: yVal}
							}
							else{
								currentHex = false
							}
							return;
						}
						
						else if(Math.pointInPoly(hex2Points, {x:ig.input.mouse.x+player[localPlayer].x, y: ig.input.mouse.y+player[localPlayer].y})){
							if(currentHex.x !=  xVal2 || currentHex.y != yVal2){
								currentHex = {x: xVal2, y: yVal2}
							}
							else{
								currentHex = false
							}
							return;
						}
						numHexes = numHexes+2
						$('.output').empty()
						$('.output').html(numHexes)
					}
				
					
				
				
			}
		}
		
*/
	},
	
	draw: function() {
		//stats.begin();
		this.parent();
		
		
		//ctx.save()
		//ctx.translate( player[localPlayer].x*-1, player[localPlayer].y*-1 ) //move the map
		
		/*Draw calls go here*/
		//mapFuncs.draw(player[localPlayer].x, player[localPlayer].y)
		//font.draw('123',12,12)
		
		
		
		/*^^^^^^^^^^^^^^^^^^*/
		
		ctx.restore()
		//stats.end();
	}
	
});

//network.init(prompt('Enter your password:'))

ig.main( '#canvas', MyGame, 60, screen.width, screen.height, 1 );

});



