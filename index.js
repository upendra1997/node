'use strict';
const fs = require('fs');

const app = require('http').createServer(function(req, res){
    // fs.readFile('./index.html', function(err, data){
    //     res.end(data);
    // });
});

const io = require('socket.io')(app);

io.on('connection', function(socket){
    console.log("Client Connected with id "+socket.id);
    socket.on("data", function(client_message){
        // console.log("client "+socket.id+" sent "+client_message);
        const data = fs.readFileSync('./data', {encoding: 'ascii'});
        // console.log(data);
        socket.broadcast.emit
        socket.emit('data', data);
    });
    socket.emit("data","Data Stream Started");
});


app.listen(80, function(){
    console.log("listening");
});
