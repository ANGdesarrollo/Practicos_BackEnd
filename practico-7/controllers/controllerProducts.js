const classContainer = require('../store/classContainer');
const container = new classContainer('./store/products.txt');

const dayjs = require('dayjs');
const dateNow = dayjs().format('YYYY-MMM-D');

const {response} = require('express');

const allProducts = async (req, res = response) => {
    const getProducts = await container.getAll();
    res.json(getProducts);
}

const getProduct = async (req, res = response) => {
    try {
        const {id} = req.params;
        const product = await container.getById(Number(id));
        if (product !== undefined) {
            res.json([product]);
        } else {
            res.json({error: 'Product not found'})
        }
    } catch (err) {
        res.json({error: err});
    }
};

const postProduct = async (req, res = response) => {
    try {
        const {id, title, description, code, thumbnail, price, stock} = req.body;
        let product = {id, title, description, code, thumbnail, price, stock};
        product = {...product, timestamp: dateNow};
        await container.save(product);
        res.json(product);
    } catch (err) {
        res.json({error: err});
    }
};

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const { body } = req;
        const modifyProduct = await container.modifyItem(id, body);
        modifyProduct !== undefined ? res.json(modifyProduct) : res.json({error: 'Product not found'})

    } catch (err) {
        res.json({error: err});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await container.deleteById(Number(id));
        deleteItem !== undefined ? res.json({status: "ok"}) : res.json({error: 'Product not found'})
    } catch (err) {
        res.json({error: err});
    }
};

module.exports = {
    allProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct,
};
