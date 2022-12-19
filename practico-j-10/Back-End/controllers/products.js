import ProductModel from "../models/product.js";
import log from "../utils/logger.js";
import {response} from "express";
import Instance from "../environment/instances.js";
import dayjs from 'dayjs';

const dateNow = dayjs().format('YYYY/MM/DD');
const Container = new Instance.classProduct();

export const saveProduct = async (req, res = response) => {
    try {
        if (req.body !== undefined) {
            const productToAdd = {...req.body, timestamp: dateNow}
            let newProduct = new ProductModel(productToAdd);

            await Container.save(newProduct);
            res.json({
                status: true,
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
        const allProducts = await Container.getAll();

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

export const getById = async (req, res = response) => {
    try {
        const { id } = req.params;
        const getProductById = await Container.getById(id);
        if(getProductById ) {
            res.json({
                status: true,
                message: 'Product found',
                product: getProductById
            })
        } else {
            res.json({
                status: true,
                message: "Product doesn't exists, please check the ID"
            })
        }

    }catch(err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Failed to find the product, please contact support'
        })
    }
}

export const updateProduct = async(req, res = response) => {
    try {
        if(req.body !== undefined) {
            const { id } = req.params;
            const product = req.body;
            const update = await Container.updateOne( id, product );
            if(update !== undefined) {
                res.json({
                    status: true,
                    message: 'Product updated successfully',
                    productUpdated: update
                })
            } else {
                res.json({
                    status: true,
                    message: "Product doesn't exists, please check the information"
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
            const { id } = req.params;
            const deleteProduct = await Container.deleteById(id);
            console.log(deleteProduct)
            if(deleteProduct) {
                res.json({
                    status: true,
                    message: 'Product successfully deleted',
                    productDeleted: deleteProduct
                });
            } else {
                res.json({
                    status: true,
                    message: "Product doesn't exists, please check the information",
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

export const deleteAll = async(req, res = response) => {
    try {
        await Container.deleteAll();
        res.json({
            status: true,
            message: 'All products successfully deleted'
        })
    }catch(err) {
        log.info(err);
        res.json({
            status: false,
            message: 'Failed to delete all Products, please contact support'
        });
    }
}


