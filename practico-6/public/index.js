const socket = io();

socket.on("connect", () => {
    socket.on("allProducts", async(data) => {
        const allProductsContainer = document.getElementById("js-allProducts")
        data.map(el => {
            const productContainer = document.createElement('tr');
            const idProduct = document.createElement('th');
            const titleProduct = document.createElement('th');
            const priceProduct = document.createElement('th');
            const thumbnailProduct = document.createElement('th');

            allProductsContainer.append(productContainer);
            productContainer.append(idProduct, titleProduct, priceProduct, thumbnailProduct);

            idProduct.setAttribute('scope', 'row');
            titleProduct.setAttribute('scope', 'row');
            priceProduct.setAttribute('scope', 'row');
            thumbnailProduct.setAttribute('scope', 'row');
        })
    })
});

