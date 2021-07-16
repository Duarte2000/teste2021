function limpar() {
    document.getElementById('formula').value = '';/*LIMPA A TEXT*/
}

function concatena(valor) {
    document.getElementById('formula').value += valor; /*CONCATENA OS VALORES*/
}

function calcular() {
    var res = 0;

    res = document.getElementById('formula').value;
    document.getElementById('formula').value = ''; /*LIMPA A TELA PARA MOSTRAR O RES!!*/
    document.getElementById('formula').value = eval(res); /*EVAL: pega o conteudo em string e faz calculo mat*/
}

$(document).ready(function () {
    $("td").click(function () {
        $("#formula").css("background-color", "#808080").css("color", "white");

        $("#posiC").click(function () {
            $("#formula").css("background-color", "white").css("color", "red");

        });
    });
});
