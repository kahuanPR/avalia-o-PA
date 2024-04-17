var images = [
    "/imagens/360_F_336560111_rhfyACfqM4ypNf9nvgUg6jutXaCahqjP.jpg",
    "/imagens/curitiba-brazil-parks-city-wallpaper-preview.jpg",
    "/imagens/360_F_390243566_avPbARjIPT71wdFCYmG2siTyzv8ToCSE.jpg",
    "/imagens/aniversario-da-cidade-VH-arquivo-2.webp",
    "/imagens/brazil-foz-do-iguacu-iguacu-iguassu.jpg"
];
// Lista de destinos sugeridos
var suggestedDestinations = [
"Maringá",
"Londrina",
"Curitiba",
"Ilha do Mel",
"Foz do Iguaçu"
];

// Função para exibir as sugestões de destinos
function showDestinationSuggestions(input) {
var inputValue = input.value.trim().toLowerCase();
var suggestions = suggestedDestinations.filter(function(destination) {
return destination.toLowerCase().startsWith(inputValue);
});

var suggestionsContainer = document.getElementById("destination-suggestions");
suggestionsContainer.innerHTML = ""; // Limpa o conteúdo anterior

// Exibe até 5 sugestões
for (var i = 0; i < Math.min(suggestions.length, 5); i++) {
var suggestion = suggestions[i];
var suggestionElement = document.createElement("div");
suggestionElement.textContent = suggestion;
suggestionElement.classList.add("destination-suggestion");
suggestionsContainer.appendChild(suggestionElement);
}

// Mostra o contêiner de sugestões
suggestionsContainer.style.display = suggestions.length > 0 ? "block" : "none";
}

// Ouvinte de evento de clique para o texto "Para onde você vai?"
function showDestinationInput() {
// Exibe o campo de entrada de texto
var destinationInput = document.getElementById("destination-search-input");
destinationInput.style.display = "inline-block";
destinationInput.focus(); // Foca no campo de entrada de texto
}

// Ouvinte de evento de entrada de texto para o campo de pesquisa
document.getElementById("destination-search-input").addEventListener("input", function() {
showDestinationSuggestions(this);
});

// Ouvinte de evento de clique para as sugestões de destino
document.addEventListener("click", function(e) {
var target = e.target;
if (target.classList.contains("destination-suggestion")) {
var destination = target.textContent;
// Faça algo com o destino selecionado, como preencher o campo de pesquisa ou redirecionar para uma página de destino
document.getElementById("destination-search-input").value = destination;
// Oculta o contêiner de sugestões
document.getElementById("destination-suggestions").style.display = "none";
}
});
function toggleDestinationSearch() {
var destinationSearch = document.getElementById('destination-search-input');
var suggestionBox = document.getElementById('destination-suggestions');

if (destinationSearch.style.display === 'block') {
destinationSearch.style.display = 'none';
suggestionBox.style.display = 'none';
} else {
destinationSearch.style.display = 'block';
suggestionBox.style.display = 'block';
}
}




$(function() {
  // Variáveis para armazenar as datas de check-in e check-out
  var checkinDate = null;
  var checkoutDate = null;

  // Função para mostrar a data selecionada no formato desejado (dia e mês)
  function showSelectedDates() {
      // Atualiza as variáveis de check-in e check-out
      checkinDate = $("#checkin-datepicker").datepicker("getDate");
      checkoutDate = $("#checkout-datepicker").datepicker("getDate");

      // Verifica se ambas as datas foram selecionadas
      if (checkinDate && checkoutDate) {
          // Formata as datas no formato desejado (dia e mês)
          var options = { day: 'numeric', month: 'short'};
          var formattedCheckinDate = checkinDate.toLocaleDateString('pt-BR', options);
          var formattedCheckoutDate = checkoutDate.toLocaleDateString('pt-BR', options);

          // Atualiza o conteúdo do elemento "Checkin-Checkout" com as datas selecionadas
          var checkinCheckoutElement = document.querySelector('.nav-link.active');
          checkinCheckoutElement.innerText = formattedCheckinDate + ' - ' + formattedCheckoutDate;
          
          // Esconde o seletor de datas após selecionar as datas de check-in e check-out
          $('#datepicker-container').hide();
      }
  }

  // Configuração do Datepicker para check-in
  $("#checkin-datepicker").datepicker({
      minDate: 0, // Não permite datas anteriores à data atual
      onSelect: function(date) {
          // Define a data de check-in
          checkinDate = new Date(date);
          
          // Exibe o seletor de datas de check-out
          $("#checkout-datepicker").datepicker("show");
      },
      dateFormat: 'dd/mm/yy', // Formato de data
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], // Nomes dos dias da semana abreviados
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Nomes dos meses
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] // Nomes dos meses abreviados
  });

  // Configuração do Datepicker para check-out
  $("#checkout-datepicker").datepicker({
      minDate: 1, // Não permite datas anteriores ao dia seguinte ao check-in
      onSelect: showSelectedDates, // Chama a função para mostrar as datas selecionadas
      dateFormat: 'dd/mm/yy', // Formato de data
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], // Nomes dos dias da semana abreviados
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Nomes dos meses
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] // Nomes dos meses abreviados
  });

  // Adiciona um ouvinte de evento de clique ao elemento "Checkin-Checkout" para alternar a visibilidade do seletor de datas
  $('.nav-link.active').click(function() {
      $('#datepicker-container').toggle(); // Exibe ou oculta o seletor de datas
  });
});

