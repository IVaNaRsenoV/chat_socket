require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { CLIENT_RENEG_LIMIT } = require('tls');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: '*'
});

const rooms = [];
const removeMsg = [];

io.on('connection', socket => {
    socket.on('message', data => {
        const { room, message, actionName, position } = data;

        rooms.push({ room, message });

        if (actionName === 'ADD') {
            const arr = rooms.filter((el) => el.message != undefined);
            io.sockets.emit('room', room);
            io.sockets.emit('message', arr);
        }

        if (actionName === 'DELETE') {
            rooms.splice(position, 1);
            removeMsg.push(position);
            // const arr = rooms.filter((el) => el.message != undefined);
            // console.log(position);
            // console.log(arr);
            // io.sockets.emit('message', arr);

            const arr = [...new Set(removeMsg.sort((a, b) => a - b))]; // Создаём массив удалённых сообщений
            console.log(arr)

            io.sockets.emit('filter', { rooms, arr });
        }

        socket.emit('style', 'myselfStyle')
    })

    socket.on('chooseRoom', data => {
        const messagesRoom = rooms.filter(el => el.room === data);
        socket.emit('chooseRoom', messagesRoom);
    })
})

server.listen(PORT, () => {
    console.log(`SERVER WORKED ${PORT}`);
})