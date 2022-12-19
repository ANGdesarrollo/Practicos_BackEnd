import containerFileSystem from "../../containers/fileContainer.js";

export default class ProductsDaoFileSystem extends containerFileSystem {
        constructor() {
            super('./database/fileSystem/products.txt');

        }
}