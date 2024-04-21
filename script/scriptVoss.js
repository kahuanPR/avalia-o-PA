document.addEventListener('DOMContentLoaded', function () {
    const detalhesButtons = document.querySelectorAll('.ver-detalhes');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const tempoVooSpan = document.getElementById('tempoVoo');
    const precoSpan = document.getElementById('preco');

    detalhesButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tempoVoo = button.getAttribute('data-tempo-voo');
            const preco = button.getAttribute('data-preco');
            
            // Atualiza o conteúdo da caixa de diálogo com as informações do voo
            tempoVooSpan.textContent = tempoVoo;
            precoSpan.textContent = preco;

            // Mostra a caixa de diálogo
            overlay.style.display = 'flex';
        });
    });

    // Fecha a caixa de diálogo quando o botão de fechar é clicado
    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
function mostrarOferta(regiao) {
    let promoText = '';

    switch (regiao) {
        case 'Curitiba':
            promoText = "Oferta Especial! Reserve agora e ganhe 20% de desconto em hospedagem em Curitiba.";
            break;
        case 'Maringá':
            promoText = "Promoção Imperdível! Reserve agora e ganhe um passeio grátis pelos parques de Maringá.";
            break;
        case 'Londrina':
            promoText = "Desconto Exclusivo! Reserve agora e receba um voucher de R$ 50 para um restaurante em Londrina.";
            break;
        case 'Foz do Iguaçu':
            promoText = "Oferta Especial! Reserve agora e ganhe um passeio de barco nas Cataratas do Iguaçu.";
            break;
        case 'Ilha do Mel':
            promoText = "Oferta Limitada! Reserve agora e ganhe um upgrade gratuito para classe executiva.";
            break;
        default:
            promoText = "Oferta exclusiva para esta região! Reserve agora e aproveite.";
    }

    document.getElementById('promoText').textContent = promoText;
    document.getElementById('promoDialog').style.display = 'block';
}

function fecharPromoDialog() {
    document.getElementById('promoDialog').style.display = 'none';
}
