import * as view from '../views/webapp.views.js'
import * as service from '../services/webapp.services.js'

function getWebapps(req, res) {
    service.getWebapps({ deleted: true })
        .then(function (webapps) {
            res.send(view.generateListWebapps(webapps))
        })
}

function getWebappById(req, res) {
    let id = req.params.idWebapp

    service.getWebappById(id)
        .then(function (webapp) {

            if (webapp) {

                res.send(view.generateWebappDetail(webapp))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto <br><a href="/webapp/section/webapp">Volver a proyectos</a>', `<h1>Proyecto no encontrado<br><a href="/webapp/section/webapp">Volver a proyectos</a></h1>`))
            }
        })
}

function formCreateWebapp(req, res) {
    res.send(view.generateNewWebappForm())
}

function createWebapp(req, res) {
    let webapp = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }

    if (req.body.technologies) {
        webapp.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.createWebapp(webapp)
        .then(function (webapp) {
            res.send(view.generatePage('Proyecto creado', `<h1>Proyecto creado con exito</h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear proyecto>Volver a proyectos</a>', `<h1>${err}</h1>`))
        })

}


function formEditWebapp(req, res) {
    let id = req.params.idWebapp

    service.getWebappById(id)
        .then(function (webapp) {
            if (webapp) {
                res.send(view.generateEditWebappForm(webapp))
            }
            else {
                res.send(view.generatePage('Modificar Proyecto', `<h1>Proyecto no encontrado </h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
        })
}

function editWebapp(req, res) {
    let id = req.params.idWebapp

    let webapp = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }

    if (req.body.technologies) {
        webapp.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.editWebapp(id, webapp)
        .then(function (webapp) {
            if (webapp) {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto modificado con exito</h1> <br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto no encontrado</h1> <br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al modificar proyecto<br><a href="/webapp/section/webapp">Volver a proyectos</a>', `<h1>${err}</h1> <br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
        })
}

function formDeleteWebapp(req, res) {
    let id = req.params.idWebapp

    service.getWebappById(id)
        .then(function (webapp) {
            if (webapp) {
                res.send(view.generateDeleteWebapp(webapp))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
        })
}


function deleteWebapp(req, res) {
    let id = req.params.idWebapp

    service.deleteWebapp(id)
        .then(function (webapp) {
            if (webapp) {
                res.send(view.generatePage('Proyecto Eliminado', `<h1>Proyecto eliminado con exito</h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Detalle de proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al eliminar proyecto', `<h1>${err}</h1><br><a href="/webapp/section/webapp">Volver a proyectos</a>`))
        })
}

export {
    getWebapps,
    getWebappById,
    formCreateWebapp,
    createWebapp,
    formEditWebapp,
    editWebapp,
    formDeleteWebapp,
    deleteWebapp
}