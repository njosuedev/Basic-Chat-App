// import packages

import express from "express";
import http from "http";
import {Server} from "socket.io";

// creating instance 

const app = express();
const server =http.createServer(app);
const io = new Server(server);

// server static file
app.use(express.static("public"));

// create connection

io.on("connection", (socket) => {
    console.log("user connected sucessfully");

    // get data from client

    socket.on("chat message",msg => {
        io.emit("chat message",msg)
    })

    socket.on("disconnect",() => {
        console.log("user disconnected successfully");
    })
})

// start the server

server.listen(3000,() => console.log("server is listening to : 3000"));



