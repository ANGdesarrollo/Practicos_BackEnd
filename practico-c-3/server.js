const express = require("express");
const app = express();
const port = process.env.PORT | 8080
const classContainer = require("./classContainer");


async function createSv() {

    const container = new classContainer('products.txt')
    const allProducts = await container.getAll()

    app.get("/products", async (req, res) => {
        res.json(allProducts)
    });
    app.get("/randomProduct", async (req, res) => {
        const random = (Math.floor(Math.random() * allProducts.length))
        const randomProduct = allProducts.find(el => el.id === random)
        res.json(randomProduct)
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)

    })

    console.log('error')


}

createSv()

