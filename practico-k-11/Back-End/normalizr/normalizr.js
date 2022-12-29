import {denormalize, normalize, schema} from 'normalizr';

const authorSchema = new schema.Entity('author', {}, {idAttribute: "email"});
const messageSchema = new schema.Entity("messages", {
    author: authorSchema
}, {idAttribute: "_id"});

const chatSchema = new schema.Entity("allChats", {
    messages: [messageSchema]
})


export const normalizedData = (data) => {
    const dataID = {id: 'historyChats', data}
    return normalize(dataID, chatSchema)
}
