import  express from "express"
import { ControladorHabitaciones } from'../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

let controladorHabitacion = new ControladorHabitaciones()
let ControladorReserva = new ControladorReservas()

//Para separar las rutas de la logica de negocio
//Utilizare un metodo especial de express

export let rutas=express.Router()

//Listado de servicios
rutas.post('/registrarhabitacion',controladorHabitacion.registrarHabitacion)

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoTodasHabitaciones)

rutas.get('/buscarhabitacion/:idHabitacion',controladorHabitacion.buscandoUnaHabitacion)

rutas.put('/actualzarhabitacion/:idHabitacion',controladorHabitacion.editandoHabitacion)

rutas.post('/crearreserva',ControladorReserva.crearReserva)

rutas.get('/buscaridreserva/:idReserva',ControladorReserva.buscarIdReserva)

rutas.get('/buscarreservas',ControladorReserva.buscarReservas)

rutas.put('/editarreserva/:idReserva',ControladorReserva.editarReserva)

rutas.delete('/eliminarreserva/:idReserva',ControladorReserva.eliminarReserva)