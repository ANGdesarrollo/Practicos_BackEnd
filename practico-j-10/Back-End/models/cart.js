import { model, Schema } from 'mongoose';

const cartSchema = new Schema({
    timestamp: {type: Date, required: true},
    products: Array
})

export default model('cartSchema', cartSchema);
