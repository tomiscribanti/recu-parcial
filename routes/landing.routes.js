import express from 'express'
import * as controller from '../controllers/landing.controllers.js'


const route = express.Router()

route.get('/landingpage', controller.getLandings)

route.get('/landingpage/section/:section', controller.getLandingsBySection);


route.get('/landingpage/nuevo', controller.formCreateLanding)
route.post('/landingpage/nuevo', controller.createLanding)

route.get('/landingpage/:idLanding/edit', controller.formEditLanding)
route.post('/landingpage/:idLanding/edit', controller.editLanding)

route.get('/landingpage/:idLanding/delete', controller.formDeleteLanding)
route.post('/landingpage/:idLanding/delete', controller.deleteLanding)

route.get('/landingpage/:idLanding', controller.getLandingById)


export default route