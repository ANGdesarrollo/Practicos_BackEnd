import faker from "faker";
import {log} from "../utils/logger.js";

export const fakerProducts = (req, res) => {
    try {
        const products = [];

        for (let i = 0; i < 5; i++) {
            const product = {
                product: faker.commerce.product(),
                price: faker.commerce.price(),
                thumbnail: faker.image.cats(1234, 2345, true)
            }
            products.push(product);
        }

        res.json({
            status: true,
            message: 'Faker JS products created successfully',
            products: products
        })

    } catch (err) {
        log.info(err)
        res.json({
            status: false,
            message: 'Products cant be created'
        })
    }

}
