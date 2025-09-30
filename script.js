

//https://pokeapi.co/api/v2/pokemon
async function getPokemons(){
console.log("rodou função")

    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    console.log(response,"pokemons")
    const pokemons = await response.json()
    console.log(pokemons.results,"result")
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{
        console.log(pokemon,"pokemon")
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerText = pokemon.name

        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        const img = document.createElement("img")
        img.src = infos.sprites.front_default
       //expeirence
        const experience = document.createElement("p")
        experience.innerText ="Base experience: " + infos.base_experience

        //abilities
        const abilities = document.createElement("div")
        const abilityTitle = document.createElement("p")
        abilityTitle.innerText = "Abilities"
        abilities.append(abilityTitle)
        infos.abilities.forEach((item)=>{
    
            const ability = document.createElement("p")
            ability.innerText = item.ability.name
            abilities.append(ability)
        })

        //height
        const height = document.createElement("p")
        height.innerText = "Altura: " + infos.height 


        li.append(img,p,height,experience,abilities)
        ul.append(li)
    })
}
getPokemons()