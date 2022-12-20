import log from "../utils/logger.js";
import Instance from "../environment/instances.js";

export default class ContainerMemory {
    constructor(array) {
        this.array = array;
    }

    async save(item) {
        try {
            await this.array.push(item);
            return item;
        } catch (err) {
            log.info(err);
            throw new Error('Memory Error');
        }
    };

    async getAll() {
        try {
            return this.array;
        } catch (err) {
            log.info(err);
            throw new Error('Memory Error');
        }
    };

    async getById(id) {
        try {
            const allItems = this.array;
            const findItem = allItems.find(el => el._id == id);
            if (findItem !== undefined) {
                return findItem;
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('Memory Error');
        }
    };

    async updateOne(id, body) {
        try {
            const allItems = this.array;
            const findById = allItems.findIndex(el => el._id == id);
            if (findById !== -1) {
                if (allItems[findById]._doc) {
                    allItems[findById] = {...allItems[findById]._doc, ...body};
                    return allItems[findById];
                } else {
                    allItems[findById] = {...allItems[findById], ...body};
                    return allItems[findById];
                }
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('Memory Error');
        }
    };

    async deleteById(id) {
        try {
            const getItem = await this.getById(id);
            if (getItem) {
                this.array = this.array.filter(el => el._id != id);
                return getItem;
            } else {
                return undefined;
            }
        } catch (err) {
            log.info(err);
            throw new Error('Memory Error');
        }
    };

    async addItemToCart(id_cart, id_prod) {
        try {
            const Container = new Instance.classProduct();
            const allProducts = await Container.getAll();
            const findProduct = allProducts.find(el => el._id == id_prod);
            if (findProduct) {
                let cart = await this.getById(id_cart);
                if(cart) {
                    cart.products = [...cart.products, findProduct];
                    await this.updateOne(id_cart, cart);
                    return cart;
                } else {
                    return undefined;
                }
            } else {
                return undefined
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
                await this.updateOne(idCart, cart)
                return cart;
            } else {
                return undefined;
            }

        } catch (err) {
            log.info(err);
            throw new Error('Memory DB Error');
        }
    };
};