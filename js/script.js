// Usando API

let btn = document.querySelector(".btn"); // pega o elemento botao

btn.addEventListener("click", () => { // coloca evento de click no botão
    let numero = document.querySelector("#num")// pega o input

    if (numero.value.length == 0) {
        return alert("[ERRO!] NENHUM NÚMERO DIGITADO!")
    }
    else if (numero.value > 83 || numero.value < 1) {
        return alert("[ERRO!] NÚMERO INVÁLIDO!")
    }

    let endpoint = `https://swapi.dev/api/people/${numero.value}/`

    fetch(endpoint)
        .then((resposta) => resposta.json())
        .then((resposta) => {

            //Seta os valores pegados pela api no html 
            document.querySelector(".nomePersonagem").innerHTML = resposta.name
            document.querySelector(".alturaPersonagem").innerHTML = `Altura: ${resposta.height} Cm`
            document.querySelector(".pesoPersonagem").innerHTML = `Peso: ${resposta.mass} Kg`
            document.querySelector(".corDaPelePersonagem").innerHTML = `Cor da pele: ${resposta.skin_color}`
            document.querySelector(".corCabeloPersonagem").innerHTML = `Cor do Cabelo: ${resposta.hair_color}`
            document.querySelector(".corOlhoPersonagem").innerHTML = `Cor do Olho: ${resposta.eye_color}`
            document.querySelector(".anoNasciPersonagem").innerHTML = `Ano de Nascimento: ${resposta.birth_year}`
            document.querySelector(".generoPersonagem").innerHTML = `Genêro: ${resposta.gender}`

        })

    numero.value = "";
});