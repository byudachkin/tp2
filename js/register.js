const form = document.querySelector("form")

const mail = document.getElementById("email")
const pass = document.getElementById("password")

const emailError = document.querySelector(".error_email");
const passError = document.querySelector(".error_pass");
console.log("el value es " + mail.value)

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = false;

    if(mail.value === '') {
        emailError.innerText = "Por favor completa el email";
        emailError.style.display = "block";
        errores = true;
 
    } else {
        emailError.style.display = "none";
    }

    if(pass.value === ''){
        passError.innerText = "Por favor completa la contraseña";
        passError.style.display = "block";
        errores = true;

    } else {
        passError.style.display = "none";
    }

    if(!errores){
        form.submit();
    }
});
