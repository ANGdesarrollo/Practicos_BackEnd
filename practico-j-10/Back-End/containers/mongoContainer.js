import log from '../utils/logger.js';
import Instance from "../environment/instances.js";

class ContainerMongo {
    constructor(collection) {
        this.collection = collection
    }

    async save(item) {
        try {
            await item.save();
            return item;
        } catch (err) {
            log.info(err);
            throw new Error('MongoSv Error');
        }
    };

    async getAll() {
        try {
            return await this.collection.find();
        } catch (err) {
            log.info(err);
            throw new Error('MongoSv Error');
        }
    };

    async getById(id) {
        try {
            const allItems = await this.getAll(this.collection);
            const findItem = allItems.find(el => el._id == id);
            if (findItem !== undefined) {
                return findItem;
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('MongoSv Error');
        }
    }

    async updateOne(id, body) {
        try {
            const allItems = await this.getAll(this.collection);
            const findItem = allItems.find(el => el._id == id);
            if (findItem !== undefined) {
                await this.collection.updateOne(
                    {_id: id},
                    {$set: body}
                );
                return {...findItem._doc, ...body};

            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('MongoSv Error');
        }
    }

    async deleteById(id) {
        try {
            const getItem = await this.getById(id);
            if (getItem !== undefined) {
                await this.collection.deleteOne({_id: id});
                return getItem;
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('MongoSv Error');
        }
    }

    async addItemToCart(id_cart, id_prod) {
        try {
            const Container = new Instance.classProduct();
            const allProducts = await Container.getAll();
            const findProduct = allProducts.find(el => el._id == id_prod);
            if (findProduct) {
                let cart = await this.getById(id_cart);
                if (cart) {
                    cart.products = [...cart.products, findProduct];
                    await this.updateOne(id_cart, cart);
                    return cart;
                }
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('Firebase DB Error');
        }
    };

    async deleteItemInCart(idCart, idItem) {
        try {
            let cart = await this.getById(idCart);
            const exists = cart.products.find(el => el._id === idItem);
            if (exists) {
                cart.products = cart.products.filter(el => el._id !== idItem);
                await this.updateOne(idCart, cart);
                return cart;
            } else {
                return undefined
            }

        } catch (err) {
            log.info(err);
            throw new Error('FileSystem DB Error');
        }
    };
}

export default ContainerMongo;




