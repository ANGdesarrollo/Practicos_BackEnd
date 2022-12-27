import { log } from '../utils/logger.js';
import { io } from '../server/server.js';

export const saveProduct = (data) => {
   try{
       io.sockets.emit('productAdded', data)
   }catch(err) {
       log.info(err)
   }
};


