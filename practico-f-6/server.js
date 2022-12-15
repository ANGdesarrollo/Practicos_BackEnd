//Express
const express = require('express');
const app = express();
const PORT = process.env.PORT | 8080;
//Sockets
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//DayJS
const dayjs = require('dayjs');
const now = dayjs();
//Handlebars
const { engine } = require('express-handlebars')
//classContainer
const containerClass = require('./store/classContainer');
const containerProducts = new containerClass('./store/products.txt');
const containerChat = new containerClass('./store/chat.txt');

//Configs del sv
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

io.on('connection', async(socket) => {
    console.log('connected')
    const allProducts = await containerProducts.getAll();
    socket.emit('allProducts', allProducts);
    socket.on('productAdded', saveProduct);
    socket.on('msg', sendMessages);
    socket.on('renderChat', renderChat)
});


app.get('/', async(req, res) => {
    res.render('home');

});

const saveProduct = async(data) => {
    await containerProducts.save(data);
    containerProducts.getAll().then(ele => io.sockets.emit('allProducts', ele));
}

const sendMessages = async(data) => {
    const dateFormated = now.format('DD/MM/YYYY hh:mm:ss');
    const dataToSend = {...data, date: dateFormated};
    await containerChat.save(dataToSend);
    await renderChat();
}

const renderChat = async() => containerChat.getAll().then(ele => io.sockets.emit('allMessages', ele));











