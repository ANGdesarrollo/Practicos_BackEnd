import ContainerMongo from "../../containers/mongoContainer.js";
import CartModel from "../../models/cart.js";

class CartDaoMongoDB extends ContainerMongo {
    constructor() {
        super(CartModel)
    }
}

export default CartDaoMongoDB
