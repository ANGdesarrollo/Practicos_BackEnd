const classContainer = require('../store/classContainer');
const container = new classContainer('./store/cart.txt');

const dayjs = require('dayjs');
const dateNow = dayjs().format('YYYY-MMM-D');

const { response } = require('express');

const createCart = async (req, res = response) => {
    await container.save({
        timestamp: dateNow,
        products: []
    });

    const carts = await container.getAll();

    res.json(carts[carts.length - 1].id)
};

const deleteCart = async (req, res) => {
    const { id } = req.params;
    await container.deleteById(Number(id));
    res.json({res: 'ok'});
};

const addProductToCart = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const cartSelected = await container.getById(Number(id));
    cartSelected.products = [...cartSelected.products, body];
    await container.modifyItem(id, cartSelected);
    res.json({status: 'ok'})
}

const productsInCart = async (req, res) => {
    const { id } = req.params;
    const cartSelected = await container.getById(Number(id));
    res.json(cartSelected.products);
}

const deleteProductInCart = async (req, res) => {
    const { id } = req.params;
    const { id_prod } = req.params;
    await container.deleteItemInCart(Number(id), Number(id_prod));
    res.json({status: 'ok'})
}


module.exports = {
    createCart,
    deleteCart,
    productsInCart,
    addProductToCart,
    deleteProductInCart
};