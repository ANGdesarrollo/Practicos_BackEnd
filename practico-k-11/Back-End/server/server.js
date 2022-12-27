import express from 'express';
import { config } from 'dotenv';
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors';
import { log } from '../utils/logger.js';
import { sockets } from '../sockets/socket.js'
import fakerRoute from '../routes/faker.js'
import dbConnectionMongo from "../database/config.js";

config({path: './enviroment/.env'});

await dbConnectionMongo()

const app = express();
const PORT = process.env.PORT || 8080;
const corsPolicy = process.env.corsOrigin;
const server = http.createServer(app);

server.listen(PORT, () => {
    log.info(`Server listening on http://localhost:${PORT}`)
});

app.use(cors({
    origin: corsPolicy
}))
app.use('/api/test-products', fakerRoute);

export const io = new Server(server, {
        cors: {
            origin: corsPolicy,
            methods: ['GET', 'POST'],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        }
    },
    log.info('Socket IO Online')
);

sockets(io);

























