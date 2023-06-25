function generatePage(title, contnet) {

    let html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css"> `

    html += '<title>' + title + '</title></head><body>'

    html += '<main class="div"><h1>Mis proyectos - E-commerce</h1>'

    html += '<nav class="nav-page"><><a href="/">Inicio</a> <a class="menu" href="/ecommerce/nuevo">Crear proyecto</a>  <a href="/ecommerce">Ver proyectos</a></nav>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListEcommerces(ecommerces) {
    let html = '<ul class="ul-landing">';
    for (let ecommerce of ecommerces) {
        html += `<li> <h4>${ecommerce.name}</h4> <div class="landingsDiv"><a href="ecommerce/${ecommerce._id}">Ver</a> <a href="/ecommerce/${ecommerce._id}/edit">Modificar</a> <a href="/ecommerce/${ecommerce._id}/delete">Eliminar</a></div> </li>`
    }
    html += '</main></ul>'

    return generatePage('Proyectos', html)
}

function generateEcommerceDetail(ecommerce) {
    let html = `<h1>${ecommerce.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${ecommerce.description}</p>`
    html += `<a class="link-repo" href='${ecommerce.link}'>Link del repositorio</a>`
    html += `<img src='${ecommerce.img}' alt='${ecommerce.name}'>`
    html += `<p>${ecommerce.section}</p>`
    html += '</div>';



    return generatePage('Detalle de Proyecto', html)
}

function generateNewEcommerceForm() {
    let html = `<form action="/ecommerce/nuevo" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description">
</label>
<label for="img">Imagen del proyecto:
<input type="text" name="img" id="img">
</label>
<label for="link">Link:
<input type="text" name="link" id="link" >
</label>
<label for="section">Seccion:
<input type="text" name="section" id="section" >
</label>

<button type="submit">Crear proyecto</button>
    </form> 
    <a class="back" href="/ecommercepage/section/ecommerce">Volver a proyectos</a>
    `

    return generatePage('Crear Proyecto', html)
}

function generateEditEcommerceForm(ecommerce) {
    let html = `
    <h1>Modificar Proyecto</h1>

    <form action="/ecommerce/${ecommerce._id}/edit" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name" value="${ecommerce.name}">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description" value="${ecommerce.description}">
</label>
<label for="link">Link:
    <input type="text" name="link" id="link" value="${ecommerce.link}">
</label>
<label for="img">Imagen del proyecto:
<input type="text" name="img" id="img" value="${ecommerce.img}">
</label>
<label for="section">Seccion
    <input type="text" name="section" id="section" value="${ecommerce.section}">
</label>
<button type="submit">Modificar</button>
    </form> 
    <a class="back" href="/ecommercepage/section/ecommerce">Volver a proyectos</a>
    `

    return generatePage(`Modificar Proyecto`, html)
}

function generateDeleteEcommerce(ecommerce) {
    let html = `<h1>${ecommerce.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${ecommerce.description}</p>`
    html += `<a class="link-repo" href='${ecommerce.link}'>Link del repositorio</a>`
    html += `<img src='${ecommerce.img}' alt='${ecommerce.name}'>`
    html += `<p>${ecommerce.section}</p>`
    html += '</div>';


    html += `<form action="/ecommerce/${ecommerce._id}/delete" method="post" class="forms">
        <button type="submit">Eliminar</button>
    </form> 
    <a class="back" href="/ecommercepage/section/ecommerce">Volver a proyectos</a>
    `

    return generatePage('Eliminar Proyecto', html)
}


export {
    generatePage,
    generateListEcommerces,
    generateEcommerceDetail,
    generateNewEcommerceForm,
    generateEditEcommerceForm,
    generateDeleteEcommerce
}