import * as service from '../../services/webapp.services.js'

function getWebapps(req, res) {

    const filter = req.query

    service.getWebapps(filter)
        .then(function (webapps) {
            res.status(200).json(webapps)
        })
}

function createWebapp(req, res) {
    const webapp = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }

    service.createWebapp(webapp)
        .then(function (newWebapp) {
            res.status(201).json(newWebapp)
        })
}

function getWebappByID(req, res) {
    const idWebapp = req.params.idWebapp

    service.getWebappById(idWebapp)
        .then(function (webapp) {
            if (webapp) {
                res.status(200).json(webapp)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto ${webapp.name}` } })
            }
        })

}

function replaceWebapp(req, res) {
    let idWebapp = req.params.idWebapp

    let webapp = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []

    }

    service.replaceWebapp(idWebapp, webapp)
        .then(function (webapp) {
            if (webapp) {
                res.status(200).json(webapp)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto ${webapp.name}` } })
            }
        })
}

function updateWebapp(req, res) {
    let idWebapp = req.params.idWebapp

    let webapp = {}

    if (req.body.name) {
        webapp.name = req.body.name
    }

    if (req.body.link) {
        webapp.link = req.body.link
    }
    if (req.body.img) {
        webapp.link = req.body.img
    }

    if (req.body.section) {
        webapp.link = req.body.section
    }

    if (req.body.description) {
        webapp.description = req.body.description
    }




    service.editWebapp(idWebapp, webapp)
        .then(function (webapp) {
            if (webapp) {
                res.status(200).json(webapp)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto ${webapp.name}` } })
            }
        })
}



function deleteWebapp(req, res) {
    let idWebapp = parseInt(req.params.idWebapp)

    service.deleteWebapp(idWebapp)
        .then(function (webapp) {
            if (webapp) {
                res.status(200).json(webapp)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto ${webapp.name}` } })
            }
        })
}

async function getWebappsBySection(req, res) {
    const selectedPage = req.params.section;
  
    try {
      const webapps = await service.getWebappsBySection(selectedPage);
      res.send(view.generateListwebapps(webapps));
    } catch (error) {
      res.send(view.generateErrorPage('Error al obtener proyectos', error));
    }
  }


export {
    getWebapps,
    createWebapp,
    getWebappByID,
    replaceWebapp,
    updateWebapp,
    deleteWebapp,
    getWebappsBySection
}