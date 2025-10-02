function getPokemons(){
        const infos = JSON.parse(localStorage.getItem("pokemon"))
        console.log(infos, "pokemon")

        const div = document.querySelector("div")

        //nome
        const p = document.createElement("p")
        p.classList.add("name")
        p.innerText = infos.name

        //imagem
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
    div.append( img, p, experience, abilities)
}
getPokemons()