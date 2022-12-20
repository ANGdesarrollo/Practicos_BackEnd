import ContainerMemory from "../../containers/memoryContainer.js";

export default class ProductDaoMemory extends ContainerMemory {
    constructor() {
        super([{
            "timestamp": "2022-12-20T03:00:00.000Z",
            "title": "Mouse",
            "price": 40,
            "description": "The best Mouse in the world, 3500DPI",
            "thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp",
            "stock": 40,
            "_id": "63a13729cd5dd108e938fd87"
        }]
    )
    }
}