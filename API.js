import  express from "express"
import {rutas} from './routes/rutas.js'
import {establecerConexion} from './database/conexion.js'

export class API{
    constructor(){//Los atributos de las clases en js van dentro del constructor
        this.app = express() //app es express
        this.conectarDB()
        this.enrutarPeticiones()
    }
    despertarServidor(){
        this.app.listen(3000, () => console.log("Servidor activo"))
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarDB(){
        establecerConexion()
    }

}