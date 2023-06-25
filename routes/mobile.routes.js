import express from 'express'

import * as controller from '../controllers/mobile.controllers.js'

const route = express.Router()

route.get('/mobile', controller.getMobiles)

route.get('/mobile/nuevo', controller.formCreateMobile)
route.post('/mobile/nuevo', controller.createMobile)

route.get('/mobile/:idMobile/edit', controller.formEditMobile)
route.post('/mobile/:idMobile/edit', controller.editMobile)

route.get('/mobile/:idMobile/delete', controller.formDeleteMobile)
route.post('/mobile/:idMobile/delete', controller.deleteMobile)

route.get('/mobile/:idMobile', controller.getMobileById)


export default route