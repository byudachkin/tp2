
const params = new URLSearchParams(window.location.search);
const recetaId = params.get('id');

if (!recetaId) {
    document.body.innerHTML = '<h1>Error: Receta no encontrada</h1>';
}


fetch(`https://dummyjson.com/recipes/${recetaId}`)
    .then(response => {
        return response.json();
    })
    .then(receta => {
        document.getElementById('recetaNombre').textContent = receta.name;
        document.getElementById('recetaImagen').src = receta.image;
        document.getElementById('instrucciones').textContent = receta.instructions;
        document.getElementById('tiempococcion').textContent = `${receta.cookTimeMinutes} minutos`;
        document.getElementById('categorias').textContent = `${receta.tags}`;
        
        let tags = '';
        for (let i = 0; i < receta.tags.length; i++){
            tags += `
            <li><a href='category.html?tag=${receta.tags[i]}'>${receta.tags[i]}</a></li>`

        }  
        document.getElementById('categorias').innerHTML = tags;
        
       
    })
