document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.gambaBlanca, .gambaRoja, .gambaCocida, .cigalaHuelva, .cigalaCoruña, .langostinoCocido, .langostinoCongelado, .carabineroCongelado');

    divs.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#333';
            // Cambiar el color del texto a blanco para todas las etiquetas <p>
            var paragraphs = this.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = '#fff';
            });
        });

        div.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#ccc';
            // Restaurar el color original del texto para todas las etiquetas <p>
            var paragraphs = this.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = ''; // Esto restablece el color a su valor original
            });
        });
    });
});
