const express = require('express');
const app = express();
const port = process.env.PORT | 8080;
const {Router} = express;
const routerProducts = Router();
const multer = require('multer');
const Container = require('./classContainer');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const container = new Container('products.txt');

app.use('/api/products', routerProducts);

// GET '/api/productos' -> devuelve todos los productos.
routerProducts.get('', async (req, res) => {
    let products = await container.getAll();
    res.json(products)
})

//PUBLIC FORM
routerProducts.get('/form', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

routerProducts.post('/form/uploadProduct', (req,res, next) => {
    const { body } = req;
    container.save(body)
    res.json(`Your product has been added successfully`)
})

// GET '/api/productos/:id' -> devuelve un producto según su id.
routerProducts.get('/:id',async (req, res) => {
    let products = await container.getAll();
    let {id} = req.params;
    id = Number(id);
    if (id <= products.length && id !== 0) {
        const findById = products.find(el => el.id === id);
        res.json(findById)
    } else {
        res.json({error: 'product not found'})
    }
})

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
routerProducts.post('', async(req, res) => {
    const { body } = req
    await container.save(body)
    res.json(body);
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
routerProducts.put('/:id', async(req, res) => {
    let products = await container.getAll();
    const {id} = req.params;
    if (id <= products.length && id !== 0) {
        const {body} = req;
        await container.modifyItem(id, body);
        products = await container.getAll();
        res.json(products)
    } else {
        res.json({error: 'product not found'})
    }
})

//DELETE '/api/productos/:id' -> elimina un producto según su id.
routerProducts.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await container.deleteById(id)
    let products = await container.getAll()
    res.json(products);
})
