const formulario = document.querySelector(".formulario")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
console.log("el value es " + email.value)


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = false;

    if(email.value === '') {
        alert("Por favor completa el email");
        errores = true;
 
    }

    if(password.value === ''){
        errores = true;
        alert("Por favor completa la contraseña");
    }

    if(!errores){
        formulario.submit();
    }
});