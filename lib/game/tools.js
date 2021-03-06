Math.randomTo = function(from,to){
    return Math.floor(Math.random()*(to-from+1)+from);
}

Math.deg = function(a){
	return a * (Math.PI / 180)
}

Math.rad = function(a){
	return a / (Math.PI / 180)
}

Math.angle = function(x1, y1, x2, y2){
    return Math.rad(Math.deg(Math.atan2(y2-y1, x2-x1))%360)
}

Math.isOdd = function(x) {  return ( x & 1 ) ? true : false;}





function getDiff(a,b){
	return Math.abs(a - b)
}

function getCoordDist(a, b){
	//a & b should be arrays or JSON objs eg a = {x:20, y:20}...
	return  Math.floor(Math.sqrt( Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) ))
}

function getBiggest(a,b){
	if(a>=b){
        return a 
	}
	else{
		return b
	}

}

function circleOverlap(c1, c2){
	var distance = Math.sqrt( Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2) )
	if(distance < (c1.radius+ c2.radius)){ 
		return true
    }

	return false
}

function getScale(img, max){
	//Expects an array or JSON obj in the following format: {width: x, height: x}
	var x = (100/img.width)/(100/max.width)
	var y = (100/img.height)/(100/max.height)
	return  {x:x,y:y}
}

/*
function getScale(img, max){
	//Expects an array or JSON obj in the following format: {width: x, height: x}
	var tempScale = 100/img
	var tempScale2 = 100/max
	tempScale = 100/img
	tempScale2 = 100/max
	height = (tempScale/tempScale2)


	return  height
}
*/

function getPercentage(a,b){
	return (a/val.big)*100
}

function circle(ctx, x, y, radius, custom){
	//draws a circle || Example Usage: circle(100, 100, 15, 'both', {stroke:'#000000', fill:'#AAAAAA'})
	ctx.beginPath();
		var fillType = custom.fillType || 'fill'
		ctx.fillStyle = custom.fillColor || '#ffffff'
		ctx.strokeStyle = custom.strokeColor || 'black'
		ctx.lineWidth = custom.lineWidth || 1.01
			
		ctx.arc(x, y, radius, 0, Math.PI*2, true); 
	ctx.closePath()	

	
	if(ctx[fillType]){
		ctx[fillType](); //Valid is stroke and fill
	}
	else if(fillType == 'both'){
		ctx.fill()
		ctx.stroke()
	}
	else{
		ctx.fill()
	}
	
}

function line(ctx, x, y, x2, y2, width, color){
	//draw a line
	ctx.beginPath();
	ctx.lineWidth = width || 1.01
	ctx.strokeStyle = color || '#000000'
	ctx.moveTo(x, y);
	ctx.lineTo(x2, x2);
	ctx.stroke();
	ctx.closePath();

	
}

function getJSONLength(json){
	var count = 0
	for(i in json){
		count++
	}
	return count
}

function isPointInPoly(poly, pt){
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
        && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
    return c;
}














