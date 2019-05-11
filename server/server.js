//express setup
var express = require('express');
var expressApp = express();

//I dont know why we have to go to localhost:3000/page.html to get the page, and not just localhost:3000
var server = expressApp.listen(3000,'0.0.0.0',function(){
    console.log("Server is running at port 3000");
});    //this should create a server at the local ip address at port 100


expressApp.use(express.static('../public'));   //the clients can only access public folder


///////////////////////////////////////////////////////////////////////////////////////
//socket.io setup
var socket = require('socket.io');          //importing the socket function
var ioServer = socket(server);              //setting up the socket server

//connection confirmation with localhost
ioServer.on('connection',function(socket){
    console.log("connected to server through sockets:" + socket.id);

    //reception of the data sent by the clients
    socket.on('text',function(data){
        console.log(data);
        ioServer.emit('text',data);         //the data is sent directly to all the clients (for now)
    });
});