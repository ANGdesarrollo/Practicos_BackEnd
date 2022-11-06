const express = require('express');

const app = express();
const PORT = process.env.PORT | 8080;
const containerClass = require('./store/classContainer');
const container = new containerClass('./store/products.txt');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('form.pug')
})

app.get('/products', async(req,res) => {
    const products = await container.getAll();
    console.log(products)
    res.render('listProducts', { products })
})

app.post('/product', async(req,res) => {
    const { title, price, thumbnail } = req.body;
    await container.save({title: title, price: price, thumbnail: thumbnail});
    res.redirect('/products');
})



