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
        var target = button.getAttribute('data-target');
        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modal-title');
        var modalInfo = document.getElementById('modal-info');
        var modalImages = document.getElementById('modal-images');

        // Limpa o conteúdo anterior do modal
        modalTitle.textContent = '';
        modalInfo.textContent = '';
        modalImages.innerHTML = '';

        // Atualiza o título e o conteúdo do modal com base no alvo
        if (target === 'maringa') {
          modalTitle.textContent = 'Parque do Ingá';
          modalInfo.innerHTML = '<strong>Localização:</strong> <a href="https://pt.wikipedia.org/wiki/Parque_do_Ing%C3%A1" target="_blank">Maringá, Paraná, Brasil</a><br><strong>O que fazer:</strong> Visitar o Parque do Ingá, explorar o centro da cidade, experimentar a culinária local<br><strong>Preço:</strong> Variável';
          addImagesToModal([
              'https://www.maringa.pr.gov.br/sistema/imagens/gd_941cb392966f.png',
              'https://embraed-empreendimentos.s3.sa-east-1.amazonaws.com/uploaded_files/2021/06/241-mgl5110-fullhd-1920x1080-h9ewb.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/6/6b/Parque_do_Ing%C3%A1_Prefeito_Adriano_Jos%C3%A9_Valente%2C_Maring%C3%A1%2C_Paran%C3%A1.jpg',
              'https://www.maringa.pr.gov.br/sistema/imagens/gd_db6bf0593531.jpeg',
              'https://www.hojemais.com.br/imagem/noticia/1000/1000/1701633760_55347.jpeg'
          ], modalImages);
        } else if (target === 'curitiba') {
          modalTitle.textContent = 'Jardim Botânico';
          modalInfo.innerHTML = '<strong>Localização:</strong> <a href="https://pt.wikipedia.org/wiki/Jardim_Bot%C3%A2nico_de_Curitiba" target="_blank">Curitiba, Paraná, Brasil</a><br><strong>O que fazer:</strong> Visitar o Jardim Botânico, explorar o centro histórico, conhecer o Museu Oscar Niemeyer<br><strong>Preço:</strong> Variável';
          addImagesToModal([
              'https://catracalivre.com.br/wp-content/uploads/2018/08/cidades-mais-baratas-viajar-feriado-7-de-setembro.jpg',
              'https://www.vamostrilhar.com.br/wp-content/uploads/2023/06/Conheca-tudo-sobre-o-Jardim-Botanico-de-Curitiba-PR-Vamos-Trilhar.webp',
              'https://viagemcult.com/wp-content/uploads/jardim-botanico3-curitiba.jpg',
              'https://mid.curitiba.pr.gov.br/2022/00358545.jpg',
              'https://mid.curitiba.pr.gov.br/2021/00310996.jpg'
          ], modalImages);
        } else if (target === 'ilha-do-mel') {
          modalTitle.textContent = 'Gruta das Encantadas';
          modalInfo.innerHTML = '<strong>Localização:</strong> <a href="https://pt.wikipedia.org/wiki/Ilha_do_Mel" target="_blank">Ilha do Mel, Paraná, Brasil</a><br><strong>O que fazer:</strong> Visitar a Gruta das Encantadas, fazer trilhas pela natureza, relaxar nas praias<br><strong>Preço:</strong> Variável';
          addImagesToModal([
              'https://lh3.googleusercontent.com/proxy/Cf6LqeHhnTmoSoLAGYrLX8BHy-3XibOWnTI94l-KwYwWoqo_KqiDim3msq5dWWrbmAWs5hM0oMWOK18Gy2yj4fDFPItVDNXFKQvub0i5JRDolP52C1WBTnKWnMOwsBnuGsw1mPQN697xTnOjZQ',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFhEu7wD9h-VTiRVRbcWf6KFoecOk3nKjG0g3vG41AA&s',
              'https://5ddbfd6c42062205f076cdb4.redesign.static-01.com/l/images/d1e87e7483faabd27829df77cd4ad29276755633.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/07/43/c5/90/ilha-do-mel.jpg',
              'https://lh4.googleusercontent.com/proxy/OwFIsFBBmOINKVNKvruZMlrwjnGKG3TVJeX2XsfloqkxPcqMjsMT7NBxHOwCf9TRFLLI8Pt1UUSGwFGz2iTe9aCB8Futc3lKdty3otXC4igCPQBBLQ4ItLI7_RnEE4o59w'
          ], modalImages);
        } else if (target === 'foz-de-iguacu') {
          modalTitle.textContent = 'Cataratas do Iguaçu';
          modalInfo.innerHTML = '<strong>Localização:</strong> <a href="https://pt.wikipedia.org/wiki/Cataratas_do_Igua%C3%A7u" target="_blank">Foz de Iguaçu, Paraná, Brasil</a><br><strong>O que fazer:</strong> Conhecer as Cataratas do Iguaçu, visitar o Parque das Aves, explorar a usina hidrelétrica de Itaipu<br><strong>Preço:</strong> Variável';
          addImagesToModal([
              'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/05/cataratas.jpg?w=1220&h=674&crop=1',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0R--EWU47IENIEmCFSk65DYhhd3Yjlc8X2UQrs8mnQ&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVptexz0h__gt_l8bfD_SjApKGnQum33FhaPeoU9k3g&s',
              'https://www.anvtravel.com.br/wp-content/uploads/2021/11/Cataratas-do-Iguacu-5.png',
              'https://s3.static.brasilescola.uol.com.br/be/2022/10/cataratas-iguacu.jpg'
          ], modalImages);
        } else if (target === 'londrina') {
          modalTitle.textContent = 'Lago Igapó';
          modalInfo.innerHTML = '<strong>Localização:</strong> <a href="https://pt.wikipedia.org/wiki/Londrina" target="_blank">Londrina, Paraná, Brasil</a><br><strong>O que fazer:</strong> Visitar o Lago Igapó, explorar o Museu Histórico de Londrina, conhecer o zoológico<br><strong>Preço:</strong> Variável';
          addImagesToModal([
              'https://i2.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2023/09-setembro/15.09.23/aterro-Lago-Igapo-gramado-quadras-volei-Emerson-Dias-1.jpg?resize=1170%2C610&ssl=1',
              'https://i.pinimg.com/originals/d2/18/11/d21811f77d099cd332ffa42078181f68.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/05/f4/9c/dd/lago-igapo.jpg',
              'https://www.londrinatur.com.br/wp-content/uploads/2018/06/ad11900f72c4ed3c24d5b6d955e258aa.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmX5wGk0k298E2xZKPZmg5-YF9ghZ-cEHnKzKuZsPo582y5Pzr1vdYByHG4rzsH9whlvU&usqp=CAU'
          ], modalImages);
        }
        
        modal.style.display = 'block';
    };
});

// Função para adicionar várias imagens ao modal com tamanho específico
function addImagesToModal(imageUrls, modalImages) {
  imageUrls.forEach(function(url) {
      var image = new Image();
      image.src = url;
      image.width = 300; 
      image.height = 300; 
      modalImages.appendChild(image);
  });
}


// Adiciona funcionalidade para passar as imagens
var prevButton = document.querySelector('.prev-img');
var nextButton = document.querySelector('.next-img');
var modalImages = document.getElementById('modal-images');
var images = modalImages.querySelectorAll('img');
var currentImageIndex = 0;

prevButton.addEventListener('click', function() {
    if (currentImageIndex > 0) {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex--;
        images[currentImageIndex].style.display = 'block';
    }
});

nextButton.addEventListener('click', function() {
    if (currentImageIndex < images.length - 1) {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex++;
        images[currentImageIndex].style.display = 'block';
    }
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

