import Container from '../../container/fileSystemContainer.js';

export class ChatDaosDB extends Container {
    constructor() {
        super('./store/chat.txt');
    }
}
