import { modeloHabitacion } from "../models/modeloHabitacion.js"

export class ServicioHabitaciones{
    constructor(){}

    async registrarHabitacion(datosHabitacion){
        let habitacionNueva=new modeloHabitacion(datosHabitacion)
        return await habitacionNueva.save()
    }
    async buscarTodasHabitaciones(){
        let habitacionesConsultadas=await modeloHabitacion.find()
        return habitacionesConsultadas
    }
    async buscarHabitacion(idHabitacion){
        let habitacionesConsultada=await modeloHabitacion.findById(idHabitacion)
        return habitacionesConsultada
    }
    async editarHabitacion(idHabitacion, datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(idHabitacion, datosHabitacion)
    }
}