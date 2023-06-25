import express from 'express'

import * as controller from '../controllers/webapp.controllers.js'

const route = express.Router()

route.get('/webapp', controller.getWebapps)

route.get('/webapp/nuevo', controller.formCreateWebapp)
route.post('/webapp/nuevo', controller.createWebapp)

route.get('/webapp/:idWebapp/edit', controller.formEditWebapp)
route.post('/webapp/:idWebapp/edit', controller.editWebapp)

route.get('/webapp/:idWebapp/delete', controller.formDeleteWebapp)
route.post('/webapp/:idWebapp/delete', controller.deleteWebapp)

route.get('/webapp/:idWebapp', controller.getWebappById)


export default route