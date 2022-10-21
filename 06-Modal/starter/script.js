'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelectorAll seleciona todos os elementos/classes/ids.
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Função que abre a janela de exibição.
const openModel = () => {
  // Usamos o método classList seguido de uma propriedade.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Percorremos a lista de classes e usamos um eventListener para quando clicarmos no botão.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

// A função closeModal adiciona a classe hidden nas duas variáveis abaixo.
const closeModal = () => {
  // Adicionamos a classe hidden em cada elemento html.
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Adiciona a classe hidden, removendo a janela de fundo.
btnCloseModal.addEventListener('click', closeModal);
// Permite fechar a janela quando clicamos fora da janela.
overlay.addEventListener('click', closeModal);

// Adicionando a funcionalidade ESC para fechar a janela.

// Aplicamos o evento a nível global.
document.addEventListener('keydown', event => {
  // Trabalhamos com três possiveis condições para a tecla ESC.
  if (event.key === 'Escape' || event.key == 27 || event.key === 'Esc') {
    // Analisamos se a classe hidden ja existe. Caso não exista chamamos a função closeModal.
    if (!modal.classList.contains('hidden')) {
      // Chamamos a função closeModal e colocamos o display como sendo none.
      closeModal();
    }
  }
});
