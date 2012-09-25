
network = {
	init: function(){
			
		var port = 8081;
		//var serverAddress = 'http://gakkle.com:'+port;  //Remote Server
		var serverAddress = 'http://192.168.1.4:'+port      //Local Test server
		var server = io.connect(serverAddress);
	
	
		console.log(sha256_digest(
			navigator.appCodeName+
			navigator.appName+
			navigator.appVersion+
			navigator.cookieEnabled+
			navigator.javaEnabled+
			navigator.platform
		))
		
		server.on('map', function (data) {
			//map[data.chunkID] = data.chunk
			//console.log(data)
		})
		
		
		
	}
}
 