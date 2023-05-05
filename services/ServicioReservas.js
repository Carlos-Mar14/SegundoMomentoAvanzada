import { modeloReserva } from "../models/modeloReserva.js"


export class ServicioReserva{
    constructor(){}

    async registrarReserva(datoReserva, idHabitacion){
        let reservaNueva= new modeloReserva(datoReserva, idHabitacion)
        return await reservaNueva.save()
    }

    async buscarTodasReservas(){
        let reservasConsultadas= await modeloReserva.find()
        return reservasConsultadas
    }

    async buscarReserva(idReserva){
        let reservaConsultada= await modeloReserva.findById(idReserva)
        return reservaConsultada
    }

    async editarReserva(idReserva, datoReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva, datoReserva)
    }

    async eliminarReserva(idReserva,datoReserva){
        return await modeloReserva.findByIdAndDelete(idReserva, datoReserva);
    }
}