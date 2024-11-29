const formulario = document.querySelector(".ingresar");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.querySelector(".email").value;
  let contraseña = document.querySelector(".password").value;

  if (email === "") {
    alert("Por favor complete el campo email"); 
    return;  
  }
  if (contraseña === "") {
    alert("Por favor complete el campo contraseña"); 
    return; 
  }
  window.location.href = "./index.html";
});



const campoBuscar = document.querySelector(".campoBuscar");
const errorbuscar = document.querySelector(".errordescript");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoBuscar.value == "" || campoBuscar.value.length <= 3) {
        errorbuscar.style.display = "block";
        errorbuscar.innerText = "Por favor buscar algo";
    } else {
        this.submit();
    }
});