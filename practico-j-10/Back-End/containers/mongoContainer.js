import log from '../utils/logger.js';

class ContainerMongo {
    constructor(collection) {
        this.collection = collection
    }

    async save(item) {
        try {
            return await item.save()
        } catch (err) {
            log.info(err);
            throw new Error('Server Error');
        }
    }

    async getAll() {
        try {
            return await this.collection.find();
        } catch (err) {
            log.info(err);
            throw new Error('Server Error');
        }
    }

    async updateOne(item) {
        try {
            const allItems = await this.getAll(this.collection);
            const findItem = allItems.find(el => el._id == item._id);
            if (findItem !== undefined) {
                return await this.collection.updateOne(
                    {_id: item._id},
                    {$set: item}
                )
            } else {
                return undefined
            }
        } catch (err) {
            log.info(err);
            throw new Error('Server Error');
        }
    }

    async deleteOne(item) {
        try {
            const allItems = await this.getAll(this.collection);
            const findItem = allItems.find(el => el._id == item._id);
            if (findItem !== undefined) {
                return await this.collection.deleteOne({_id: item._id})
            } else {
                return undefined
            }
        } catch (err) {
            log.info(err)
            throw new Error('Server Error');
        }
    }
}

export default ContainerMongo;




