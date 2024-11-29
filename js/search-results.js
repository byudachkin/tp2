let search = document.querySelector(".section")
let querystring = location.search
let params = new URLSearchParams (querystring)
let searchQuery = params.get("buscador")

fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let texto = document.querySelector(".texto")


    if (data.recipes.length > 0){
        let htmlcontent = "";
        console.log(data.recipes)
        for (let i = 0; i < data.recipes.length; i++) {
        
         htmlcontent += `<article>
            <img class="imagen" src="${data.recipes[i].image}" alt = "${data.recipes[i].name}">
            <p class"parrafo" > ${data.recipes[i].name} </p>
            <p class "parrafo"> Name: ${data.recipes[i].difficulty} </p> 

            </a>
        </article>`
    

        }
    
       
        search.innerHTML = htmlcontent;

        }})
    