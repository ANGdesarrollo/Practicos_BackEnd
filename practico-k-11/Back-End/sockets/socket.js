import { saveProduct } from "../controllers/socketProducts.js";

export const sockets = (io) => {
    io.on('connection', (socket) => {
        socket.on('productAdded', saveProduct);
        socket.on('dataMessage', (data) => {
            console.log(data)
        })
    })
}




