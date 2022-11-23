const classContainer = require('../store/classContainer');
const container = new classContainer('./store/cart.txt');

const dayjs = require('dayjs');
const dateNow = dayjs().format('YYYY-MMM-D');

const { response } = require('express');

const createCart = async (req, res = response) => {
    try {
        await container.save({
            timestamp: dateNow,
            products: []
        });
        const carts = await container.getAll();
        res.json(carts[carts.length - 1].id)

    } catch(err) {
        res.json({err: err})
    }

};

const deleteCart = async (req, res = response) => {
    try {
        const { id } = req.params;
        await container.deleteById(Number(id));
        res.json({res: 'ok'});
    } catch(err) {
        res.json({error: err});
    }
};

const addProductToCart = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const cartSelected = await container.getById(Number(id));
        cartSelected.products = [...cartSelected.products, body];
        await container.modifyItem(id, cartSelected);
        res.json({status: 'ok'})
    } catch(err) {
        res.json({error: err});
    }

}

const productsInCart = async (req, res = response) => {
    try {
        const { id } = req.params;
        const cartSelected = await container.getById(Number(id));
        res.json(cartSelected.products);
    } catch(err) {
        res.json({error: err});
    }

}

const deleteProductInCart = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { id_prod } = req.params;
        await container.deleteItemInCart(Number(id), Number(id_prod));
        res.json({status: 'ok'})
    } catch(err) {
        res.json({error: err});
    }
};


module.exports = {
    createCart,
    deleteCart,
    productsInCart,
    addProductToCart,
    deleteProductInCart
};