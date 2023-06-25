function generatePage(title, contnet) {

    let html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css"> `

    html += '<title>' + title + '</title></head><body>'
    html += '<main class="div"><h1>Mis proyectos - Mobile</h1>'

    html += '<nav class="nav-page"><><a href="/">Inicio</a> <a class="menu" href="/mobile/nuevo">Crear proyecto</a>  <a href="/mobile">Ver proyectos</a></nav>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListMobiles(mobiles) {
    let html = '<ul class="ul-landing">';
    for (let mobile of mobiles) {
        html += `<li> <h4>${mobile.name}</h4> <div class="landingsDiv"><a href="/mobile/${mobile._id}">Ver</a> <a href="/mobile/${mobile._id}/edit">Modificar</a> <a href="/mobile/${mobile._id}/delete">Eliminar</a></div> </li>`
    }
    html += '</main></ul>'

    return generatePage('Proyectos', html)
}

function generateMobileDetail(mobile) {
    let html = `<h1>${mobile.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${mobile.description}</p>`
    html += `<a class="link-repo" href='${mobile.link}'>Link del repositorio</a>`
    html += `<img src='${mobile.img}' alt='${mobile.name}'>`
    html += `<p>${mobile.section}</p>`
    html += '</div>';



    return generatePage('Detalle de Proyecto', html)
}

function generateNewMobileForm() {
    let html = `<form action="/mobile/nuevo" method="post" class="forms">
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
    <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>
    `

    return generatePage('Crear Proyecto', html)
}

function generateEditMobileForm(mobile) {
    let html = `
    <h1>Modificar Proyecto</h1>

    <form action="/mobile/${mobile._id}/edit" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name" value="${mobile.name}">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description" value="${mobile.description}">
</label>
<label for="link">Link:
    <input type="text" name="link" id="link" value="${mobile.link}">
</label>
<label for="img">Imagen del proyecto:
<input type="text" name="img" id="img" value="${mobile.img}">
</label>
<label for="section">Seccion
    <input type="text" name="section" id="section" value="${mobile.section}">
</label>
<button type="submit">Modificar</button>
    </form> 
    <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>
    `

    return generatePage(`Modificar Proyecto`, html)
}

function generateDeleteMobile(mobile) {
    let html = `<h1>${mobile.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${mobile.description}</p>`
    html += `<a class="link-repo" href='${mobile.link}'>Link del repositorio</a>`
    html += `<img src='${mobile.img}' alt='${mobile.name}'>`
    html += `<p>${mobile.section}</p>`
    html += '</div>';


    html += `<form action="/mobile/${mobile._id}/delete" method="post" class="forms">
        <button type="submit">Eliminar</button>
    </form> 
    <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>
    `

    return generatePage('Eliminar Proyecto', html)
}


export {
    generatePage,
    generateListMobiles,
    generateMobileDetail,
    generateNewMobileForm,
    generateEditMobileForm,
    generateDeleteMobile
}