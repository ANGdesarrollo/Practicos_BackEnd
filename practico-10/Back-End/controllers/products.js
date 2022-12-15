import ProductModel from "../models/product.js";
import ProductsDaoMongoDB from "../daos/products/productDaosMongoDB.js";
import log from "../utils/logger.js";
import {response} from "express";

const containerMongo = new ProductsDaoMongoDB();

export const saveProduct = async (req, res = response) => {
    try {
        if (req.body !== undefined) {
            const newProduct = new ProductModel(req.body);
            const saveProduct = await containerMongo.save(newProduct);
            res.json({
                status: true,
                product: saveProduct,
                message: 'Product successfully added',
                productAdded: newProduct
            });
        }
    } catch (err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Product could not be added, please contact support'
        });
    }
};

export const getAllProducts = async (req, res = response) => {
    try {
        const allProducts = await containerMongo.getAll();
        if(allProducts.length > 0) {
            res.json({
                status: true,
                message: 'Products displayed correctly',
                products: allProducts
            })
        } else {
            res.json({
                status: true,
                message: "There's no products",
                products: allProducts
            })
        }
    } catch(err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Error at showing products, please contact support'
        })
    }
}

export const updateProduct = async(req, res = response) => {
    try {
        if(req.body !== undefined) {
            const product = req.body;
            const update = await containerMongo.updateOne(product);
            if(update !== undefined) {
                res.json({
                    status: true,
                    message: 'Product updated successfully',
                    productUpdated: product
                })
            } else {
                res.json({
                    status: false,
                    message: "Product doesn't exists, please check the information",
                    failedProduct: product
                })
            }
        }
    } catch(err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Failed to update the product, please contact support'
        })
    }
}

export const deleteProduct = async(req, res = response) => {
    try {
        if(req.body !== undefined) {
            const productToDelete = req.body;
            const deleteProduct = await containerMongo.deleteOne(productToDelete);
            if(deleteProduct !== undefined) {
                res.json({
                    status: true,
                    message: 'Product successfully deleted',
                    productDeleted: productToDelete
                });
            } else {
                res.json({
                    status: false,
                    message: "Product doesn't exists, please check the information",
                    failedProduct: productToDelete
                });
            }
        }
    } catch(err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Failed to delete the product, please contact support'
        });
    }
};

