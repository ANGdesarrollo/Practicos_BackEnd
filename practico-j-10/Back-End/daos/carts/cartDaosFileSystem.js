import containerFileSystem from "../../containers/fileContainer.js";

export default class CartsDaoFileSystem extends containerFileSystem {
    constructor() {
        super('./database/fileSystem/carts.txt');

    }
}