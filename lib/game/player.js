var playerFuncs = {}

var players = {}

var playerSelf


playerFuncs.createPlayer = function(id,color){
	players[id] = {
		id: id,
		color: color,
	}
}


playerFuncs.createPlayers = function(playerList){
	players = {}
	for(p in playerList){
		players[p] = {
			id: p,
			color: playerList[p].color,
		}
	}
}