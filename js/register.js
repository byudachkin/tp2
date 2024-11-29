const form = document.querySelector(".formulario_registro")

const mail = document.querySelector(".email")
const pass = document.querySelector(".password")

const emailError = document.querySelector(".error_email");
const passError = document.querySelector(".error_pass");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = false;

    if(mail.value === '') {
        emailError.innerText = "Por favor completa el email";
        emailError.style.display = "block";
        errores = true;
        console.log("el value es " + mail.value)
    } 

    if(pass.value === ''){
        passError.innerText = "Por favor completa la contraseña";
        passError.style.display = "block";
        errores = true;
    }

    if(errores === false){
        form.submit();
    }
});
