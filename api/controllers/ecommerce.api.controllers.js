import * as service from '../../services/ecommerce.services.js'

function getEcommerces(req, res) {

    const filter = req.query

    service.getEcommerces(filter)
        .then(function (ecommerces) {
            res.status(200).json(ecommerces)
        })
}

function createEcommerce(req, res) {
    const ecommerce = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []
    }

    service.createEcommerce(ecommerce)
        .then(function (newEcommerce) {
            res.status(201).json(newEcommerce)
        })
}

function getEcommerceByID(req, res) {
    const idEcommerce = req.params.idEcommerce

    service.getEcommerceById(idEcommerce)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.status(200).json(ecommerce)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idEcommerce}` } })
            }
        })

}

function replaceEcommerce(req, res) {
    let idEcommerce = req.params.idEcommerce

    let ecommerce = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
        technologies: []

    }

    service.replaceEcommerce(idEcommerce, ecommerce)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.status(200).json(ecommerce)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idEcommerce}` } })
            }
        })
}

function updateEcommerce(req, res) {
    let idEcommerce = req.params.idEcommerce

    let ecommerce = {}

    if (req.body.name) {
        ecommerce.name = req.body.name
    }

    if (req.body.link) {
        ecommerce.link = req.body.link
    }
    if (req.body.img) {
        ecommerce.link = req.body.img
    }

    if (req.body.section) {
        ecommerce.link = req.body.section
    }

    if (req.body.description) {
        ecommerce.description = req.body.description
    }



    service.editEcommerce(idEcommerce, ecommerce)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.status(200).json(ecommerce)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idEcommerce}` } })
            }
        })
}



function deleteEcommerce(req, res) {
    let idEcommerce = parseInt(req.params.idEcommerce)

    service.deleteEcommerce(idEcommerce)
        .then(function (ecommerce) {
            if (ecommerce) {
                res.status(200).json(ecommerce)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idEcommerce}` } })
            }
        })
}
export {
    getEcommerces,
    createEcommerce,
    getEcommerceByID,
    replaceEcommerce,
    updateEcommerce,
    deleteEcommerce
}