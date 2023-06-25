import express from 'express';
import * as controller from '../controllers/webapp.api.controllers.js';
import * as mobileController from '../controllers/mobile.api.controllers.js';
import * as ecommerceController from '../controllers/ecommerce.api.controllers.js';
import * as landingController from '../controllers/landing.api.controllers.js';
import * as clienteController from '../controllers/client.api.controllers.js';

import ReviewRoute from './products.reviews.routes.js';

const route = express.Router();


route.get('/landingpage', landingController.getLandings);
route.post('/landingpage', landingController.createLanding);

route.get('/landingpage/:idLanding', landingController.getLandingByID);
route.put('/landingpage/:idLanding', landingController.replaceLanding);
route.patch('/landingpage/:idLanding', landingController.updateLanding);
route.delete('/landingpage/:idLanding', landingController.deleteLanding);

route.get('/ecommerce', ecommerceController.getEcommerces);
route.post('/ecommerce', ecommerceController.createEcommerce);

route.get('/ecommerce/:idEcommerce', ecommerceController.getEcommerceByID);
route.put('/ecommerce/:idEcommerce', ecommerceController.replaceEcommerce);
route.patch('/ecommerce/:idEcommerce', ecommerceController.updateEcommerce);
route.delete('/ecommerce/:idEcommerce', ecommerceController.deleteEcommerce);

route.get('/mobile', mobileController.getMobiles);
route.post('/mobile', mobileController.createMobile);

route.get('/mobile/:idMobile', mobileController.getMobileByID);
route.put('/mobile/:idMobile', mobileController.replaceMobile);
route.patch('/mobile/:idMobile', mobileController.updateMobile);
route.delete('/mobile/:idMobile', mobileController.deleteMobile);

route.get('/webapp', controller.getWebapps);
route.post('/webapp', controller.createWebapp);

route.get('/webapp/:idWebapp', controller.getWebappByID);
route.put('/webapp/:idWebapp', controller.replaceWebapp);
route.patch('/webapp/:idWebapp', controller.updateWebapp);
route.delete('/webapp/:idWebapp', controller.deleteWebapp);

route.get('/cliente', landingController.getLandings);
route.post('/cliente', landingController.createLanding);

route.get('/cliente/:idCliente', clienteController.getClienteByID);
route.put('/cliente/:idCliente', clienteController.replaceCliente);
route.patch('/cliente/:idCliente', clienteController.updateCliente);
route.delete('/cliente/:idCliente', clienteController.deleteCliente);


route.use(ReviewRoute);

export default route;
