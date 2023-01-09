import express from 'express';
import { config } from 'dotenv';
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors';
import { log } from '../utils/logger.js';
import { routerAuth, routerFaker } from "../routes/index.js";
import { sessionMongo } from "../database/config.js";
import { corsConfig, sockets } from "../sockets/index.js";

config( { path: './enviroment/.env' } );

const app = express();
const PORT = process.env.PORT || 8080;
const corsPolicy = process.env.corsOrigin;
const server = http.createServer( app );

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( sessionMongo() )

server.listen( PORT, () => {
    log.info( `Server listening on http://localhost:${ PORT }` )
} );

app.use( cors( { origin: corsPolicy } ) )

// Routes
app.use( '/api/test-products', routerFaker );
app.use( '/api/auth', routerAuth )
// Sockets
export const io = new Server( server, { cors: corsConfig( corsPolicy ) },
    log.info( 'Socket IO Online' ) );

sockets( io );

























