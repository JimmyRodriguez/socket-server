import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.intance;


const corsOptions = {
    origin: true,
    credentials: true,
};


//BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors(corsOptions))

//Rutas de Servicios
server.app.use('/', router)

server.start(() =>{
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
})