const formCharacter = document.querySelector("#formCharacter")
let cartaPrincipal = {}


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
    mostrarCartaResposta()


})


async function carregarResposta() {
    const response = await fetch("http://localhost:3000/clashroyale")
    const todasCartas = await response.json()
    return todasCartas
    
}

async function mostrarCartaResposta() {
    const lista = document.querySelector("#listaCharacter")
    const todasCartas = await carregarResposta()
    let inputName = document.querySelector("#name")
    let name = inputName.value

    for (const carta of todasCartas) {
        if (name.toUpperCase() === carta.nome.toUpperCase()) {

            const atributosCorretos = await verificarCaracteristicasCartaPrincipalCartaResposta(carta)

            let ul = document.createElement("ul")
            ul.classList.add("flex", "gap-10")

            const atributos = ["genero", "tipo", "raridade", "elixir", "lancamento", "arena", "ataque"]

            atributos.forEach(attr => {
                let li = document.createElement("li")
                li.classList.add("size-24", "flex", "items-center", "justify-center", "border-yellow-500", "border-2", "text-white", "font-semibold", "relative", "text-center")

                // Criar span para o texto com z-index alto
                let texto = document.createElement("span")
                texto.classList.add("relative", "z-10")
                texto.textContent = carta[attr]
                li.appendChild(texto)

                if (atributosCorretos.includes(attr)) {
                    li.classList.add("bg-green-800")
                } else {
                    li.classList.add("bg-red-800")
                    let rotate;

                    // Adicionar seta atrás do texto somente se for "lancamento" maior
                    if(attr == "lancamento" && carta.lancamento ){
                    // Colocar o texto em um span com z-index alto
                    if(carta.lancamento > cartaPrincipal.lancamento){
                        rotate = "rotate-90 mb-2.5"
                    } else {
                        rotate = "-rotate-90 mt-2.5"
                    }

                    li.innerHTML = `<span class="relative z-10">${carta[attr]}</span>
                    <div class="absolute left-1/2 -translate-x-1/2  w-16 h-3 bg-black ${rotate} z-0">
                        <!-- Cabo da seta -->
                        <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3 bg-black"></div>
                        
                        <!-- Triângulo da ponta -->
                        <div class="absolute top-1/2 -translate-y-1/2 -right-3 w-0 h-0 border-l-12 border-l-black border-y-12 border-y-transparent"></div>
                    </div>`;
                }
                }

                ul.appendChild(li)
            })

            lista.appendChild(ul)
        }
    }

    verificarCartaPrincipalCartaResposta(name)
    inputName.value = ""
}


async function carregarCartaPrincipal() {

    const todasCartas = await carregarResposta()

    const numeroAleatorio = Math.floor(Math.random() * todasCartas.length + 1)
    console.log(numeroAleatorio)

    todasCartas.forEach(carta => {
            if(carta.id == numeroAleatorio){
                cartaPrincipal = carta
                console.log(cartaPrincipal)
                
            }
    });

}

async function verificarCartaPrincipalCartaResposta(resposta) {
    
    if(resposta.toUpperCase() === cartaPrincipal.nome.toUpperCase()){
        alert("ACERTOU")
    }
    
}

async function verificarCaracteristicasCartaPrincipalCartaResposta(cartaAtual) {
        const atributos = ["genero", "tipo", "raridade", "elixir", "lancamento", "arena", "ataque"]
        const atributosCorretos = []

        atributos.forEach(attr => {
            if(cartaAtual[attr] === cartaPrincipal[attr]) {
                atributosCorretos.push(attr)
            }
        }) 
        // console.log(atributosCorretos)
        return atributosCorretos
}

carregarResposta()
carregarCartaPrincipal()