function generatePage(title, contnet) {

    let html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css"> `

    html += '<title>' + title + '</title></head><body>'
    html += '<main class="div"><h1>Todos los proyectos</h1>'

    
    html += '<div class="nav-page"><a href="/">Inicio</a> <a class="menu" href="/landingpage/nuevo">Crear proyecto</a> <a class="menu" href="/landingpage">Ver todos los proyectos</a> <a class="menu" href="/landingpage/section/mobile">Mobile</a> <a class="menu" href="/landingpage/section/landingpage">Landing page</a> <a class="menu" href="/landingpage/section/webapp">Web App</a>  <a class="menu" href="/landingpage/section/ecommerce">E-commerce</a> <a class="menu" href="/landingpage/section/games">Games</a></div>'

    html += contnet;

    html += '</body></html>'

    return html;
}

function generateListLandings(landings) {
    let html = '<ul class="ul-landing">';
    for (let landing of landings) {
        html += `<li><div class="landingsDiv"><div class="product-img"><img src='${landing.img}' alt='${landing.name}'> <h4>${landing.name}</div><a href="/landingpage/${landing._id}">Ver</a> <a href="/landingpage/${landing._id}/edit">Modificar</a> <a href="/landingpage/${landing._id}/delete">Eliminar</a></div></li>`
    }
    html += '</main></ul>'

    return generatePage('Proyectos', html)
}

function generateLandingDetail(landing) {
    let html = `<h1>${landing.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${landing.description}</p>`
    html += `<a class="link-repo" href='${landing.link}'>Link del repositorio</a>`
    html += `<img src='${landing.img}' alt='${landing.name}'>`
    html += `<p>${landing.section}</p>`
    if (landing.technologies && landing.technologies.length > 0) {
        html += "<ul>";
        landing.technologies.forEach(technology => {
            html += `<li>${technology}</li>`;
        });
        html += "</ul>";
    }  
    html += '</div>';

    return generatePage('Detalle de Proyecto', html)
}

function generateNewLandingForm() {
    let html = `<form action="/landingpage/nuevo" method="post" class="forms">
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
<label for="technology">Tecnologias usadas:
<input type="text" name="technologies" id="technology">
</label>

<button class="btn-confirm" type="submit">Crear proyecto</button>
    </form> 
    <a class="back" href="/landingpage">Volver a proyectos</a>
    `

    return generatePage('Crear Proyecto', html)
}

function generateEditLandingForm(landing) {
    let html = `
    <h1>Modificar Proyecto</h1>

    <form action="/landingpage/${landing._id}/edit" method="post" class="forms">
    <label for="name">Nombre: 
    <input type="text" name="name" id="name" value="${landing.name}">
</label>
<label for="description">Descripcion:
    <input type="text" name="description" id="description" value="${landing.description}">
</label>
<label for="link">Link:
    <input type="text" name="link" id="link" value="${landing.link}">
</label>
<label for="img">Imagen del proyecto:
<input type="text" name="img" id="img" value="${landing.img}">
</label>
<label for="technology">Tecnologias usadas:
    <input type="text" name="technologies" id="technology" value="${landing.technologies.join(', ')}">
</label>
<label for="section">Seccion
    <input type="text" name="section" id="section" value="${landing.section}">
</label>
<button class="btn-confirm" type="submit">Modificar</button>
    </form> 
    <a class="back" href="/landingpage/section/landingpage">Volver a proyectos</a>
    `

    return generatePage(`Modificar Proyecto`, html)
}

function generateDeleteLanding(landing) {
    let html = `<h1>${landing.name}</h1>`
    html += '<div class="div-proyect">'
    html += `<p>${landing.description}</p>`
    html += `<a class="link-repo" href='${landing.link}'>Link del repositorio</a>`
    html += `<img src='${landing.img}' alt='${landing.name}'>`
    html += `<p>${landing.section}</p>`
    if (landing.technologies && landing.technologies.length > 0) {
        html += "<ul>";
        landing.technologies.forEach(technology => {
            html += `<li>${technology}</li>`;
        });
        html += "</ul>";
    }  
    html += '</div>';

    html += `<form action="/landingpage/${landing._id}/delete" method="post" class="forms">
        <button class="btn-confirm" type="submit">Eliminar</button>
    </form> 
    <a  class="back" href="/landingpage">Volver a proyectos</a>
    `

    return generatePage('Eliminar Proyecto', html)
}


export {
    generatePage,
    generateListLandings,
    generateLandingDetail,
    generateNewLandingForm,
    generateEditLandingForm,
    generateDeleteLanding
}
