const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

// Including Server Game Object Handling Js file
const world = require('./server_game_world.js');

server.listen(port, () => {
	console.log('Server is running on port', port);
});

//Setting up the public folder to store the js libraries & assets
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/ust.html');
});

//Socket Implementation
io.on('connection', (socket) => {

	var id = socket.id;
    world.addPlayer(id);
    console.log(world.players);
	console.log(id);
	
	// Starting Socket when a user entered the url
	socket.on('userstatus', (status) => {
		io.emit('userstatusreciever', status);
	});

	socket.on('username', (username) => {
		// console.log('message: ' + msg );
		io.emit('username', username);
	});

	socket.on('message', (msg) => {
		// console.log('message: ' + msg );
		io.emit('message', msg);
	});

	socket.on('disconnect', () => {
		// console.log('user disconnected');
		io.emit('message', 'user disconnected');
	});
})