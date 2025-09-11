const formCharacter = document.querySelector("#formCharacter")



formCharacter.addEventListener("submit", async (e) => {
    e.preventDefault()

        
    // let name = document.querySelector("#name").value
    

    // const response = await fetch("http://localhost:3000/clashroyale", {
    //     method: "POST",
    //     headers: { "Content-Type" : "application/json"},
    //     body: JSON.stringify({name})
    // })

    // const data = await response.json()
    // alert(`Sucesso no Data - ${data.name}`)
    carregarResposta()


})

async function carregarResposta() {
    const response = await fetch("http://localhost:3000/clashroyale")
    const usuarios = await response.json()

    const lista = document.querySelector("#listaCharacter")

    console.log(usuarios)
    
    let name = document.querySelector("#name").value

    usuarios.forEach(carta => {
        console.log("entrou")
        console.log(name)
        if(name == carta.nome){
            console.log("entrou 2")
            let li = document.createElement("li")
            li.textContent = `${carta.nome} - ${carta.genero} | ${carta.tipo} | ${carta.raridade} | ${carta.elixir} | ${carta.lancamento} | ${carta.arena} | ${carta.ataque}`
            lista.appendChild(li)
        }
    });


    // usuarios.forEach(carta => {
    //     const li = document.createElement("li");
    //     li.textContent = `${carta.nome} - ${carta.genero} | ${carta.tipo} | ${carta.raridade} | ${carta.elixir} | ${carta.lancamento} | ${carta.arena} | ${carta.ataque}`
    //     lista.appendChild(li)
    // });
}

