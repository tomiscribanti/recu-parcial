import express from 'express'
import LandingRoute from './routes/landing.routes.js'
import LandingRouteAPI from './api/routes/landing.api.routes.js'

import MobileRoute from './routes/mobile.routes.js'
import MobileRouteAPI from './api/routes/landing.api.routes.js'


import WebRoute from './routes/webapp.routes.js'
import WebRouteAPI from './api/routes/landing.api.routes.js'


import EcommerceRoute from './routes/ecommerce.routes.js'
import EcommerceRouteAPI from './api/routes/landing.api.routes.js'

import clientRoute from './routes/client.routes.js'
import clientRouteAPI from './api/routes/landing.api.routes.js'



const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use('/', express.static('public')) 

app.use(clientRoute)
app.use('/api', clientRouteAPI)

app.use(EcommerceRoute)
app.use('/api', EcommerceRouteAPI)

app.use(WebRoute)
app.use('/api', WebRouteAPI)

app.use(MobileRoute)
app.use('/api', MobileRouteAPI)

app.use(LandingRoute)
app.use('/api', LandingRouteAPI)

app.listen(2222, function () {
    console.log('conectado')
})
