import { log } from '../utils/logger.js';

export class MongoContainer {
    constructor(collection) {
        this.collection = collection;
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



}