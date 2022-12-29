import { log } from '../utils/logger.js';
import { io } from '../server/server.js';
import {ChatDaosDB} from "../daos/chatDaos/mongoChatDaos.js";
import Chat from "../models/chat.js";
import dayjs from 'dayjs';
import { normalizedData } from "../normalizr/normalizr.js";

const dateNow = dayjs().format('YYYY/MM/DD')
const Container = new ChatDaosDB;

export const sendMessages = async(data) => {
    try{
        const addDate = {...data, timestamp: dateNow}
        const newMessage = new Chat(addDate)
        await Container.save(newMessage);
        io.sockets.emit('newMessage', newMessage)
    }catch(err) {
        log.info(err)
    }
}

export const getAllChats = async() => {
    try {
        const allChats = await Container.getAll()
        return normalizedData(allChats);
    }catch(err) {
        log.info(err)
    }
}
