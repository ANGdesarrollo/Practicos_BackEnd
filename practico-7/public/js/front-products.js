const socket = io();
const API = 'http://localhost:8080';

let allProducts = [];

//Functions
const getAllProducts = (data) => {
    allProducts = data;
}

//Sockets
socket.on('allProducts', getAllProducts);
