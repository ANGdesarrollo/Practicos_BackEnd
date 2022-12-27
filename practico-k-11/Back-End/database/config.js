import mongoose, { connect } from 'mongoose';
import { log } from '../utils/logger.js';

mongoose.set('strictQuery', false);

const dbConnectionMongo = async() => {
    try {
        await connect(process.env.DB_CNN_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        log.info('Mongo DB online')
    } catch(err) {
        log.info(err)
        throw new Error('Error to initialize MongoDB');
    }
}

export default dbConnectionMongo;