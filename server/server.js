const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);

app.use(router);

// const io = socketio(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");

  // from client
  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("user left.");
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
