function generatePage(title, contnet) {

    let html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css"> `

    html += '<title>' + title + '</title></head><body>'
    html += '<main class="div"><h1>Mis proyectos - Clientes</h1>'
    html += '<div class="nav-page"><a href="/">Inicio</a> <a class="menu" href="/cliente/nuevo">Crear Cliente</a></div>'


    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListClientes(clientes) {
    let html = '<ul class="ul-cliente">';
    for (let cliente of clientes) {
        html += `<li> <h4>${cliente.name}</h4> <div class="clientesDiv"><a href="/cliente/${cliente._id}">Ver</a> <a href="/cliente/${cliente._id}/edit">Modificar</a> <a href="/cliente/${cliente._id}/delete">Eliminar</a></div> </li>`
    }
    html += '</main></ul>'

    return generatePage('clientes', html)
}

function generateClienteDetail(cliente) {
    let html = `<h1>${cliente.name}</h1>`;
    html += '<div class="div-proyect">';
    html += `<p>${cliente.description}</p>`;
    html += `<p>${cliente.proyecto}</p>`;
    html += `<img src="${cliente.img}" alt="${cliente.name}">`;
    html += `<p>${cliente.section}</p>`;
    
    if (cliente.cliente && Array.isArray(cliente.cliente) && cliente.cliente.length > 0) {
      html += "<ul>";
      cliente.cliente.forEach((item) => {
        html += `<li>${item}</li>`;
      });
      html += "</ul>";
    }



    return generatePage('Detalle de cliente', html)
}

function generateNewClienteForm() {
    let html = `<form action="/cliente/nuevo" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description">
</label>
<label for="proyecto">Proyecto:
    <input type="text" name="proyecto" id="proyecto">
</label>
<label for="img">Imagen del cliente:
<input type="text" name="img" id="img">
</label>

<label for="section">Seccion:
<input type="text" name="section" id="section" >
</label>


<button class="btn-confirm" type="submit">Crear cliente</button>
    </form> 
    <a class="back" href="/cliente/section/cliente">Volver a clientes</a>
    `

    return generatePage('Crear cliente', html)
}

function generateEditClienteForm(cliente) {
    let html = `
    <h1>Modificar cliente</h1>

    <form action="/cliente/${cliente._id}/edit" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name" value="${cliente.name}">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description" value="${cliente.description}">
</label>
<label for="proyecto">Proyecto:
    <input type="text" name="proyecto" id="proyecto" value="${cliente.proyecto}">
</label>
<label for="img">Imagen del cliente:
<input type="text" name="img" id="img" value="${cliente.img}">
</label>
<label for="section">Seccion
    <input type="text" name="section" id="section" value="${cliente.section}">
</label>
<button class="btn-confirm" type="submit">Modificar</button>
    </form> 
    <a class="back" href="/cliente/section/cliente">Volver a clientes</a>
    `

    return generatePage(`Modificar cliente`, html)
}

function generateDeleteCliente(cliente) {

    let html = `<h1>${cliente.name}</h1>`;
    html += '<div class="div-proyect">';
    html += `<p>${cliente.description}</p>`;
    html += `<p>${cliente.proyecto}</p>`;
    html += `<img src="${cliente.img}" alt="${cliente.name}">`;
    html += `<p>${cliente.section}</p>`;
    
    if (cliente.cliente && Array.isArray(cliente.cliente) && cliente.cliente.length > 0) {
      html += "<ul>";
      cliente.cliente.forEach((item) => {
        html += `<li>${item}</li>`;
      });
      html += "</ul>";
    }


    html += `<form action="/cliente/${cliente._id}/delete" method="post" class="forms">
        <button class="btn-confirm" type="submit">Eliminar</button>
    </form> 
    <a  class="back" href="/cliente/section/cliente">Volver a clientes</a>
    `

    return generatePage('Eliminar cliente', html)
}


export {
    generatePage,
    generateListClientes,
    generateClienteDetail,
    generateNewClienteForm,
    generateEditClienteForm,
    generateDeleteCliente
}
