// Função para simular a pesquisa de voos
function searchFlights() {
    // Simular busca de voos e exibir resultados
    alert('Buscando voos...');
}

// Adicionando evento de clique ao botão de pesquisa
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    searchFlights();
});

// Função para exibir detalhes de um voo quando clicado
function showFlightDetails(flightId) {
    // Simular exibição de detalhes do voo
    alert('Detalhes do voo ' + flightId);
}

// Adicionando evento de clique aos botões de detalhes de voo
document.querySelectorAll('.flight-details-button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        var flightId = event.target.getAttribute('data-flight-id');
        showFlightDetails(flightId);
    });
});
