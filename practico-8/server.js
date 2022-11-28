//Express
const express = require('express');
const app = express();
const PORT = process.env.PORT | 8080;
//Sockets
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
//DayJS
const dayjs = require('dayjs');
const now = dayjs();
//Handlebars
const {engine} = require('express-handlebars')
// DB
const {optionsMariaDB} = require('./options/mariaDB');
const {optionsSQLite3} = require('./options/SQLite3');
const knexMariaDB = require('knex')(optionsMariaDB);
const knexSQLite3 = require('knex')(optionsSQLite3);

//classProducts
const container = require('./store/classContainer');
const containerProducts = new container(optionsMariaDB, 'products');
const containerChat = new container(optionsSQLite3, 'chat');

//Configs del sv
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    res.render('home');

});

const createTables = async () => {
    await knexMariaDB.schema.hasTable('products')
        .then((exists) => {
            !exists && createTableProducts();
            console.log(exists, ' soy exists ')
        })
        .catch((err) => console.log(err))
        .finally(() => knexMariaDB.destroy())

    await knexSQLite3.schema.hasTable('chat')
        .then((exists) => !exists && createTableChat())
        .catch((err) => console.log(err))
        .finally(() => knexMariaDB.destroy())
}

const createTableProducts = () => {
    knexMariaDB.schema.createTable('products', table => {
        table.increments('id')
        table.string('title')
        table.integer('price')
        table.string('thumbnail')
    })
        .then(() => containerProducts.save({
            "id": 1,
            "title": "Notebook Razer",
            "price": 1400,
            "thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Notebook_2_d9kvm7.webp"
        }))
        .catch(err => {
            console.log('la tabla products ya existe');
        })
        .finally(() => knexMariaDB.destroy())
}

const createTableChat = () => {
    knexSQLite3.schema.createTable('chat', table => {
        table.increments('id')
        table.string('username')
        table.string('message')
        table.string('date')
    })
        .then(() => console.log('table created'))
        .catch(err => {
            console.log('la tabla chat ya existe');
        })
        .finally(() => knexMariaDB.destroy())
}

createTables().then(() => {
    io.on('connection', async (socket) => {
        const allProducts = await containerProducts.getAll();
        socket.emit('allProducts', allProducts);
        socket.on('productAdded', saveProduct);
        socket.on('msg', sendMessages);
        socket.on('renderChat', renderChat)
    });

    const saveProduct = async (data) => {
        await containerProducts.save(data)
        containerProducts.getAll().then(ele => io.sockets.emit('allProducts', ele));
    }

    const sendMessages = async (data) => {
        const dateFormated = now.format('DD/MM/YYYY hh:mm:ss');
        const dataToSend = {...data, date: dateFormated};
        await containerChat.save(dataToSend);
        await renderChat();
    }

    const renderChat = async () => containerChat.getAll().then(ele => io.sockets.emit('allMessages', ele));
})

















