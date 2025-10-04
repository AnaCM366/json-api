const typesClasses = {
    normal: "normal",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    ice: "ice",
    fighting: "fighting",
    poison: "poison",
    ground: "ground",
    flying: "flying",
    psychic: "psychic",
    bug: "bug",
    rock: "rock",
    ghost: "ghost",
    dragon: "dragon",
    dark: "dark",
    steel: "steel",
    fairy: "fairy"
};
function getPokemons(){
        const infos = JSON.parse(localStorage.getItem("pokemon"))
        console.log(infos, "pokemon")
        
        const div = document.querySelector("div")
        div.classList.add(typesClasses[infos.types[0].type.name])

        //imagem
        const img = document.createElement("img")
        img.src = infos.sprites.front_default
        
        //nome
        const p = document.createElement("p")
        p.classList.add("name")
        p.innerText = infos.name

        //types (tipos)
        const tipos = document.createElement("p")
        tipos.innerText = infos.types

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
        div.append( img, p, tipos, experience, abilities)
        
    }
getPokemons()