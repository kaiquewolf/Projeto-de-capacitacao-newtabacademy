function testaFormulario(e) {
    // e.preventDefault();
    var Valor = /[^0-9]+/g;
    var Mercadoria = /[^A-z]+/g;
    var numValor = document.getElementById("valor-input").value
    var nome = document.getElementById("nm-merca").value
    if (Mercadoria.test(nome)) {
        alert('Este não é um nome válido!')
    };

    if (Valor.test(numValor)){
        alert ('Este Valor é inválido!')
    }
}