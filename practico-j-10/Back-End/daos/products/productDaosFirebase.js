import ContainerFirebase from "../../containers/firebaseContainer.js";

export default class ProductDaoFirebase extends ContainerFirebase {
    constructor() {
        super('products')
    }
}