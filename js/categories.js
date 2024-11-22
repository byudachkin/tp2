fetch('https://dummyjson.com/recipes/tags')
.then(res => res.json())
.then(console.log);

const categorias = document.getElementById("categorias");

function buscarCategorias(){
    fetch(function(response){
        return response.json();
    })
    .then(function(data){
        if (data.recipes && data.recipes.lenght > 0){
            let categoria= [];
            for(let i = 0; i < data.recipes.lenght; i++){
                const comida = data.recipes[i];
                if(comida.tags){
                    for (let h = 0; h < comida.tegs.lenght; h++){
                        const tag = comida.tags[h];
                        let existente = false;
                        for (let g = 0; g < categoria.length; g++){
                            if(categoria[g] === tag){
                                existente= true;
                            }
                        }
                    }
                }
            }
        }
    })

}