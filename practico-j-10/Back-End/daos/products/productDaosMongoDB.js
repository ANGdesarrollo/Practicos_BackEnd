import ContainerMongo from "../../containers/mongoContainer.js";
import Product from "../../models/product.js";

class ProductsDaoMongoDB extends ContainerMongo {
    constructor() {
        super(Product);
    }
}

export default ProductsDaoMongoDB;
