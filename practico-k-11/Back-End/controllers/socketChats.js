import { log } from '../utils/logger.js';
import { io } from '../server/server.js';
import {ChatDaosDB} from "../daos/chatDaos/fileSystemChatDaos.js";
import dayjs from 'dayjs';
import { normalizedData } from "../normalizr/normalizr.js";

const dateNow = dayjs().format('YYYY/MM/DD hh:mm:ss')
const Container = new ChatDaosDB;

export const sendMessages = async(data) => {
    try{
        const newMessage = {...data, timestamp: dateNow}
        await Container.save(newMessage);
        io.sockets.emit('newMessage', newMessage)
    }catch(err) {
        log.info(err)
    }
}

export const getAllChats = async() => {
    try {
        const allChats = await Container.getAll();
        const normalizeData = normalizedData(allChats)
        return normalizeData
    }catch(err) {
        log.info(err)
    }
}
