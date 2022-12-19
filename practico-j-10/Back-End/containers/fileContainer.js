import fs from "fs";
import log from "../utils/logger.js";
import logger from "../utils/logger.js";

export default class containerFileSystem {
    constructor(file) {
        this.file = file;
    }

    async save(item) {
        try {
            if (fs.existsSync(this.file)) {
                const allItems = await this.getAll();
                allItems.push(item);
                await fs.promises.writeFile(this.file, JSON.stringify(allItems, null, 2));
            } else {
                await fs.promises.writeFile(this.file, JSON.stringify([item], null, 2));
            }
        } catch(err) {
            logger.info(err)
            throw new Error('FileSystem DB Error');
        }
    };

    async getAll() {
        try {
            const content = await fs.promises.readFile(this.file, "utf-8");
            if (content.length > 0) {
                return JSON.parse(content);
            } else {
                return [];
            }
        } catch(err) {
            logger.info(err);
            throw new Error('FileSystem DB Error');
        }
    };

    async getById(id) {
        try {
            const data = await this.getAll();
            const findById = data.find(el => el._id === id);
            if (findById === undefined) {
                return undefined;
            }
            return findById;
        } catch(err) {
            logger.info(err);
            throw new Error('FileSystem DB Error');
        }
    };

    async updateOne(id, body) {
        try {
            let item = await this.getAll();
            const findById = item.findIndex(el => el._id === id);
            if(findById !== -1) {
                item[findById] = {...item[findById], ...body};
                await fs.promises.writeFile(this.file, JSON.stringify(item, null, 2));
                return item[findById];
            } else {
                return undefined;
            }

        } catch(err) {
            logger.info(err);
            throw new Error('FileSystem DB Error');
        }
    };

    async deleteItemInCart(idCart, idItem) {
        try {
            let cart = await this.getById(idCart);
            const exists = cart.products.find(el => el._id === idItem);
            if(exists) {
                cart.products = cart.products.filter(el => el._id !== idItem);
                await this.updateOne(idCart, cart)
                return cart;
            } else {
                return undefined
            }

        } catch(err) {
            logger.info(err)
            throw new Error('FileSystem DB Error');

        }
    }

    async deleteById(id) {
        try {
            const item = await this.getAll();
            const getItem = await this.getById(id);
            if(getItem !== undefined) {
                const productToDelete = item.find(el => el._id === id);
                const deleteById = item.filter(el => el._id !== id);
                await fs.promises.writeFile(this.file, JSON.stringify(deleteById, null, 2));
                return productToDelete;
            } else {
                return undefined;
            }
        } catch(err) {
            logger.info(err);
            throw new Error('FileSystem DB Error');
        }
    }
}