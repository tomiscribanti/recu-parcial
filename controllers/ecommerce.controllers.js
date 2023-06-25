import * as view from '../views/ecommerce.views.js'
import * as service from '../services/ecommerce.services.js'

function getEcommerces(req, res) {
    service.getEcommerces({ deleted: true })
        .then(function (ecommerces) {
            res.send(view.generateListEcommerces(ecommerces))
        })
}

function getEcommerceById(req, res) {
    let id = req.params.idEcommerce

    service.getEcommerceById(id)
        .then(function (ecommerce) {

            if (ecommerce) {

                res.send(view.generateEcommerceDetail(ecommerce))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto <br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>', `<h1>Proyecto no encontrado<br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a></h1>`))
            }
        })
}

function formCreateEcommerce(req, res) {
    res.send(view.generateNewEcommerceForm())
}

function createEcommerce(req, res) {
    let ecommerce = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []

    }
    if (req.body.technologies) {
        ecommerce.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }
    service.createEcommerce(ecommerce)
        .then(function (ecommerce) {
            res.send(view.generatePage('Proyecto creado', `<h1>Proyecto creado con exito</h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear proyecto>Volver a proyectos</a>', `<h1>${err}</h1>`))
        })

}


function formEditEcommerce(req, res) {
    let id = req.params.idEcommerce

    service.getEcommerceById(id)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.send(view.generateEditEcommerceForm(ecommerce))
            }
            else {
                res.send(view.generatePage('Modificar Proyecto', `<h1>Proyecto no encontrado </h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
        })
}

function editEcommerce(req, res) {
    let id = req.params.idecommerce

    let ecommerce = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []

    }

    if (req.body.technologies) {
        ecommerce.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.editEcommerce(id, ecommerce)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto modificado con exito</h1> <br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto no encontrado</h1> <br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al modificar proyecto<br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>', `<h1>${err}</h1> <br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
        })
}

function formDeleteEcommerce(req, res) {
    let id = req.params.idEcommerce

    service.getEcommerceById(id)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.send(view.generateDeleteEcommerce(ecommerce))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
        })
}


function deleteEcommerce(req, res) {
    let id = req.params.idEcommerce

    service.deleteEcommerce(id)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.send(view.generatePage('Proyecto Eliminado', `<h1>Proyecto eliminado con exito</h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Detalle de proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al eliminar proyecto', `<h1>${err}</h1><br><a href="/ecommerce/section/ecommerce">Volver a proyectos</a>`))
        })
}

export {
    getEcommerces,
    getEcommerceById,
    formCreateEcommerce,
    createEcommerce,
    formEditEcommerce,
    editEcommerce,
    formDeleteEcommerce,
    deleteEcommerce
}