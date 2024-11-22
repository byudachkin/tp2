fetch('https://dummyjson.com/recipes/tags')
.then(res => res.json())
.then(console.log);
