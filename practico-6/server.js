//Express
const express = require('express');
const app = express();
const PORT = process.env.PORT | 8080;
//Sockets
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//Handlebars
const { engine } = require('express-handlebars')
//classContainer
const containerClass = require('./store/classContainer');
const container = new containerClass('./store/products.txt');

//Configs del sv
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

server.listen(PORT, () => {
    console.log(`listening on http://locahost:${PORT}`);
});

io.on('connection', async(socket) => {
    const allProducts = await container.getAll();
    socket.emit('allProducts', allProducts)
});

app.get('/', async(req, res) => {
    res.render('home');

});

app.post('product', (req, res) => {
    const { title, price, thumbnail } = req.body;

})

