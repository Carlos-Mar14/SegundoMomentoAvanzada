import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorHabitaciones{
    
    constructor(){}

    async registrarHabitacion( peticion, respuesta ){

        let datosHabitacion=peticion.body
        let servicioHabitacion=new ServicioHabitaciones()

        try {//Si me voy por el try es que la peticion funciono

            if(datosHabitacion.precioNoche < 100 && datosHabitacion.cantidadMaxima < 2){
                respuesta.status(400).json({
                    "mensaje":"Revisa el precio por noche y la cantidad maxima de persona ingresada"
                })
            }else if(datosHabitacion.precioNoche < 100){
                respuesta.status(400).json({
                    "mensaje":"Revisa el precio por noche"
                })
            }
            else if(datosHabitacion.cantidadMaxima < 2){
                respuesta.status(400).json({
                    "mensaje":"Muy poca gente en esta habitación"
                })
            }
            else{
                await servicioHabitacion.registrarHabitacion(datosHabitacion)
                respuesta.status(200).json({
                    "mensaje": "exito agregando datos"
            })
        }
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }

    async buscandoUnaHabitacion( peticion, respuesta ){
        let idHabitacion=peticion.params.idHabitacion
        let servicioHabitacion=new ServicioHabitaciones()
        
        try {//Si me voy por el try es que la peticion funciono
            respuesta.status(200).json({
                "mensaje": "exito buscando habitación" + idHabitacion,
                "habitacion": await servicioHabitacion.buscarHabitacion(idHabitacion)
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }

    async buscandoTodasHabitaciones( peticion, respuesta ){
        let servicioHabitacion=new ServicioHabitaciones()
        try {//Si me voy por el try es que la peticion funciono
            respuesta.status(200).json({
                "mensaje": "exito buscando todas las habitaciones",
                "habitaciones": await servicioHabitacion.buscarTodasHabitaciones()
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }
    async editandoHabitacion( peticion,respuesta){
        let idHabitacion=peticion.params.idHabitacion
        let datosNuevosHabitacion=peticion.body
        let servicioHabitacion= new ServicioHabitaciones()
        try {//Si me voy por el try es que la peticion funciono
            await servicioHabitacion.editarHabitacion(idHabitacion, datosNuevosHabitacion)
            respuesta.status(200).json({
                "mensaje": "exito editando habitacion",
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }

}