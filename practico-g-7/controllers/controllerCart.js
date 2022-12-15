const classContainer = require('../store/classContainer');
const containerCart = new classContainer('./store/cart.txt');
const containerProducts = new classContainer('./store/products.txt');

const dayjs = require('dayjs');
const dateNow = dayjs().format('YYYY-MMM-D');

const {response} = require('express');

const createCart = async (req, res = response) => {
    try {
        await containerCart.save({
            timestamp: dateNow,
            products: []
        });
        const carts = await containerCart.getAll();
        res.json({cart: 'cart successfully created', id: carts[carts.length - 1].id})

    } catch (err) {
        res.json({err: err})
    }

};

const deleteCart = async (req, res = response) => {
    try {
        const {id} = req.params;
        const cart = await containerCart.deleteById(Number(id));
        cart ? res.json({status: 'ok', message: 'Cart successfully deleted'}) : res.json({error: 'cart not found'})

    } catch (err) {
        res.json({error: err});
    }
};

const addProductToCart = async (req, res = response) => {
    try {
        const {id} = req.params;
        const {id_prod} = req.params;
        const findProduct = await containerProducts.getById(Number(id_prod));
        const cartSelected = await containerCart.getById(Number(id));

        if(findProduct && cartSelected) {
            const productToAdd = {...findProduct, dateNow}
            cartSelected.products = [...cartSelected.products, productToAdd];
            await containerCart.modifyItem(Number(id), cartSelected);
            res.json({status: 'ok', productAdded: productToAdd})
        } else {
            if(!findProduct && !cartSelected) {
                res.json({error: 'invalid cart or product'})
            } else if (!findProduct) {
                res.json({error: 'invalid product'})
            } else {
                res.json({error: 'invalid cart'})
            }
        }
    } catch (err) {
        res.json({error: err});
    }

}

const productsInCart = async (req, res = response) => {
    try {
        const {id} = req.params;
        let cartSelected = await containerCart.getById(Number(id));
        if(cartSelected.products.length === 0) {
            res.json({error: "There's no product in cart"})
        } else if(cartSelected) {
            let cartToShow = {timestamp: cartSelected.timestamp, id: cartSelected.id}
            res.json({products: cartSelected.products, cart: cartToShow})
        } else {
            res.json({error: 'cart not found'})
        }



    } catch (err) {
        res.json({error: err});
    }
}

const deleteProductInCart = async (req, res = response) => {
    try {
        const {id} = req.params;
        const {id_prod} = req.params;
        const deleteItem = await containerCart.deleteItemInCart(Number(id), Number(id_prod));
        deleteItem ? res.json({status: 'ok', message: 'Product successfully deleted'}) : res.json({error: 'Product or cart not found'})

    } catch (err) {
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

db.products.find(
    {"price" : {}}
)
