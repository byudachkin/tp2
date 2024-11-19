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


