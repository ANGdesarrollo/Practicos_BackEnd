import ContainerFirebase from "../../containers/firebaseContainer.js";

export default class CartDaoFirebase extends ContainerFirebase {
    constructor() {
        super('carts')
    }
}