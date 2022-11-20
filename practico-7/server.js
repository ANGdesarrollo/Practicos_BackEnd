const express = require('express');
const { engine } = require("express-handlebars");
const app = express();
const PORT = process.env.PORT | 8080;

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/api/home', require('/routes/home'));
app.use('/api/products', require('./routes/products'));

