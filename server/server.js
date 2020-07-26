var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('onEditorValueChange', (data) => {
    io.emit(`onEditorValueUpdate-${data.sharedEditorId}`, data)
  });
});


http.listen(8000, () => {
  console.log('listening on port 8000');
});