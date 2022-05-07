const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);

app.use(router);

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");

  socket.on("disconnect", () => {
    console.log("user left.");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
