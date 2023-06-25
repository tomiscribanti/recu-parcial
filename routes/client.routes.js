import express from 'express'
import * as controller from '../controllers/client.controllers.js'


const route = express.Router()

route.get('/cliente', controller.getClientes)

route.get('/cliente/section/:section', controller.getClientesBySection);


route.get('/cliente/nuevo', controller.formCreateCliente)
route.post('/cliente/nuevo', controller.createCliente)

route.get('/cliente/:idCliente/edit', controller.formEditCliente)
route.post('/cliente/:idCliente/edit', controller.editCliente)

route.get('/cliente/:idCliente/delete', controller.formDeleteCliente)
route.post('/cliente/:idCliente/delete', controller.deleteCliente)

route.get('/cliente/:idCliente', controller.getClienteById)


export default route