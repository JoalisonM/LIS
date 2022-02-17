import itens from './model/dataset.js'; //importanto array de json do arquivo dataset.js, ele é exportado como dataset, mas é declarado aqui como itens 
import foodsModel from './model/foods.js'; //importando foodsModel do arquivo foods.js

foodsModel.load(itens); // está guardando no localStorage o array de json exportado do arquivo dataset.js
let foods = foodsModel.readAll(); // foods guarda os dados que estão salvos no localStorage, que são chamados da função readAll();

function initFoodsCard() { // criando função initFoodsCard que cria os cards dos jsons que já estão salvos em localStorage

  for (let item of foods) { // percorre o array de foods e itera sobre os seus atributos, retornando 

    const view = createFoodCardItem(item); // foodCard guarda os cards criados na função createFoodCardItem

    //let itensCardapio = document.querySelector('.itens-cardapio');
    let itensCardapio = document.getElementById("itens-cardapio"); // itensCardapio guarda a div que tem como id itens-cardapio
    itensCardapio.insertAdjacentHTML('beforeend', view); // colocando os cards do cardapio dentro da div que tem como classe "itens-cardapio",
    // a função insertAdjacentHTML serve para inserir algo em uma posição especificada
  } // fechamento do for of
} // fechamento da função initFoodsCard

function createFoodCardItem(item) { // criando função que gera os cards html que vão aparecer em tela

  const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`; // view guarda os cards que vão aparecer na tela, cada card tem imagem, nome e descrição

  return view; // função retorna a constante view que guarda o html do card que vai ser mostrado em tela
} // fechamento da função createFoodCardItem


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm"); // foodForm guarda o form que tem como id foodForm

foodForm.onsubmit = function (event) { //criando função para o submit do formulário
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault(); // prevenindo o evento de submit do formulário, caso ele não seja preenchido 

  let newFood = Object.fromEntries(new FormData(foodForm)); // guarda os dados do formulário como um objeto json
  foodsModel.create(newFood); // adicionando os dados do formulário no localStorage

  const foodCard = createFoodCardItem(newFood); // foodCard guarda os cards criados na função createFoodCardItem
  let itensCardapio = document.getElementById("itens-cardapio"); // itensCardapio guarda a div que tem como id itens-cardapio
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);  // colocando os cards do cardapio dentro da div que tem como classe "itens-cardapio",
  // a função insertAdjacentHTML serve para inserir algo em uma posição especificada
} // fechamento da função foodForm.onsubmit

initFoodsCard(); // chamada da função initFoodsCard