import ProductsDaoMongoDB from "../daos/products/productDaosMongoDB.js";
import { config } from 'dotenv';
import ProductsDaoFileSystem from "../daos/products/productDaosFileSystem.js";
import CartsDaoFileSystem from "../daos/carts/cartDaosFileSystem.js";
import CartDaoMongoDB from "../daos/carts/cartDaosMongoDB.js";
import ProductDaoMemory from "../daos/products/productDaosMemory.js";
import CartDaoMemory from "../daos/carts/cartDaosMemory.js";
import ProductDaoFirebase from "../daos/products/productDaosFirebase.js";
import CartDaoFirebase from "../daos/carts/cartDaosFirebase.js";
config({path: './environment/.env'})

const instances = [
    {
        classProduct: ProductsDaoMongoDB,
        classCart: CartDaoMongoDB,
        id: 'Mongo'
    },
    {
        classProduct: ProductDaoFirebase,
        classCart: CartDaoFirebase,
        id: 'Firebase'
    },
    {
        classProduct: ProductsDaoFileSystem,
        classCart: CartsDaoFileSystem,
        id: 'FileSystem'
    },
    {
        classProduct: ProductDaoMemory,
        classCart: CartDaoMemory,
        id: 'Memory'
    }
]

const instanceSelected = instances.find(el => el.id === process.env.INSTANCE);

export default instanceSelected;



