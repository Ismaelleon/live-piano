const express = require("express");
const path = require("node:path");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

// app settings
app.use(express.static(path.join(__dirname, "public")));

// socket server
io.on("connection", socket => {
    socket.on("keyPressed", key => {
        io.emit("keyPressed", key);
    })

    socket.on("keyReleased", key => {
        io.emit("keyReleased", key);
    })
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
