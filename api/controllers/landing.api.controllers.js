import * as service from '../../services/landing.services.js'

function getLandings(req, res) {

    const filter = req.query

    service.getLandings(filter)
        .then(function (landings) {
            res.status(200).json(landings)
        })
}

function createLanding(req, res) {
    const landing = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        cliente: req.body.cliente
    }

    service.createLanding(landing)
        .then(function (newLanding) {
            res.status(201).json(newLanding)
        })
}

function getLandingByID(req, res) {
    const idLanding = req.params.idLanding

    service.getLandingById(idLanding)
        .then(function (landing) {
            if (landing) {
                res.status(200).json(landing)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idLanding}` } })
            }
        })

}

function replaceLanding(req, res) {
    let idLanding = req.params.idLanding

    let landing = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        cliente: req.body.cliente


    }

    service.replaceLanding(idLanding, landing)
        .then(function (landing) {
            if (landing) {
                res.status(200).json(landing)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idLanding}` } })
            }
        })
}

function updateLanding(req, res) {
    let idLanding = req.params.idLanding

    let landing = {}

    if (req.body.name) {
        landing.name = req.body.name
    }

    if (req.body.link) {
        landing.link = req.body.link
    }
    if (req.body.img) {
        landing.link = req.body.img
    }

    if (req.body.section) {
        landing.link = req.body.section
    }

    if (req.body.description) {
        landing.description = req.body.description
    }

    if (req.body.technologies) {
        landing.technologies = req.body.technologies
    }

      if (req.body.cliente) {
        landing.cliente = req.body.cliente
    }




    
    service.editLanding(idLanding, landing)
        .then(function (landing) {
            if (landing) {
                res.status(200).json(landing)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idLanding}` } })
            }
        })
}



function deleteLanding(req, res) {
    let idLanding = parseInt(req.params.idLanding)

    service.deleteLanding(idLanding)
        .then(function (landing) {
            if (landing) {
                res.status(200).json(landing)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idLanding}` } })
            }
        })
}

async function getLandingsBySection(req, res) {
    const selectedPage = req.params.section;
  
    try {
      const landings = await service.getLandingsBySection(selectedPage);
      res.send(view.generateListLandings(landings));
    } catch (error) {
      res.send(view.generateErrorPage('Error al obtener proyectos', error));
    }
  }


export {
    getLandings,
    createLanding,
    getLandingByID,
    replaceLanding,
    updateLanding,
    deleteLanding,
    getLandingsBySection
}