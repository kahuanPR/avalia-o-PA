const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  },
);

$prev.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  },
)

// Seleciona os botões "Mais sobre"
var buttons = document.querySelectorAll('.button-mais-sobre');

// Adiciona um evento de clique a cada botão "Mais sobre"
buttons.forEach(function(button) {
  button.onclick = function() {
    // Obtém o alvo de dados do botão clicado
    var target = button.getAttribute('data-target');

    // Seleciona o modal
    var modal = document.getElementById('modal');

    // Seleciona o título e o conteúdo do modal
    var modalTitle = document.getElementById('modal-title');
    var modalInfo = document.getElementById('modal-info');

    // Atualiza o título e o conteúdo do modal com base no alvo
    if (target === 'maringa') {
      modalTitle.textContent = 'Maringá';
      modalInfo.textContent = 'Localização: Maringá, Paraná, Brasil\nO que fazer: Visitar o Parque do Ingá, explorar o centro da cidade, experimentar a culinária local\nPreço: Variável';
    } else if (target === 'curitiba') {
      modalTitle.textContent = 'Curitiba';
      modalInfo.textContent = 'Localização: Curitiba, Paraná, Brasil\nO que fazer: Visitar o Jardim Botânico, explorar o centro histórico, conhecer o Museu Oscar Niemeyer\nPreço: Variável';
    } else if (target === 'ilha-do-mel') {
      modalTitle.textContent = 'Ilha do Mel';
      modalInfo.textContent = 'Localização: Ilha do Mel, Paraná, Brasil\nO que fazer: Visitar a Gruta das Encantadas, fazer trilhas pela natureza, relaxar nas praias\nPreço: Variável';
    } else if (target === 'foz-de-iguacu') {
      modalTitle.textContent = 'Foz de Iguaçu';
      modalInfo.textContent = 'Localização: Foz de Iguaçu, Paraná, Brasil\nO que fazer: Conhecer as Cataratas do Iguaçu, visitar o Parque das Aves, explorar a usina hidrelétrica de Itaipu\nPreço: Variável';
    } else if (target === 'londrina') {
      modalTitle.textContent = 'Londrina';
      modalInfo.textContent = 'Localização: Londrina, Paraná, Brasil\nO que fazer: Visitar o Lago Igapó, explorar o Museu Histórico de Londrina, conhecer o zoológico\nPreço: Variável';
    }

    // Exibe o modal
    modal.style.display = 'block';
  };
});

// Seleciona o botão de fechar do modal
var closeButton = document.querySelector('.close');

// Seleciona o modal
var modal = document.getElementById('modal');

// Fecha o modal quando o usuário clica no botão de fechar
closeButton.onclick = function() {
  modal.style.display = 'none';
};

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
