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
