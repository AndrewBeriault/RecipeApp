document.querySelector('#clickMe').addEventListener('click', reqRecipe)

alert('hello')

async function reqRecipe(){

    const recipeName = document.querySelector("#recipeName").value;
    try{       
        console.log(`/api/${recipeName}`)
        const res = await fetch(`/api/${recipeName}`)
        const data = await res.json()
        console.log(data);
        document.querySelector("#recipeOutput").textContent = data._name

    }catch(error){
        console.log(error)
    }


  }