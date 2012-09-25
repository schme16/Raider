var app = require('http').createServer(handler)
	, io = require('socket.io').listen(app)
	, fs = require('fs')



app.listen(8081);

//don't change the above
io.set('log level', 2); // reduce logging




Math.randomTo = function(from,to){
	return Math.floor(Math.random()*(to-from+1)+from);
}

function getJSONLength(json){
	var count = 0
	for(i in json){
		count++
	}
	return count
}






function handler (req, res) {

}

players = {}
mapData = false

playerNumber = [
	2,1
]


io.sockets.on('connection', function (socket) {
	players[socket.id] = {id: socket.id, x:0, y:0} //add user to list

	io.sockets.emit('sync', {playerData: players, userID: socket.id}) //update the playerLists
	io.sockets.emit('map', map) //send then new playerList to all players
	console.log(socket)
	
	
	
	socket.on('disconnect', function (msg) {

		//Then we remove the player from the list
		delete players[socket.id]
		
		//and finaly we update the remaining players
	io.sockets.emit('sync', {playerData: players, userID: socket.id}) //update the playerLists
	});

});









































