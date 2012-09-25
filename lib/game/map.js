	mapFuncs = {}


	mapFuncs.draw = function(locX, locY){
	/*	

		
		var minX = locX-xTile
		var maxX = 	(minX+screen.width)+xTile
		
		var minY = (locY)-yTile
		var maxY = 	(minY+screen.height)+yTile
		var w = hex.width
*/
		var xTile = hexGrid.width-12
		
		var yTile = hexGrid.height-23
		
		var minX = locX-xTile
		var maxX = 	(minX+screen.width)
		
		var minY = (locY)-yTile
		var maxY = 	(minY+screen.height)
		var w = hex.width
		var tileSize = hex.width-2
				

		var numHexes = 0
		isSelected = false
		if( isFinite(xTile) && isFinite(yTile) && isFinite(minX) && isFinite(maxX) && isFinite(minY) && isFinite(minY) ){	
			for(X = minX; X<maxX; X+=xTile){
				var xVal = Math.getPixel(Math.getTile(X,xTile),xTile)
				for(Y = minY; Y<maxY; Y +=(yTile)){
					var yVal = Math.getPixel(Math.getTile(Y,yTile),yTile)
					hexGrid.draw(xVal, yVal)	


					var numHexes  = numHexes+2
					if(numHexes > 10){break} //safegaurd
				}
				if(numHexes > 10){break} //safegaurd
				
			}
		
		
		
		}
		
		hexg.draw(currentHex.x, currentHex.y)	
	}