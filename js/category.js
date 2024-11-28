const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");

fetch('https://dummyjson.com/recipes/tags/${tag}')
.then(function(data){
    let recetas = "";
    for (let i = 0; i < data.recipes.lenght; i++){
        recetas += `
         <article>
            <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
            <h2>${data.recipes[i].name}</h2>
            <p>DIFICULTAD: ${data.recipes[i].difficulty}</p>
            <a href="receta.html?id=${data.recipes[i].id}">MAS DETALLES</a>
        </article>`
    }
    document.querySelector(".productGrid").innerHTML = recetas;
})

.catch(function(error){
    console.log(error)
})

