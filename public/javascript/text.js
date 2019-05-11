window.addEventListener('load',function(){
var socket = io.connect('http://10.21.6.32:3000');
var submitButton = document.getElementById('textSubmit');
var textBox = document.getElementById('message');
var displayBox = document.getElementById('display');

submitButton.addEventListener('click',function(){
    socket.emit('text',textBox.value);
    textBox.value="";
});

socket.on('text',function(data){
    console.log("got "+ data);
    displayBox.value += "\n"+data;
});

});