import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    timestamp: { type: Date, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true },
});

export default model('product', productSchema);


