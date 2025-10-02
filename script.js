

//https://pokeapi.co/api/v2/pokemon

// const typesColors = {
//     grass:"green",
//     fire:"red",
//     water:"blue"
// }
const typesClasses ={
    grass:"grass",
    fire:"fire",
    water:"water",
    flying: "flying",
    bug: "bug"
}

async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemons = await response.json()
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{

        const li = document.createElement("li")
       
        const p = document.createElement("p")
        p.innerText = pokemon.name

        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        //adicionando estilo de acordo com o tipo
         //li.setAttribute("style",`background-color:${typesColors[infos.types[0].type.name]};`)
        li.classList.add(typesClasses[infos.types[0].type.name])
        //clicar e navegar pra página do pokemon
         li.addEventListener("click",()=>{
           //JSON.
            localStorage.setItem("pokemon",JSON.stringify(infos))
            location.href = "/pokemon"
        })
        const img = document.createElement("img")
        img.src = infos.sprites.front_default

        li.append(img,p)
        ul.append(li)
    })
}
getPokemons()