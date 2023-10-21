// const express = require("express");
// const { createServer } = require("http");
// const {Server} = require("socket.io");
// const cors = require('cors');


// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {/* options */});

// io.on("connection", (socket) =>{
//     console.log("server connected");
// });

// httpServer.listen(5000);

// const express = require("express");
// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const cors = require('cors');

// const app = express();
// app.use(cors({origin: 'http://localhost:3000'}));
// const httpServer = createServer(app);
// const io = new Server(httpServer, { cors: 'http://localhost:3000' });

// io.on("connection", (socket) => {
//     console.log("server connected");
// });

// httpServer.listen(5000);


const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, this is the server!");
});

io.on("connection", (socket) => {
    console.log("server connected");
});

httpServer.listen(5000, () => {
  console.log("Server is listening on port 5000");
});


