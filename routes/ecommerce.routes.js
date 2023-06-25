import express from 'express'

import * as controller from '../controllers/ecommerce.controllers.js'

const route = express.Router()

route.get('/ecommerce', controller.getEcommerces)

route.get('/ecommerce/nuevo', controller.formCreateEcommerce)
route.post('/ecommerce/nuevo', controller.createEcommerce)

route.get('/ecommerce/:idEcommerce/edit', controller.formEditEcommerce)
route.post('/ecommerce/:idEcommerce/edit', controller.editEcommerce)

route.get('/ecommerce/:idEcommerce/delete', controller.formDeleteEcommerce)
route.post('/ecommerce/:idEcommerce/delete', controller.deleteEcommerce)

route.get('/ecommerce/:idEcommerce', controller.getEcommerceById)


export default route