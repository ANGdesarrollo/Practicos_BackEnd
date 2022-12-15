import express from 'express';
import { config } from 'dotenv';
import productRouter from '../routes/products.js';
import cartRouter from'../routes/cart.js';
import  log from '../utils/logger.js';
import dbConnectionMongo from "../database/mongoDB/config.js";
import dbConnectionFirebase from "../database/firebase/config.js";

config({ path:'./server/.env' });

await dbConnectionMongo();
dbConnectionFirebase();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    log.info(`Listening on http://localhost:${PORT}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);









