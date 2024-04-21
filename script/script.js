    // Função para exibir as sugestões de destino
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

    // Função para alternar a visibilidade do campo de pesquisa de destino
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

    // Configuração dos Datepickers para check-in e check-out
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

    // Função para mostrar as opções de seleção de idade das crianças
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

        if (parseInt(this.value) > 0) {
            childAgeSelection.style.display = 'block';
            childAgeSelect.selectedIndex = 0;
        } else {
            childAgeSelection.style.display = 'none';
        }
    });

    var map = L.map('map').setView([-25.4284, -49.2733], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var locations = [
        { name: "Maringá", coordinates: [-23.4329, -51.9332] },
        { name: "Londrina", coordinates: [-23.3103, -51.1628] },
        { name: "Foz de Iguaçu", coordinates: [-25.5161, -54.5856] },
        { name: "Curitiba", coordinates: [-25.4284, -49.2733] },
        { name: "Ilha do Mel", coordinates: [-25.4815, -48.3429] }
    ];

    // Função para obter os dados meteorológicos para uma localização específica
    function getWeatherData(location) {
        var apiKey = 'qMeFokO16InmQlCRDsOOxt55v9DC4C6l';
        var url = 'https://api.tomorrow.io/v4/timelines?location=' + location.coordinates[0] + ',' + location.coordinates[1] + '&fields=temperature,weatherCode,windSpeed,precipitationIntensity&units=metric&timesteps=current&apikey=' + apiKey;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao obter dados meteorológicos: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data && data.data.timelines && data.data.timelines.length > 0 && data.data.timelines[0].intervals && data.data.timelines[0].intervals.length > 0) {
                    var weatherData = {
                        temperature: data.data.timelines[0].intervals[0].values.temperature,
                        weatherCode: data.data.timelines[0].intervals[0].values.weatherCode,
                        windSpeed: data.data.timelines[0].intervals[0].values.windSpeed,
                        precipitationIntensity: data.data.timelines[0].intervals[0].values.precipitationIntensity
                    };

                    // Adicionar marcador ao mapa
                    var marker = L.marker(location.coordinates).addTo(map)
                        .bindPopup('<b>Localização:</b> ' + location.name + '<br>' +
                                '<b>Temperatura:</b> ' + weatherData.temperature + '°C<br>' +
                                '<b>Código do Tempo:</b> ' + weatherData.weatherCode + '<br>' +
                                '<b>Velocidade do Vento:</b> ' + weatherData.windSpeed + 'm/s<br>' +
                                '<b>Intensidade da Precipitação:</b> ' + weatherData.precipitationIntensity + 'mm/h')
                        .openPopup();

                    // Atualizar o mapa para incluir o novo marcador
                    map.fitBounds(marker.getBounds());
                } else {
                    console.error('Erro ao obter dados meteorológicos para ' + location.name + ': Dados ausentes na resposta da API');
                }
            })
            .catch(error => console.error('Erro ao obter dados meteorológicos para ' + location.name + ':', error));
    }

    // Função para obter dados meteorológicos para todas as localizações com um intervalo de 1 minuto entre as solicitações
    function getWeatherForLocationsWithDelay(locations, delay) {
        var currentDelay = 0;
        locations.forEach(function(location) {
            setTimeout(function() {
                getWeatherData(location);
            }, currentDelay);
            currentDelay += delay;
        });
    }

    // Chamada da função para obter dados meteorológicos para todas as localizações com um intervalo de 1 minuto entre as solicitações
    getWeatherForLocationsWithDelay(locations, 60000); // 1 minuto = 60000 milissegundos

    var hotelsData = {
        "Maringá": [
            { name: "Hotel Thomasi Expres", price: "R$229", location: "<a href='https://maps.app.goo.gl/mojqYsuMMyVYhJgd7' target='_blank'>Hotel Thomasi Expres, Maringá, Paraná</a>" },
            { name: "Hotel GAPH Maringá - Econômico Mini Resort", price: "$", location: "<a href='https://maps.app.goo.gl/WVyW92SXDSiWqYAcA' target='_blank'>Hotel GAPH Maringá - Econômico Mini Resort, Maringá, Paraná</a>" },
            { name: "Hotel Avalon Maringá Econômico", price: "$90", location: "<a href='https://maps.app.goo.gl/FpbaPnWPJT5mFkj77' target='_blank'>Hotel Avalon Maringá Econômico, Maringá, Paraná</a>" },
            { name: "Hotel Deville Business Maringá", price: "$150", location: "<a href='https://maps.app.goo.gl/846bNyhS2ME9pHwo7' target='_blank'>Hotel Deville Business, Maringá, Paraná</a>" },
            { name: "Maringá Aeroporto Hotel", price: "$110", location: "<a href='https://maps.app.goo.gl/axFCd5rMd24GKxuH9' target='_blank'>Maringá Aeroporto Hotel, Maringá, Paraná</a>" }
        ],
        "Curitiba": [
            { name: "Nomaa HOTEL", price: "R$1.304", location: "<a href='https://maps.app.goo.gl/EwS2mdQXyP5ENJYX6' target='_blank'>Nomaa HOTEL, Curitiba</a>" },
            { name: "Hotel Deville Curitiba Batel", price: "R$277", location: "<a href='https://maps.app.goo.gl/Fcia2tEqmcvuJQqMA' target='_blank'>Hotel Deville Curitiba Batel, Curitiba, Paraná</a>" },
            { name: "Qoya Hotel Curitiba, Curio Collection by Hilton", price: "R$833", location: "<a href='https://maps.app.goo.gl/gGEwGoRZ4d5Tsa8AA' target='_blank'>Qoya Hotel Curitiba, Curio Collection by Hilton, Curitiba, Paraná</a>" },
            { name: "Radisson Hotel Curitiba", price: "R$626", location: "<a href='https://maps.app.goo.gl/EM7kh4jCeGhT7tJ9A' target='_blank'>Radisson Hotel Curitiba, Curitiba, Paraná</a>" },
            { name: "Bourbon Curitiba Hotel & Suites", price: "R$505", location: "<a href='https://maps.app.goo.gl/zHkTvTewUJvmGYSp7' target='_blank'>Bourbon Curitiba Hotel & Suites, Curitiba, Paraná</a>" },
        ],
        "Londrina": [
            { name: "Bourbon Londrina Hotel", price: "R$256", location: "<a href='https://maps.app.goo.gl/xNhMaemEsQCmTohJ6' target='_blank'>Bourbon Londrina Hotel, Londrina, Paraná</a>" },
            { name: "Blue Tree Premium Londrina", price: "R$253", location: "<a href='https://maps.app.goo.gl/VtjyAWiWmfJVReZJ7' target='_blank'>Blue Tree Premium Londrina, Londrina, Paraná</a>" },
            { name: "Boulevard Residence Hotel", price: "R$388", location: "<a href='https://maps.app.goo.gl/hRCkATKpcAqKrRyx9' target='_blank'>Boulevard Residence Hotel, Londrina, Paraná</a>" },
            { name: "Comfort Suites Londrina", price: "R$302", location: "<a href='https://maps.app.goo.gl/HE2cfkhZ2xYR9LYd7' target='_blank'>Comfort Suites Londrina, Londrina, Paraná</a>" },
            { name: "Golden Blue Hotel", price: "R$238", location: "<a href='https://maps.app.goo.gl/5FQLUieBHUKqEJAU6' target='_blank'>Golden Blue Hotel, Londrina, Paraná</a>" }
        ],
        "Ilha do Mel": [
            { name: "Pousada Ilha do Mel Lodges", price: "R$1.193", location: "<a href='https://maps.app.goo.gl/v4KF8WfpK6eYjMZD8' target='_blank'>Pousada Ilha do Mel Lodges, Ilha do Mel, Paraná</a>" },
            { name: "Bossa Beach House", price: "R$557", location: "<a href='https://maps.app.goo.gl/FfEeiv6tWQPS3MQ78' target='_blank'>Bossa Beach House,  Ilha do Mel, Paraná</a>" },
            { name: "Grajagan Surf Resort", price: "R$761", location: "<a href='https://maps.app.goo.gl/itzjYir2rRXXL1CU7' target='_blank'>Grajagan Surf Resort,  Ilha do Mel, Paraná</a>" },
            { name: "Pousada Praia do Farol", price: "R$620", location: "<a href='https://maps.app.goo.gl/aoRJYg5k25HEZHVg6' target='_blank'>Pousada Praia do Farol,  Ilha do Mel, Paraná</a>" },
            { name: "Pousada Treze Luas", price: "R$793", location: "<a href='https://maps.app.goo.gl/bMF5oDsHk5C5k7RHA' target='_blank'>Pousada Treze Luas,  Ilha do Mel, Paraná</a>" }
        ],
        "Foz de Iguaçu": [
            { name: "Recanto Cataratas Thermas Resort & Convention", price: "R$412", location: "<a href='https://maps.app.goo.gl/87pnQtgULJiSrHhr8' target='_blank'>Recanto Cataratas Thermas Resort & Convention, Foz de Iguaçu, Paraná</a>" },
            { name: "DoubleTree by Hilton Foz do Iguacu Brazil", price: "R$553", location: "<a href='https://maps.app.goo.gl/CcMWVwobH6aRNBeK8' target='_blank'>DoubleTree by Hilton Foz do Iguacu Brazil, Foz de Iguaçu, Paraná</a>" },
            { name: "Hotel Viale Cataratas", price: "R$354", location: "<a href='https://maps.app.goo.gl/FecupSATrX2TW8x7A' target='_blank'>Hotel Viale Cataratas, Foz de Iguaçu, Paraná</a>" },
            { name: "Rafain Palace Hotel & Convention", price: "R$245", location: "<a href='https://maps.app.goo.gl/5PnTFrZgbuTbGtzo8' target='_blank'>Rafain Palace Hotel & Convention, Foz de Iguaçu, Paraná</a>" },
            { name: "Grand Carimã Resort & Convention Center", price: "R$318", location: "<a href='https://maps.app.goo.gl/Gg4it66hjC2tHhGT7' target='_blank'>Grand Carimã Resort & Convention Center, Foz de Iguaçu, Paraná</a>" }
        ]
    };
    function showHotels(region) {
        var modal = document.getElementById("modal");
        var regionTitle = document.getElementById("region-title");
        regionTitle.innerHTML;

        
        var hotels = hotelsData[region];
        var modalContent = document.querySelector(".modal-content");
        modalContent.innerHTML = ""; // Limpa o conteúdo anterior do modal
        
        // Adiciona o botão Fechar
        var closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.textContent = "Fechar";
        closeButton.onclick = closeModal;
        modalContent.appendChild(closeButton);
        
        // Adiciona informações dos hotéis ao modal
        hotels.forEach(function(hotel, index) {
            var hotelInfo = document.createElement("p");
            hotelInfo.innerHTML = (index + 1) + ". <strong>" + hotel.name + "</strong> - Preço: " + hotel.price + " - Localização: " + hotel.location;
            modalContent.appendChild(hotelInfo);
        });
        
        modal.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
        
        // Limpa o conteúdo do modal
        var modalContent = document.querySelector(".modal-content");
        modalContent.innerHTML = "";
    }
