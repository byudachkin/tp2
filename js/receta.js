// Obtener parámetros del querystring
const params = new URLSearchParams(window.location.search);
const recetaId = params.get('id');

if (!recetaId) {
    document.body.innerHTML = '<h1>Error: Receta no encontrada</h1>';
}

// Llamar a la API para obtener el detalle de la receta
fetch(`https://dummyjson.com/recipes/${recetaId}`)
    .then(response => {
        return response.json();
    })
    .then(receta => {
        // Insertar información
        document.getElementById('recetaNombre').textContent = receta.name;
        document.getElementById('recetaImagen').src = receta.image;
        document.getElementById('instrucciones').textContent = receta.instructions;
        document.getElementById('tiempococcion').textContent = `${receta.cookTimeMinutes} minutos`;
        document.getElementById('categorias').textContent = `${receta.tags}`;
    
          
        
       
    })
