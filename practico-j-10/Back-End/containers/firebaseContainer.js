import log from '../utils/logger.js';

import dbConnectionFirebase from "../database/firebase/config.js";
import Instance from "../environment/instances.js";

const db = await dbConnectionFirebase();

class ContainerFirebase {
    constructor(collection) {
        this.db = db;
        this.collection = collection;
    }

    async save(item) {
        try {
            await this.db.collection(this.collection).add(item);
            return item
        } catch (err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    }

    async getAll() {
        try {
            const allProducts = [];
            const snapshot = await this.db.collection(this.collection).get();
            snapshot.forEach((doc) => {
                const document = {...doc.data(), id: doc.id}
                allProducts.push(document)
            })
            return allProducts;
        } catch (err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    };

    async getById(id) {
        try {
            const allItems = await this.getAll();
            const findItem = allItems.find(el => el.id === id);
            if (findItem !== undefined) {
                return findItem
            } else {
                return undefined
            }
        } catch (err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    }

    async updateOne(id, body) {
        try {
            const allItems = await this.getAll();
            const findItem = allItems.find(el => el.id === id);
            if (findItem !== undefined) {
                const updatedItem = {...findItem, ...body}
                await this.db.collection(this.collection).doc(id).set(updatedItem)
                return updatedItem
            } else {
                return undefined
            }
        } catch (err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    };

    async deleteById(id) {
        try {
            const allItems = await this.getAll();
            const findItem = allItems.find(el => el.id === id);
            if (findItem !== undefined) {
                await db.collection(this.collection).doc(id).delete();
                return findItem;
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    };

    async addItemToCart(id_cart, id_prod){
        try {
            const Container = new Instance.classProduct();
            console.log('pase a allProducts')
            const allProducts = await Container.getAll();
            console.log('pase a findProduct')
            const findProduct = allProducts.find(el => el.id === id_prod);
            console.log(findProduct)
            if(findProduct) {
                let cart = await this.getById(id_cart);
                cart.products = [...cart.products, findProduct];
                await this.updateOne(id_cart, cart);
                return cart
            } else {
                return undefined
            }
        }catch(err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    }

    async deleteItemInCart(idCart, idItem) {
        try {
            let cart = await this.getById(idCart);
            const exists = cart.products.find(el => el._id === idItem);
            if(exists) {
                cart.products = cart.products.filter(el => el.id !== idItem);
                await this.updateOne(idCart, cart)
                return cart;
            } else {
                return undefined
            }

        } catch(err) {
            log.info(err)
            throw new Error('Firebase DB Error');
        }
    }
}

export default ContainerFirebase;




