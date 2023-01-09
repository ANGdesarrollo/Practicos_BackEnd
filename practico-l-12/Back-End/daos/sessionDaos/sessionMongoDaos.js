import ContainerMongo from '../../container/mongoContainer.js';

export class ContainerMongoDaos extends ContainerMongo {
    constructor() {
        super('sessions');
    }
}
