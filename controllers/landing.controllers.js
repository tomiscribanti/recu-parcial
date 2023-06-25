import * as view from '../views/landing.views.js'
import * as service from '../services/landing.services.js'

async function getLandings(req, res) {
    service.getLandings({ deleted: true })
        .then(function (landings) {
            res.send(view.generateListLandings(landings))
        })
      }
      

function getLandingById(req, res) {
    let id = req.params.idLanding

    service.getLandingById(id)
        .then(function (landing) {

            if (landing) {

                res.send(view.generateLandingDetail(landing))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto <br><a href="/landingpage">Volver a proyectos</a>', `<h1>Proyecto no encontrado<br><a href="/landingpage">Volver a proyectos</a></h1>`))
            }
        })
}

function formCreateLanding(req, res) {
    res.send(view.generateNewLandingForm())
}

function createLanding(req, res) {
    let landing = {
      name: req.body.name,
      description: req.body.description,
      section: req.body.section,
      link: req.body.link,
      img: req.body.img,
      technologies: Array.isArray(req.body.technologies) ? req.body.technologies : []
    };

    if (req.body.technologies) {
        landing.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.createLanding(landing)
        .then(function (landing) {
            res.send(view.generatePage('Proyecto creado', `<h1>Proyecto creado con exito</h1><br><a href="/landingpage">Volver a proyectos</a>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear proyecto>Volver a proyectos</a>', `<h1>${err}</h1>`))
        })

}


function formEditLanding(req, res) {
    let id = req.params.idLanding

    service.getLandingById(id)
        .then(function (landing) {
            if (landing) {
                res.send(view.generateEditLandingForm(landing))
            }
            else {
                res.send(view.generatePage('Modificar Proyecto', `<h1>Proyecto no encontrado </h1><br><a href="/landingpage">Volver a proyectos</a>`))
            }
        })
}

function editLanding(req, res) {
    let id = req.params.idLanding

    let landing = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: Array.isArray(req.body.technologies) ? req.body.technologies : []
    }

    if (req.body.technologies) {
        landing.technologies = req.body.technologies.split(",").map((technology) => technology.trim());
      }

    service.editLanding(id, landing)
        .then(function (landing) {
            if (landing) {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto modificado con exito</h1> <br><a href="/landingpage">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Proyecto Modificado', `<h1>Proyecto no encontrado</h1> <br><a href="/landingpage">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al modificar proyecto<br><a href="/landingpage">Volver a proyectos</a>', `<h1>${err}</h1> <br><a href="/landingpage">Volver a proyectos</a>`))
        })
}

function formDeleteLanding(req, res) {
    let id = req.params.idLanding

    service.getLandingById(id)
        .then(function (landing) {
            if (landing) {
                res.send(view.generateDeleteLanding(landing))
            }
            else {
                res.send(view.generatePage('Detalle de Proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/landingpage">Volver a proyectos</a>`))
            }
        })
}


function deleteLanding(req, res) {
    let id = req.params.idLanding

    service.deleteLanding(id)
        .then(function (landing) {
            if (landing) {
                res.send(view.generatePage('Proyecto Eliminado', `<h1>Proyecto eliminado con exito</h1><br><a href="/landingpage">Volver a proyectos</a>`))
            }
            else {
                res.send(view.generatePage('Detalle de proyecto', `<h1>Proyecto no encontrado</h1><br><a href="/landingpage">Volver a proyectos</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al eliminar proyecto', `<h1>${err}</h1><br><a href="/landingpage">Volver a proyectos</a>`))
        })
}

async function getLandingsBySection(req, res) {
    const selectedPage = req.params.section;
  
    try {
      const landings = await service.getLandingsBySection(selectedPage);
      res.send(view.generateListLandings(landings));
    } catch (error) {
    }
  }
  

export {
    getLandings,
    getLandingById,
    formCreateLanding,
    createLanding,
    formEditLanding,
    editLanding,
    formDeleteLanding,
    deleteLanding,
    getLandingsBySection
}