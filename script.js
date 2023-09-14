const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const shake = document.querySelector("#shake")
const btnReset = document.querySelector("#btnReset")
const frase = document.querySelector("#frase")
const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "A maior de todas as torres começa no solo.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Siga os bons e aprenda com eles.",
]

// EVENTOS
shake.addEventListener('click', clickOnCookie)
btnReset.addEventListener('click', toggleScreen)


// FUNÇÕES
function clickOnCookie(){  //Clicar no cookie e trocar tela
    toggleScreen()

    frase.innerText = sortearFrases()
}



function sortearFrases() {
    return frases[Math.floor((Math.random()) * frases.length)];  //Sortear frase
}



function toggleScreen(){
    screen1.classList.toggle("hide")    //Adicionar ou tirar o hide
    screen2.classList.toggle("hide")
}



