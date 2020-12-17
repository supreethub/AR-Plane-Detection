const {spawn} = require('child_process');
var fs = require('fs');

var WSS = require('ws').Server;

// Start the server
var wss = new WSS({ port: 5000 },() => console.log(`Example app listening on port 5000!`));

// maintaining all active connections in this object
const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

wss.on('connection', function(socket) {
    
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + socket + '.');
    clients[userID] = socket;
    
    // Send data back to the client
    var json = JSON.stringify({ message: 'Gotcha' });
    socket.send(json);
  
    // When data is received
    socket.on('message', function(message) {

        const python = spawn('python', ['script.py',message]);
        

        python.stdout.on('data', function(data) {
            // console.log("Received from python");
            fs.readFile('./greyscale.png', 'base64', (err,data)=>{
                socket.send(data.toString(),(err) => {
                    if (err) console.error("Socket closed");
                  });
            });
        });

        python.stderr.on('data', function(data) {
            console.error(data.toString());
        });
        
       
        
    });
  
    // The connection was closed
    socket.on('close', function() {
      console.log('Closed Connection 😱');
    });
  
  });
  