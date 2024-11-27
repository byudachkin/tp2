/* validacion del buscador del header */

const formulario = document.querySelector("form");
const campoBuscar = document.querySelector(".campoBuscar");
const errorbuscar = document.querySelector(".errordescript");

const productGrid = document.querySelector(".productGrid");
const cargarMasRecetas = document.querySelector("#cargarMas"); 
let recetas = "";
let indiceRecetas = 0; 
let Recetas = []; 
let index = 1;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoBuscar.value === "" || campoBuscar.value.length <= 3) {
        errorbuscar.style.display = "block";
        errorbuscar.innerText = "Por favor buscar algo";
    } else {
        this.submit();
    }
});

/* cargar 10 fotos mas*/

cargarMasRecetas.addEventListener("click", function () {
    CargarRecetas(index);
});

function CargarRecetas(index) {
    const tamanoLote = 10 * index;
   
    for (let i = 10 * index - 10; i < tamanoLote; i++){
        let receta = {};
        receta = Recetas [i];
        recetas += `
         <article>
            <img src="${receta.image}" alt="${receta.name}">
            <h2>${receta.name}</h2>
            <p>DIFICULTAD: ${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}">MAS DETALLES</a>
        </article>`


    }
        productGrid.innerHTML = recetas;
        indiceRecetas += tamanoLote;

    };



        fetch("https://dummyjson.com/recipes")
            .then(function (response) {
                 return response.json();
    })
            .then(function (data) {
                 Recetas = data.recipes;
                CargarRecetas(index); 
    })
            .catch(function (error) {
                console.log("Mi error fue", error);
    });




