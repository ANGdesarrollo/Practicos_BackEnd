import { normalize, schema} from 'normalizr';

const authorSchema = new schema.Entity('authors', {}, {idAttribute: 'email'});
const messageSchema = new schema.Entity("messages", {
    author: authorSchema
});

const chatSchema = new schema.Entity("chats", {
    messages: [messageSchema]
})

export const normalizedData = (data) => {
    return normalize({id: "chatHistory", messages: data}, chatSchema)
}
