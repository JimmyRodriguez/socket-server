
import express from 'express';
import { SERVER_PORT } from '../global/environment'
import http from 'http';
import socketIO from "socket.io";


export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;


    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = http.createServer(this.app);
        this.io = new socketIO.Server( this.httpServer );

        this.hearSockets();

    }

    public static get intance(){
        return this._instance || (this._instance = new this())
    } 

    private hearSockets(){
        console.log("Escuchando Conexiones - Sockets");

        this.io.on('connection', cliente =>{
            console.log("Cliente conectado");
        })

    }

    start(callback: Function){

        this.httpServer.listen( this.port, callback() );
    }

}

 /** Esta es una segunda opcion funcional del servidor  */

// import express from 'express';
// import { SERVER_PORT } from '../global/environment'
// import http from 'http';
// import { Server } from "socket.io";


// export default class _Server {

//     public app: express.Application;
//     public port: number;

//     public io: any;
//     private httpServer: any;


//     constructor(){
//         this.app = express();
//         this.port = SERVER_PORT;

//         this.httpServer = http.createServer(this.app);
//         this.io = new Server( this.httpServer );

//     }

//     start(callback: Function){

//         this.httpServer.listen( this.port, callback() );
//     }

// }