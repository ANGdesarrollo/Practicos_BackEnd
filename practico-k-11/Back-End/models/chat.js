import {model, Schema } from 'mongoose';

const chatSchema = new Schema({
    author: {
        email: {type: String, required: true},
        username: {type: String, required: true},
        surname: {type: String, required: true},
        age: {type: Number, required: true},
        alias: {type: String, required: true},
        image: {type: String, required: true}
    },
    text: {type: String, required: true},
    timestamp: {type: Date, required: true},
})

export default model('chatSchema', chatSchema);
