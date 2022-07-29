function cards(productsItens){
    let produtosVitrine = document.querySelector(".containerListaProdutos ul")
    for(let i = 0; i < productsItens.length; i++){
    let li = document.createElement("li")
    let img = document.createElement("img")
    let h3 = document.createElement("h3")
    let span = document.createElement("span")
    let p = document.createElement("p")
    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(span)
    li.appendChild(p)
    img.src = productsItens[i].img
    img.alt = "Imagem" + productsItens[i].nome
    h3.innerText = productsItens[i].nome
    span.innerText = productsItens[i].secao
    if(productsItens[i].preco % 1 == 0){
       p.innerText = "R$ " + productsItens[i].preco + ".00"}
        else{
        p.innerText = "R$ " + productsItens[i].preco}
        produtosVitrine.appendChild(li)}
comprasTotal()
}
cards(produtos)
let botao1 = document.querySelector(".estiloGeralBotoes")
let botao2 = document.querySelectorAll(".estiloGeralBotoes")
let botaoHorti = 0
let botaoPani = 0
let botaoLati = 0
for(let i = 0; i < botao2.length; i++){
    if(botao2[i].innerText == "Hortifruti"){
        botaoHorti = botao2[i]}
    else if(botao2[i].innerText == "Panificadora"){
        botaoPani = botao2[i]}
    else if(botao2[i].innerText == "Laticínios"){
        botaoLati = botao2[i]}
}
botaoHorti.addEventListener("click", hortifruti)
botaoPani.addEventListener("click", panificadora)
botaoLati.addEventListener("click", laticinios)
botao1.addEventListener("click", todosItens)
function hortifruti(){
    let produtosCard = document.querySelectorAll(".containerListaProdutos ul li")
    for(let i = 0; i < produtosCard.length; i++){
        produtosCard[i].remove()}
    cards(produtos)
    let boxes = document.querySelectorAll(".containerListaProdutos ul li span")
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].innerText !== "Hortifruti"){
            let li = boxes[i].closest("li")
            li.remove()}
    }
comprasTotal()
}
function panificadora(){
    let produtosCard = document.querySelectorAll(".containerListaProdutos ul li")
    for(let i = 0; i < produtosCard.length; i++){
        produtosCard[i].remove()}
    cards(produtos)
    let boxes = document.querySelectorAll(".containerListaProdutos ul li span")
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].innerText !== "Panificadora"){
            let li = boxes[i].closest("li")
            li.remove()}
    }
comprasTotal()
}
function laticinios(){
    let produtosCard = document.querySelectorAll(".containerListaProdutos ul li")
    for(let i = 0; i < produtosCard.length; i++){
        produtosCard[i].remove()}
    cards(produtos)
    let boxes = document.querySelectorAll(".containerListaProdutos ul li span")
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].innerText !== "Laticínio"){
            let li = boxes[i].closest("li")
            li.remove()}
    }
comprasTotal()
}
function todosItens(){
    let produtosCard = document.querySelectorAll(".containerListaProdutos ul li")
    for(let i = 0; i < produtosCard.length; i++){
        produtosCard[i].remove()}
    cards(produtos)
comprasTotal()
}
function comprasTotal(){
    let total = 0
    let produtosPrecos = document.querySelectorAll(".containerListaProdutos ul li p")
    for(let i = 0; i < produtosPrecos.length; i++){
        let precos = produtosPrecos[i].innerText.replace("R$ ", "")
        total = parseFloat(precos) + total}
    let container = document.querySelector(".priceContainer span")
    if(total % 1 == 0){container.innerText = "R$ " + total +".00"}
    else{container.innerText = "R$ " + total}
}
let botaoPesquisa = document.querySelector(".containerBuscaPorNome button")
botaoPesquisa.addEventListener("click", itensPesquisa)
let pesquisar = document.querySelector(".containerBuscaPorNome input")
pesquisar.addEventListener("click", todosItens)
function itensPesquisa(){
    let produtosNomes = document.querySelectorAll(".containerListaProdutos ul li h3")
    for(let i = 0; i < produtosNomes.length; i++){
        let nome = produtosNomes[i].innerText.toLowerCase()
        if(nome !== pesquisar.value){
            let produto = produtosNomes[i].closest("li")
            produto.remove()}
    }
comprasTotal()
}