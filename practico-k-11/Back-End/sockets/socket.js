import { saveProduct } from "../controllers/socketProducts.js";
import {getAllChats, sendMessages} from "../controllers/socketChats.js";

export const sockets = (io) => {
    io.on('connection', async(socket) => {
        socket.on('productAdded', saveProduct);
        socket.on('dataMessage', await sendMessages);
        socket.emit('allChats', await getAllChats());
    })
}




