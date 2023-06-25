function generatePage(title, contnet) {

    let html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css"> `

    html += '<title>' + title + '</title></head><body>'

    html += '<main class="div"><h1>Mis proyectos - WebApp</h1>'

    html += '<nav class="nav-page"><a href="/">Inicio</a> <a class="menu" href="/webapp/nuevo">Crear proyecto</a>  <a href="/webapp">Ver proyectos</a></nav>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListWebapps(webapps) {
    let html = '<ul class="ul-landing">';
    for (let webapp of webapps) {
        html += `<li> <h4>${webapp.name}</h4> <div class="landingsDiv"><a href="webappe/${webapp._id}">Ver</a> <a href="/webapp/${webapp._id}/edit">Modificar</a> <a href="/webapp/${webapp._id}/delete">Eliminar</a></div> </li>`
    }
    html += '</main></ul>'

    return generatePage('Proyectos', html)
}

function generateWebappDetail(webapp) {
    let html = `<h1>${webapp.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${webapp.description}</p>`
    html += `<a class="link-repo" href='${webapp.link}'>Link del repositorio</a>`
    html += `<img src='${webapp.img}' alt='${webapp.name}'>`
    html += `<p>${webapp.section}</p>`
    html += '</div>';



    return generatePage('Detalle de Proyecto', html)
}

function generateNewWebappForm() {
    let html = `<form action="/webapp/nuevo" method="post" class="forms">
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
    <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>
    `

    return generatePage('Crear Proyecto', html)
}

function generateEditWebappForm(webapp) {
    let html = `
    <h1>Modificar Proyecto</h1>

    <form action="/webapp/${webapp._id}/edit" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name" value="${webapp.name}">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description" value="${webapp.description}">
</label>
<label for="link">Link:
    <input type="text" name="link" id="link" value="${webapp.link}">
</label>
<label for="img">Imagen del proyecto:
<input type="text" name="img" id="img" value="${webapp.img}">
</label>
<label for="section">Seccion
    <input type="text" name="section" id="section" value="${webapp.section}">
</label>
<button type="submit">Modificar</button>
    </form> 
    <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>
    `

    return generatePage(`Modificar Proyecto`, html)
}

function generateDeleteWebapp(webapp) {
    let html = `<h1>${webapp.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${webapp.description}</p>`
    html += `<a class="link-repo" href='${webapp.link}'>Link del repositorio</a>`
    html += `<img src='${webapp.img}' alt='${webapp.name}'>`
    html += `<p>${webapp.section}</p>`
    html += '</div>';


    html += `<form action="/webapp/${webapp._id}/delete" method="post" class="forms">
        <button type="submit">Eliminar</button>
    </form> 
    <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>
    `

    return generatePage('Eliminar Proyecto', html)
}


export {
    generatePage,
    generateListWebapps,
    generateWebappDetail,
    generateNewWebappForm,
    generateEditWebappForm,
    generateDeleteWebapp
}