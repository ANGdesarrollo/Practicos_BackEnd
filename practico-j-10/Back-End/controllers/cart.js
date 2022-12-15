import CartModel from "../models/cart.js";
import CartDaoMongoDB from "../daos/carts/cartDaosMongoDB.js";
import log from "../utils/logger.js";
import {response} from "express";

const containerMongo = new CartDaoMongoDB();

export const saveCart = async (req, res = response) => {
    try {
        if (req.body !== undefined) {
            const newCart = new CartModel(req.body);
            const saveCart = await containerMongo.save(newCart);
            res.json({
                status: true,
                cart: saveCart,
                message: 'Cart successfully created',
                cartAdded: newCart
            });
        }
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
        const allCarts = await containerMongo.getAll();
        if (allCarts.length > 0) {
            res.json({
                status: true,
                message: 'Carts displayed correctly',
                carts: allCarts
            });
        } else {
            res.json({
                status: true,
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

export const updateCart = async(req, res = response) => {
    try {
        if(req.body !== undefined) {
            const cart = req.body;
            const update = await containerMongo.updateOne(cart);
            if(update !== undefined) {
                res.json({
                    status: true,
                    message: 'Cart updated successfully',
                    cartUpdated: cart
                })
            } else {
                res.json({
                    status: false,
                    message: "Cart doesn't exists, please check the information",
                    failedCart: cart
                })
            }
        }
    } catch(err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Failed to update the cart, please contact support'
        })
    }
};

export const deleteCart = async(req, res = response) => {
    try {
        if(req.body !== undefined) {
            const cartToDelete = req.body;
            const deleteCart = await containerMongo.deleteOne(cartToDelete);
            if(deleteCart !== undefined) {
                res.json({
                    status: true,
                    message: 'Cart successfully deleted',
                    cartDeleted: cartToDelete
                });
            } else {
                res.json({
                    status: false,
                    message: "Cart doesn't exists, please check the information",
                    failedCart: cartToDelete
                });
            }
        }
    } catch(err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Failed to delete the cart, please contact support'
        });
    }
};
