var express = require('express');
var Websocket = require('ws');
var app = express();

var wss = new Websocket.Server({
    port:8080
})

wss.on('connection', function(client){
    console.log('Client Connected');

    client.on('message', function(data){
        console.log('Client said ' + data);

        client.send(data);
    })
})

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Server is running!');
})