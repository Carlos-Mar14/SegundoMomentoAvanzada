import  *  as  dotenv  from  'dotenv' 
dotenv.config()
import { API } from './API.js'


dotenv.config()

let servidor = new API()

//1. primero despertamos el servidor 
servidor.despertarServidor()