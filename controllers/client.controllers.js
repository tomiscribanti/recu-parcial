import * as view from '../views/client.views.js'
import * as service from '../services/client.services.js'

async function getClientes(req, res) {
    service.getClientes({ deleted: true })
        .then(function (clientes) {
            res.send(view.generateListClientes(clientes))
        })
      }
      

function getClienteById(req, res) {
    let id = req.params.idCliente

    service.getClienteById(id)
        .then(function (cliente) {

            if (cliente) {

                res.send(view.generateClienteDetail(cliente))
            }
            else {
                res.send(view.generatePage('Detalle de cliente <br><a class="back" href="/cliente">Volver a clientes</a>', `<h1>cliente no encontrado<br><a class="back" href="/cliente">Volver a clientes</a></h1>`))
            }
        })
}

function formCreateCliente(req, res) {
    res.send(view.generateNewClienteForm())
}

function createCliente(req, res) {
    let cliente = {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      section: req.body.section,
      proyecto: req.body.proyecto


    };
    service.createCliente(cliente)
        .then(function (cliente) {
            res.send(view.generatePage('cliente creado', `<h1>cliente creado con exito</h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear cliente <a class="back" href="/cliente">Volver a clientes</a>', `<h1>${err}</h1>`))
        })

}


function formEditCliente(req, res) {
    let id = req.params.idCliente

    service.getClienteById(id)
        .then(function (cliente) {
            if (cliente) {
                res.send(view.generateEditClienteForm(cliente))
            }
            else {
                res.send(view.generatePage('Modificar cliente', `<h1>cliente no encontrado </h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
        })
}

function editCliente(req, res) {
    let id = req.params.idCliente

    let cliente = {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        section: req.body.section,
        proyecto: req.body.proyecto
    }

    service.editCliente(id, cliente)
        .then(function (cliente) {
            if (cliente) {
                res.send(view.generatePage('cliente Modificado', `<h1>cliente modificado con exito</h1> <br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
            else {
                res.send(view.generatePage('cliente Modificado', `<h1>cliente no encontrado</h1> <br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al modificar cliente<br><a class="back" href="/cliente">Volver a clientes</a>', `<h1>${err}</h1> <br><a href="/cliente">Volver a clientes</a>`))
        })
}

function formDeleteCliente(req, res) {
    let id = req.params.idCliente

    service.getClienteById(id)
        .then(function (cliente) {
            if (cliente) {
                res.send(view.generateDeleteCliente(cliente))
            }
            else {
                res.send(view.generatePage('Detalle de cliente', `<h1>cliente no encontrado</h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
        })
}


function deleteCliente(req, res) {
    let id = req.params.idCliente

    service.deleteCliente(id)
        .then(function (cliente) {
            if (cliente) {
                res.send(view.generatePage('cliente Eliminado', `<h1>cliente eliminado con exito</h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
            else {
                res.send(view.generatePage('Detalle de cliente', `<h1>cliente no encontrado</h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
            }
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al eliminar cliente', `<h1>${err}</h1><br><a class="back" href="/cliente">Volver a clientes</a>`))
        })
}

async function getClientesBySection(req, res) {
    const selectedPage = req.params.section;
  
    try {
      const clientes = await service.getClientesBySection(selectedPage);
      res.send(view.generateListClientes(clientes));
    } catch (error) {
    }
  }


export {
    getClientes,
    getClienteById,
    formCreateCliente,
    createCliente,
    formEditCliente,
    editCliente,
    formDeleteCliente,
    deleteCliente,
    getClientesBySection
}