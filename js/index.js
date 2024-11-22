/* validacion del buscador del header */

const formulario = document.querySelector("form");
const campoBuscar = document.querySelector(".campoBuscar");
const errorbuscar = document.querySelector(".errordescript");
const productGrid = document.querySelector(".productGrid");
const cargarMasRecetas = document.querySelector("#cargarMas"); // Botón para cargar más recetas
let recetas = "";
let indiceRecetas = 0; // Índice inicial
let Recetas = []; // Variable para almacenar todas las recetas

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
    CargarRecetas();
});

function CargarRecetas() {
    const tamanoLote = 10; 
    const loteRecetas = Recetas.slice(indiceRecetas, indiceRecetas + tamanoLote); 
    loteRecetas.forEach((receta) => {
        const markUp = `
        <article>
            <img src="${receta.image}" alt="${receta.name}">
            <h2>${receta.name}</h2>
            <p>DIFICULTAD: ${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}">MAS DETALLES</a>
        </article>`;
        recetas += markUp;
    });

    productGrid.innerHTML = recetas;
    indiceRecetas += tamanoLote;


    if (indiceRecetas >= Recetas.length) {
        cargarMasRecetas.style.display = "none";
    }
}

fetch("https://dummyjson.com/recipes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        Recetas = data.recipes;
        CargarRecetas(); 
    })
    .catch(function (error) {
        console.log("Mi error fue", error);
    });




