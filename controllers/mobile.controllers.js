import * as view from '../views/mobile.views.js'
import * as service from '../services/mobile.services.js'

function getMobiles(req, res) {
    service.getMobiles({ deleted: true })
        .then(function (mobiles) {
            res.send(view.generateListMobiles(mobiles))
        })
}

function getMobileById(req, res) {
    let id = req.params.idMobile

    service.getMobileById(id)
        .then(function (mobile) {

            if (mobile) {

                res.send(view.generateMobileDetail(mobile))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto <br><a href="/mobile/section/mobile">Volver a proyectos</a>', `<h1>Proyecto no encontrado<br><a href="/mobile/section/mobile">Volver a proyectos</a></h1>`))
            }
        })
}

function formCreateMobile(req, res) {
    res.send(view.generateNewMobileForm())
}

function createMobile(req, res) {
    let mobile = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }

    if (req.body.technologies) {
        mobile.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.createMobile(mobile)
        .then(function (mobile) {
            res.send(view.generatePage('Proyecto creado', `<h1>Proyecto creado con exito</h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear proyecto>Volver a proyectos</a>', `<h1>${err}</h1>`))
        })

}


function formEditMobile(req, res) {
    let id = req.params.idMobile

    service.getMobileById(id)
        .then(function (mobile) {
            if (mobile) {
                res.send(view.generateEditMobileForm(mobile))
            }
            else {
                res.send(view.generatePage('Modificar Proyecto', `<h1>Proyecto no encontrado </h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
        })
}

function editMobile(req, res) {
    let id = req.params.idMobile

    let mobile = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }
    if (req.body.technologies) {
        mobile.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }
    service.editMobile(id, mobile)
        .then(function (mobile) {
            if (mobile) {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto modificado con exito</h1> <br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto no encontrado</h1> <br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al modificar proyecto<br><a href="/mobile/section/mobile">Volver a proyectos</a>', `<h1>${err}</h1> <br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
        })
}

function formDeleteMobile(req, res) {
    let id = req.params.idMobile

    service.getMobileById(id)
        .then(function (mobile) {
            if (mobile) {
                res.send(view.generateDeleteMobile(mobile))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
        })
}


function deleteMobile(req, res) {
    let id = req.params.idMobile

    service.deleteMobile(id)
        .then(function (mobile) {
            if (mobile) {
                res.send(view.generatePage('Proyecto Eliminado', `<h1>Proyecto eliminado con exito</h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Detalle de proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al eliminar proyecto', `<h1>${err}</h1><br><a href="/mobile/section/mobile">Volver a proyectos</a>`))
        })
}

export {
    getMobiles,
    getMobileById,
    formCreateMobile,
    createMobile,
    formEditMobile,
    editMobile,
    formDeleteMobile,
    deleteMobile
}