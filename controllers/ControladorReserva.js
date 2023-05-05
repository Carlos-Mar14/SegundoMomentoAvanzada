import { ServicioReserva } from "../services/ServicioReservas.js"
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorReservas{

    constructor(){}
    
    async crearReserva( peticion, respuesta ){

        let datoReserva=peticion.body
        let servicioHabitacion= new ServicioHabitaciones()
        let servicioReserva= new ServicioReserva()

        try {//Si me voy por el try es que la peticion funciono

            let habitacion= await servicioHabitacion.buscarHabitacion(datoReserva.idHabitacion)
            if(habitacion){
                let fechaInicioReserva =new Date( datoReserva.fechaInicioReserva).getTime()
                let fechaFinReserva = new Date(datoReserva.fechaFinReserva).getTime()
                let diferencia = fechaFinReserva-fechaInicioReserva
                let diasReservados= diferencia/(1000*60*60*24)
                let costo=habitacion.precioNoche*diasReservados
                console.log(costo)
                // validacion si la fecha esta bien   
                if(diferencia < 0){
                    respuesta.status(400).json({
                        mensaje: "las fechas son invalidas",
                    })
                } 
                else{
                    datoReserva.costo=costo
                    await servicioReserva.registrarReserva(datoReserva)
                    respuesta.status(200).json({
                        "mensaje": "Exito en la reserva"
                    })
                }
            }
            else{
                respuesta.status(400).json({
                    "mensaje":"Habitacion no existe"
                })
            }
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }
    async buscarIdReserva(peticion, respuesta ){
        let idReserva=peticion.params.idReserva
        let servicioReserva=new ServicioReserva()

        try {//Si me voy por el try es que la peticion funciono
            respuesta.status(200).json({
                "mensaje": "exito buscando reserva" + idReserva,
                "reserva": await servicioReserva.buscarReserva(idReserva)
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }
    async buscarReservas(peticion, respuesta ){
        let servicioReserva=new ServicioReserva()

        try {//Si me voy por el try es que la peticion funciono
            respuesta.status(200).json({
                "mensaje": "exito buscando las reservas",
                "reservas": await servicioReserva.buscarTodasReservas()
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }
    async editarReserva(peticion, respuesta ){
        let idReserva= peticion.params.idReserva
        let datosNuevaReserva=peticion.body
        let servicioReserva= new ServicioReserva()
        try {//Si me voy por el try es que la peticion funciono
            await servicioReserva.editarReserva(idReserva,datosNuevaReserva)
            respuesta.status(200).json({
                "mensaje": "exito editando reserva"
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }
    async eliminarReserva(peticion, respuesta ){
        let idReserva= peticion.params.idReserva
        let datosNuevaReserva=peticion.body
        let servicioReserva= new ServicioReserva()
        try {//Si me voy por el try es que la peticion funciono
            await servicioReserva.eliminarReserva(idReserva, datosNuevaReserva)
            respuesta.status(200).json({
                "mensaje": "exito eliminando reserva"
            })
        } catch (errorPeticion) { // Si entro al catch es hubo un error
            respuesta.status(400).json({
                "mensaje":"fallamos" + errorPeticion
            })
        }
    }

}