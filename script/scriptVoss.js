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