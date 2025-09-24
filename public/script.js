const ATRIBUTOS = ["foto", "genero", "tipo", "raridade", "elixir", "lancamento", "arena", "ataque"]

const formCharacter = document.querySelector("#formCharacter")
let cartaPrincipal = {}
let primeiraCartaJogada = false


formCharacter.addEventListener("submit", async (e) => {
    e.preventDefault()
    mostrarCartaResposta()
})


async function carregarResposta() {
    const response = await fetch("http://localhost:3000/clashroyale")
    const todasCartas = await response.json()
    return todasCartas
    
}

function animacaoListaInfo() {
    const ul = document.querySelector("#listaInfo")

    for (let index = 0; index < ATRIBUTOS.length; index++) {
        let div = document.createElement("div")

        div.classList.add("flex", "flex-col", "gap-2", "items-center", "justify-center")

        div.innerHTML += `
                <li class="text-sm text-center w-24">${ATRIBUTOS[index]}</li>
                <span class="w-4/5 h-1 bg-black block"></span>
            `
        ul.appendChild(div)
   
    }
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

            ATRIBUTOS.forEach(attr => {

                if(attr == "foto" && carta.foto){
                    let div = document.createElement("div")

                    div.classList.add("flex", "justify-center", "items-center", "w-24")


                    let img = document.createElement("img")
                    img.src = `https://www.deckshop.pro/img/card_ed/${carta.foto}.png`
                    img.classList.add("h-24")
                    
                    div.appendChild(img)
                    ul.appendChild(div)

                } else {

                    let li = document.createElement("li")
                li.classList.add("size-24", "flex", "items-center", "justify-center", "border-yellow-500", "border-2", "text-white", "font-semibold", "relative", "text-center")

                let texto = document.createElement("span")
                texto.classList.add("relative", "z-10")
                texto.textContent = carta[attr]
                li.appendChild(texto)

                if (atributosCorretos.includes(attr)) {
                    li.classList.add("bg-green-800")
                } else {
                    li.classList.add("bg-red-800")
                    let rotate;

                    if(attr == "lancamento" && carta.lancamento){

                        if(carta.lancamento > cartaPrincipal.lancamento){
                            rotate = "rotate-90 mb-2.5"
                        } else {
                            rotate = "-rotate-90 mt-2.5"
                        }

                        li.innerHTML = `<span class="relative z-10">${carta[attr]}</span>
                        <div class="absolute left-1/2 -translate-x-1/2  w-16 h-3 bg-black ${rotate} z-0">
                            <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3 bg-black"></div>
                            <div class="absolute top-1/2 -translate-y-1/2 -right-3 w-0 h-0 border-l-12 border-l-black border-y-12 border-y-transparent"></div>
                        </div>`;
                    } else if(attr == "elixir" && carta.elixir ){

                        if(carta.elixir > cartaPrincipal.elixir){
                            rotate = "rotate-90 mb-2.5"
                        } else {
                            rotate = "-rotate-90 mt-2.5"
                        }

                        li.innerHTML = `<span class="relative z-10">${carta[attr]}</span>
                        <div class="absolute left-1/2 -translate-x-1/2  w-16 h-3 bg-black ${rotate} z-0">
                            <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3 bg-black"></div>
                            <div class="absolute top-1/2 -translate-y-1/2 -right-3 w-0 h-0 border-l-12 border-l-black border-y-12 border-y-transparent"></div>
                        </div>`;
                    }


                }

                ul.appendChild(li)

                }
                
            })
            lista.appendChild(ul)
            if(primeiraCartaJogada === false){
                animacaoListaInfo()
            } 
            primeiraCartaJogada = true
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
        const atributosCorretos = []

        ATRIBUTOS.forEach(attr => {
            if(cartaAtual[attr] === cartaPrincipal[attr]) {
                atributosCorretos.push(attr)
            }
        }) 
        return atributosCorretos
}

carregarResposta()
carregarCartaPrincipal()