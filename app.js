const express = require('express'); // just like an include or require with PHP
const app = express(); // create an instance of our application via simpleExpress
const io = require('socket.io')(); // get socket.io

app.use(express.static('public'));

//set up routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));

const server = app.listen(3000, () => {
  console.log('listening on port 3000!');
});

io.attach(server);
io.on('connection', () =>{
  console.log('connected user');
});
