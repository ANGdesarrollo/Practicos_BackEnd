import MongoContainer from '../../container/mongoContainer.js';
import Chat from '../../models/chat.js';

export class ChatDaosDB extends MongoContainer {
    constructor() {
        super(Chat);
    }
}
