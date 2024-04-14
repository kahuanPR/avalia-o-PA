var images = [
];
var currentIndex = 0;
var imageElement = document.getElementById('current-image');
var checkinDate = null;
var checkoutDate = null;

function showImage(index) {
    if (index >= 0 && index < images.length) {
        imageElement.src = images[index];
        currentIndex = index;
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function showChildAgeInput() {
  var childrenCount = parseInt(document.getElementById('children').value);
  if (childrenCount > 0) {
    document.getElementById('child-age-input').style.display = 'block';
  } else {
    document.getElementById('child-age-input').style.display = 'none';
  }
}

function showSelectionOptions() {
  var selectionOptions = document.getElementById('selection-options');
  if (selectionOptions.style.display === 'block') {
    selectionOptions.style.display = 'none';
  } else {
    selectionOptions.style.display = 'block';
  }
}

function showDestinationsCard() {
  var destinationsCard = document.getElementById('destinations-card');
  if (destinationsCard.style.display === 'block') {
    destinationsCard.style.display = 'none';
  } else {
    destinationsCard.style.display = 'block';
  }
}

function showDatePicker(datepickerId) {
    var container = document.getElementById('datepicker-container');
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}
$(function() {
    // Configuração do Datepicker para check-in
    $("#checkin-datepicker").datepicker({
        minDate: 0, // Não permite datas anteriores à data atual
        onSelect: function(selectedDate) {
            var minDate = $(this).datepicker('getDate'); // Obtém a data selecionada
            minDate.setDate(minDate.getDate() + 1); // Adiciona um dia para definir a data mínima para check-out
            $("#checkout-datepicker").datepicker('option', 'minDate', minDate);
        }
    });

    // Configuração do Datepicker para check-out
    $("#checkout-datepicker").datepicker({
        minDate: 1, // Não permite datas anteriores ao dia seguinte ao check-in
        onSelect: function(selectedDate) {
            var maxDate = $(this).datepicker('getDate'); // Obtém a data selecionada
            maxDate.setDate(maxDate.getDate() - 1); // Subtrai um dia para definir a data máxima para check-in
            $("#checkin-datepicker").datepicker('option', 'maxDate', maxDate);
        }
    });
});
