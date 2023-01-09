import { log } from '../utils/logger.js';
import { io } from '../server/server.js';
import { ProductDaosDB } from '../daos/productsDaos/fileSystemProductDaos.js';
import dayjs from "dayjs";

const Container = new ProductDaosDB;
const dateNow = dayjs().format('YYYY/MM/DD hh:mm:ss')

export const saveProduct = async(data) => {
   try{
       if(data.product && data.price && data.thumbnail) {
           const product = {...data, timestamp: dateNow};
           await Container.save(product);
           io.sockets.emit('productAdded', data)
       }
   }catch(err) {
       log.info(err)
   }
};

export const getAllProducts = async(data) => {
    try{
        return await Container.getAll();
    }catch(err) {
        log.info(err)
    }
}


