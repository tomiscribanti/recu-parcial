import * as service from '../../services/client.services.js'

function getClientes(req, res) {

    const filter = req.query

    service.getClientes(filter)
        .then(function (clientes) {
            res.status(200).json(clientes)
        })
}

function createCliente(req, res) {
    const cliente = {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        section: req.body.section,
        proyecto: req.body.proyecto
    }

    service.createCliente(cliente)
        .then(function (newCliente) {
            res.status(201).json(newCliente)
        })
}

function getClienteByID(req, res) {
    const idCliente = req.params.idCliente

    service.getClienteById(idCliente)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idCliente}` } })
            }
        })

}

function replaceCliente(req, res) {
    let idCliente = req.params.idCliente

    let cliente = {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        section: req.body.section,
        proyecto: req.body.proyecto


    }

    service.replaceCliente(idCliente, cliente)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idCliente}` } })
            }
        })
}

function updateCliente(req, res) {
    let idCliente = req.params.idCliente

    let cliente= {}

    if (req.body.name) {
        cliente.name = req.body.name
    }

    if (req.body.img) {
        cliente.link = req.body.img
    }

    if (req.body.description) {
        cliente.description = req.body.description
    }

    if (req.body.section) {
        cliente.section = req.body.section
    }
    if (req.body.proyecto) {
        cliente.proyecto = req.body.proyecto
    }


    
    service.editLanding(idCliente, cliente)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idCliente}` } })
            }
        })
}



function deleteCliente(req, res) {
    let idCliente = parseInt(req.params.idCliente)

    service.deleteCliente(idCliente)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idCliente}` } })
            }
        })
}

async function getClientesBySection(req, res) {
    const selectedPage = req.params.section;
  
    try {
      const clientes = await service.getClientesBySection(selectedPage);
      res.send(view.generateListClientes(clientes));
    } catch (error) {
      res.send(view.generateErrorPage('Error al obtener proyectos', error));
    }
  }

export {
    getClientes,
    createCliente,
    getClienteByID,
    replaceCliente,
    updateCliente,
    deleteCliente,
    getClientesBySection,
    
    
}