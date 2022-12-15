const socket = io();
const API = 'http://localhost:8080';


// Dom Calls
const productsToShowContainer = document.getElementById('js-allProducts');
const productAddedForm = document.getElementById('js-form');
const sendMessageForm = document.getElementById('js-form-chat');
const showMessages = document.getElementById('js-chatRoom');

//Functions
const renderProductList = (data) => {
    fetch(`${API}/showProducts.handlebars`)
        .then(res => res.text())
        .then(res => {
            const template = Handlebars.compile(res)
            productsToShowContainer.innerHTML = template({products: data})
        })
}

const addProductForm = (e) => {
    e.preventDefault()
    const { title, price, thumbnail } = e.target
    const productToSend = {
        title: title.value,
        price: price.value,
        thumbnail: thumbnail.value
    }
    socket.emit('productAdded', productToSend)
}

const renderMessagesChat = (data) => {
    fetch(`${API}/showChat.handlebars`)
        .then(res => res.text())
        .then(res => {
            const template = Handlebars.compile(res);
            showMessages.innerHTML = template({chat: data})

        })
}

const validEmail = (data) => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validEmail.test(data)) {
        return true;
    } else {
        alert('Please enter a valid Email');
        return false;
    }
}

const sendMessage = (e) => {
    if (e !== undefined) {
        e.preventDefault();
        const {username, message} = e.target;
        const messageToSend = {username: username.value, message: message.value}
        validEmail(username.value) && socket.emit('msg', messageToSend)

    } else {
        socket.emit('renderChat', 'Un usuario se ha conectado')
    }
}




// Add Event Listeners
productAddedForm.addEventListener('submit', addProductForm);
sendMessageForm.addEventListener('submit', sendMessage);


// Sockets
socket.on('allProducts', renderProductList);
socket.on('allMessages', renderMessagesChat);
sendMessage()



