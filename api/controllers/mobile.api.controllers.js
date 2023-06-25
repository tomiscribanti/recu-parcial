import * as service from '../../services/mobile.services.js'

function getMobiles(req, res) {

    const filter = req.query

    service.getMobiles(filter)
        .then(function (mobiles) {
            res.status(200).json(mobiles)
        })
}

function createMobile(req, res) {
    const mobile = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
            technologies: Array.isArray(req.body.technology) ? req.body.technology : []

    }

    service.createMobile(mobile)
        .then(function (newMobile) {
            res.status(201).json(newMobile)
        })
}

function getMobileByID(req, res) {
    const idMobile = req.params.idLanding

    service.getMobileById(idMobile)
        .then(function (mobile) {
            if (mobile) {
                res.status(200).json(mobile)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idMobile}` } })
            }
        })

}

function replaceMobile(req, res) {
    let idMobile = req.params.idMobile

    let mobile = {
        name: req.body.name,
        description: req.body.description,
        section: req.body.section,
        link: req.body.link,
        img: req.body.img,
            technologies: Array.isArray(req.body.technology) ? req.body.technology : []

    }

    service.replaceMobile(idMobile, mobile)
        .then(function (mobile) {
            if (mobile) {
                res.status(200).json(mobile)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idMobile}` } })
            }
        })
}

function updateMobile(req, res) {
    let idMobile = req.params.idMobile

    let mobile = {}

    if (req.body.name) {
        mobile.name = req.body.name
    }

    if (req.body.link) {
        mobile.link = req.body.link
    }
    if (req.body.img) {
        mobile.link = req.body.img
    }

    if (req.body.section) {
        mobile.link = req.body.section
    }

    if (req.body.description) {
        mobile.description = req.body.description
    }

    if (req.body.technology && Array.isArray(req.body.technology)) {
        mobile.technologies = req.body.technology;
      }



    service.editMobile(idMobile, mobile)
        .then(function (mobile) {
            if (mobile) {
                res.status(200).json(mobile)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idMobile}` } })
            }
        })
}



function deleteMobile(req, res) {
    let idMobile = parseInt(req.params.idMobile)

    service.deleteMobile(idMobile)
        .then(function (mobile) {
            if (mobile) {
                res.status(200).json(mobile)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el proyecto #${idMobile}` } })
            }
        })
}
export {
    getMobiles,
    createMobile,
    getMobileByID,
    replaceMobile,
    updateMobile,
    deleteMobile
}