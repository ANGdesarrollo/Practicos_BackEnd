import { denormalize, schema } from "normalizr";

export const useNormalizr = () => {
    const authorSchema = new schema.Entity("authors", {}, {idAttribute: "email"});
    const messageSchema = new schema.Entity("messages", {
        author: authorSchema
    }, {idAttribute: "_id"});

    const chatSchema = new schema.Entity("allChats", {
        messages: [messageSchema]
    })

    const denormalizedData = (data) => {
        return denormalize(data.result, chatSchema, data.entities)
    }

    return {
        denormalizedData
    }

}
