const classContainer = require('../store/classContainer');
const container = new classContainer('./store/products.txt');

const dayjs = require('dayjs');
const dateNow = dayjs().format('YYYY-MMM-D');

const {response} = require('express');
const {isAdmin} = require('../server/server.js');

const getProducts = async (req, res = response) => {
    try {
        const {id} = req.params;
        if(id.length > 1) {
            const product = await container.getById(Number(id));
            res.json([product]);
        } else {
            const allProducts = await container.getAll();
            res.json(allProducts)
        }

    } catch (err) {
        res.json({error: err});
    }
};

const postProduct = async (req, res = response) => {
    try {
        if (isAdmin) {
            const {id, title, description, code, thumbnail, price, stock} = req.body;
            let product = {id, title, description, code, thumbnail, price, stock};
            product = {...product, timestamp: dateNow};
            await container.save(product);
            res.json(product);
        } else {
            res.json({error: -1, description: 'Route /api/products and method POST not authorized'});
        }
    } catch (err) {
        res.json({error: err});
    }
};

const updateProduct = async (req, res) => {
    try {
        if (isAdmin) {
            const {id} = req.params;
            const {body} = req;
            const modifyProduct = await container.modifyItem(id, body);
            res.json(modifyProduct);
        } else {
            res.json({error: -1, description: 'Route /api/products/:id and method PUT not authorized'});
        }
    } catch (err) {
        res.json({error: err});
    }
};

const deleteProduct = async (req, res) => {
    try {
        if (isAdmin) {
            const {id} = req.params;
            await container.deleteById(Number(id));
            res.json({status: "ok"});
        } else {
            res.json({error: -1, description: 'Route /api/products/:id and method DELETE not authorized'});
        }
    } catch (err) {
        res.json({error: err});
    }
};

module.exports = {
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct
};