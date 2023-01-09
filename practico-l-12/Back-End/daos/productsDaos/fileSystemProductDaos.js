import Container from '../../container/fileSystemContainer.js';

export class ProductDaosDB extends Container {
    constructor() {
        super('./store/products.txt');
    }
}
