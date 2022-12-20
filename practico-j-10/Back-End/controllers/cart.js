import CartModel from "../models/cart.js";
import log from "../utils/logger.js";
import {response} from "express";
import dayjs from 'dayjs';
import Instance from "../environment/instances.js";
import {config} from "dotenv";

config({ path:'./environment/.env' });

const dateNow = dayjs().format('YYYY/MM/DD');
const Container = new Instance.classCart();

export const saveCart = async (req, res = response) => {
    try {
        const cartToAdd = { timestamp: dateNow, products: [] };
        const newCart = new CartModel(cartToAdd);
        // Condicional para no utilizar el modelo de Mongoose con Firebase porque provoca un error.
        const saveCart = process.env.INSTANCE === 'Firebase' ? await Container.save(cartToAdd) : await Container.save(newCart)
        res.json({
            status: true,
            message: 'Cart successfully created',
            cartAdded: saveCart
        });

    } catch (err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Cart could not be added, please contact support'
        });
    }
};

export const getAllCarts = async (req, res = response) => {
    try {
        const allCarts = await Container.getAll();
        if (allCarts.length > 0) {
            res.json({
                status: true,
                message: 'Carts displayed correctly',
                carts: allCarts
            });
        } else {
            res.json({
                status: false,
                message: "There's no carts created",
                carts: allCarts
            });
        }

    } catch (err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Carts not found, please contact support'
        })
    }
};

export const getCartByID = async (req, res = response) => {
    try {
        const {id} = req.params;
        const cartToFind = await Container.getById(id);
        if (cartToFind) {
            res.json({
                status: true,
                message: 'Cart found',
                product: cartToFind
            })
        } else {
            res.json({
                status: false,
                message: "Cart doesn't exists, please check the ID"
            })
        }

    } catch (err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Failed to find the product, please contact support'
        })
    }
}

export const updateCart = async (req, res = response) => {
    try {
        if (req.body !== undefined) {
            const {id} = req.params;
            const cart = req.body;
            const update = await Container.updateOne(id, cart);
            if (update !== undefined) {
                res.json({
                    status: true,
                    message: 'Cart updated successfully',
                    productUpdated: update
                })
            } else {
                res.json({
                    status: false,
                    message: "Cart doesn't exists, please check the information"
                })
            }
        }
    } catch (err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Failed to update the product, please contact support'
        })
    }
};

export const deleteCart = async (req, res = response) => {
    try {
        if (req.body !== undefined) {
            const {id} = req.params;
            const deleteCart = await Container.deleteById(id);

            if (deleteCart !== undefined) {
                res.json({
                    status: true,
                    message: 'Cart successfully deleted',
                    cartDeleted: deleteCart
                });
            } else {
                res.json({
                    status: false,
                    message: "Cart doesn't exists, please check the information",
                });
            }
        }
    } catch (err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Failed to delete the cart, please contact support'
        });
    }
};

export const addProductToCart = async(req, res = response) => {
    try {
        const { id } = req.params;
        const { id_prod } = req.params;
        const productToAdd = await Container.addItemToCart(id, id_prod);
        if(productToAdd) {
            res.json({
                status: true,
                message: 'Product successfully added to cart',
                productAdded: productToAdd
            })
        } else {
            res.json({
                status: false,
                message: 'Product or Cart not found, please check the information'
            })
        }
    }catch(err) {

    }
}

export const deleteProductInCart = async (req, res = response) => {
    try {
        const {id} = req.params;
        const {id_prod} = req.params;
        const deleteProduct = await Container.deleteItemInCart(id, id_prod);
        if (deleteProduct) {
            res.json({
                status: true,
                message: 'Product successfully deleted',
                updatedCart: deleteProduct
            })

        } else {
            res.json({
                status: false,
                message: "Cart or Product doesn't exists, please check the information"
            });
        }
    } catch (err) {

    }
};
