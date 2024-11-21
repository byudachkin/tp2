/* validacion del buscador del header*/

const formulario = document.querySelector("form");
const campoBuscar = document.querySelector(".campoBuscar");

const errorbuscar =document.querySelector(".errordescript")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    

    if (campoBuscar.value === "" || campoBuscar.value.length <= 3 ){
        errorbuscar.style.display= "block"
        errorbuscar.innerText= "por favor buscar algo"

    } else{
        this.submit()
    }
 
   
    
})

/* agregado de recetas al home*/

const productGrid = document.querySelector('.productGrid')
let recetas = "";

fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    
    for ( let i = 0; i < 10; i++){
        const receta = data.results[i]
        const markUp = 
       ` <article>
             <img src="${receta.image}" alt="${receta.name}">
             <h2>${receta.name}</h2>
             <p>DIFICULTAD: ${receta.difficulty}</p>
             <a href="#">MAS DETALLES</a>
        </article>`;
        recetas += markUp
    }
    productGrid.innerHTML = recetas

})

.catch(function(error){
    console.log("Mi error fue", error);
})