function showSelectionOptions() {
var selectionOptions = document.getElementById('selection-options');
var isActive = selectionOptions.style.display === 'block';

// Mostra ou oculta as opções de seleção
if (isActive) {
    selectionOptions.style.display = 'none';
} else {
    selectionOptions.style.display = 'block';
}
}

// Ouvinte de evento de alteração para o campo de seleção de crianças
document.getElementById('children').addEventListener('change', function() {
var childAgeSelection = document.getElementById('child-age-selection');
var childAgeSelect = document.getElementById('child-age');

// Verifica se há crianças selecionadas
if (parseInt(this.value) > 0) {
    childAgeSelection.style.display = 'block'; // Mostra a seleção de idade da criança
    childAgeSelect.selectedIndex = 0; // Redefine a seleção de idade da criança para 0 anos
} else {
    childAgeSelection.style.display = 'none'; // Oculta a seleção de idade da criança
}
});
var map = L.map('map').setView([-25.4284, -49.2733], 10); // Coordenadas para Curitiba como centro inicial e zoom 10

        // Adiciona camada de mapa OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Função para obter dados meteorológicos do Tomorrow.io para as coordenadas especificadas
        function getWeatherData(latitude, longitude) {
            var apiKey = 'qMeFokO16InmQlCRDsOOxt55v9DC4C6l'; // Substitua pela sua chave de API do Tomorrow.io
            var url = 'https://api.tomorrow.io/v4/timelines?location=' + latitude + ',' + longitude + '&fields=temperature,weatherCode,windSpeed,precipitationIntensity&units=metric&timesteps=current&apikey=' + apiKey;
        
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao obter dados meteorológicos: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    // Verifica se os dados esperados estão presentes na resposta da API
                    if (data && data.data && data.data.timelines && data.data.timelines.length > 0 && data.data.timelines[0].intervals && data.data.timelines[0].intervals.length > 0) {
                        // Extrai os dados meteorológicos
                        var weatherData = {
                            temperature: data.data.timelines[0].intervals[0].values.temperature,
                            weatherCode: data.data.timelines[0].intervals[0].values.weatherCode,
                            windSpeed: data.data.timelines[0].intervals[0].values.windSpeed,
                            precipitationIntensity: data.data.timelines[0].intervals[0].values.precipitationIntensity
                        };
        
                        // Adiciona marcador ao mapa com informações meteorológicas
                        L.marker([latitude, longitude]).addTo(map)
                            .bindPopup('<b>Temperatura:</b> ' + weatherData.temperature + '°C<br>' +
                                       '<b>Código do Tempo:</b> ' + weatherData.weatherCode + '<br>' +
                                       '<b>Velocidade do Vento:</b> ' + weatherData.windSpeed + 'm/s<br>' +
                                       '<b>Intensidade da Precipitação:</b> ' + weatherData.precipitationIntensity + 'mm/h')
                            .openPopup();
                    } else {
                        console.error('Erro ao obter dados meteorológicos: Dados ausentes na resposta da API');
                    }
                })
                .catch(error => console.error('Erro ao obter dados meteorológicos:', error));
        }
        
        // Chama a função para obter dados meteorológicos para Curitiba
        setTimeout(function() {
            getWeatherData(-25.4284, -49.2733); 
        }, 500);
        // Adiciona marcador para Foz do Iguaçu
        setTimeout(function() {
            getWeatherData(-25.5163, -54.5854);
        }, 500);
        
        // Adiciona marcador para Londrina
        setTimeout(function() {
            getWeatherData(-23.3045, -51.1696);
        }, 500);
        
        // Adiciona marcador para Ilha do Mel
        setTimeout(function() {
            getWeatherData(-25.4905, -48.3831);
        }, 500);

     // Adiciona marcador para Maringá
         setTimeout(function() {
            getWeatherData(-23.4273, -51.9375);
        }, 500);
                        