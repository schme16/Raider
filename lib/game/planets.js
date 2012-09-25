planetFuncs = []





planetFuncs.getPlanetByCoord = function(x,y){
		t = {x: x, y:y, radius: 1}
	for(var i in map){
	var v = map[i];
	
		if(v.planetNumber){
			if(circleOverlap(v, t)){
				return i
			}
			
		}
	}
	return false
}



planetFuncs.draw = function(planetImages, map){
	for(var i in map){
		var v = map[i];
		
		
		
		if(v.planetNumber){
			if(!v.angle){
				v.angle = 0
			}

			if(v.owner && players[v.owner]){
				
				v.color = players[v.owner].color
			}
			else{
				v.color = 'white'
			}
						

			v.img = planetImages[v.color][v.planetNumber-1]
			v.angle = v.angle+1
			if(!v.scale){
				v.scale = Math.floor(getScale( 150, (v.radius*2))*100)/100
			}
			var circleColor = v.color
			var circleThickness = 5
			var circleRadiusPadding = -2

			if(v.isSelected){
				circleColor = 'white'
				circleThickness =5
				circleRadiusPadding = 0
			}			
			drawCircle(v.x,v.y,v.radius+circleRadiusPadding, circleColor, circleThickness)

			v.img.drawScale(v.x, v.y, v.scale, v.angle)

			Font.draw( v.radius, v.x, v.y, ig.Font.ALIGN.CENTER );
			

		}
	}
}




