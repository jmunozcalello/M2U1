function actualizarContador() {
    var maxCaracteres = 150; // Cambia el número máximo de caracteres permitidos
    var texto = document.getElementById("miTexto").value;
    var contadorElemento = document.getElementById("contador");
    var caracteresRestantes = maxCaracteres - texto.length;
    contadorElemento.textContent = caracteresRestantes;}