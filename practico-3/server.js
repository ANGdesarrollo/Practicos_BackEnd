const express = require("express");
const app = express();
const port = process.env.PORT | 8080
const classContainer = require("./classContainer");


function createSv() {
    app.get("/products", async (req,res) => {
        const container = new classContainer('products.txt')
        const allProducts = await container.getAll()
        res.json(allProducts)
    });
    app.get("/randomProduct", async (req,res) => {
        const container = new classContainer('products.txt')
        const allProducts = await container.getAll()
        const randomProduct = allProducts.find(el => el.id === (Math.floor(Math.random() * allProducts.length)))
        res.json(randomProduct)
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

createSv()

