import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Construimos el esquema personalizando la información
const Reserva= new Schema({
    nombreCliente:{ 
        type:String,
        require:true
    },
    ApellidoCliente:{
        type:String,
        require:true
    },
    telefonoCliente:{
        type:Number,
        require:true
    },
    fechaInicioReserva:{
        type:Date,
        require:true
    },
    fechaFinReserva:{
        type:Date,
        require:true
    },
    numeroPersonas:{
        type:Number,
        require:true
    },
    idHabitacion:{
        type:String,
        require:true
    },
    costo:{
        type: Number,
        require: true
    }
})

export const modeloReserva=mongoose.model('reserva', Reserva)