fetch('https://dummyjson.com/recipes/tags')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let categorias = document.querySelector(".categorias");
        
        lista = "";
        for (let i = 0; i < data.length; i++) {
            lista += `<li><a href="category.html?tag=${data[i]}">${data[i]}</a></li>`
        }
        categorias.innerHTML = lista;
    })
    .catch(function(error) {
        console.log(error);
    })



    
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