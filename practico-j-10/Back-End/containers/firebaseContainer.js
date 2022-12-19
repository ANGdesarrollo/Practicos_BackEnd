import log from '../utils/logger.js';
import {getFirestore} from "firebase-admin/firestore";
import admin from "firebase-admin";

class ContainerFirebase {
    constructor(db, collection) {
        this.db = db;
        this.collection = collection;
    }


    async save(item) {
        try {
            return await this.db.collection(this.collection).add(item);
        } catch (err) {
            log.info(err);
            throw new Error('Server Error');
        }
    }

    async getAll() {
        try {
            return await this.db.collection(this.collection).get();
        } catch (err) {
            log.info(err);
            throw new Error('Server Error');
        }
    }

    async updateOne(item) {
        // try {
        //     const allItems = this.getAll();
        //     const findItem = allItems.find(el => el.id == item.id);
        //     if (findItem !== undefined) {
        //         return await this.collection.updateOne(
        //             {_id: item._id},
        //             {$set: item}
        //         )
        //     } else {
        //         return undefined
        //     }
        // } catch (err) {
        //     log.info(err);
        //     throw new Error('Server Error');
        // }
    }

    async deleteOne(item) {
        // try {
        //     const allItems = await this.getAll(this.collection);
        //     const findItem = allItems.find(el => el._id == item._id);
        //     if (findItem !== undefined) {
        //         return await this.collection.deleteOne({_id: item._id})
        //     } else {
        //         return undefined
        //     }
        // } catch (err) {
        //     log.info(err)
        //     throw new Error('Server Error');
        // }
    }
}

export default ContainerFirebase;




