const formulario = document.querySelector(".formulario");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
console.log("el value es " + email.value);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = false;

 
    function esSoloEspacios(cadena) {
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] !== ' ') {
                return false; 
            }
        }
        return true; 
    }
    if(email.value == '' || esSoloEspacios(email.value)) {
        alert("Por favor completa el email correctamente");
        errores = true;
    }else if(password.value == '' || esSoloEspacios(password.value)){
    errores = true;
    alert("Por favor completa la contraseña correctamente");
    }if(!errores){
    formulario.submit();
    }
});