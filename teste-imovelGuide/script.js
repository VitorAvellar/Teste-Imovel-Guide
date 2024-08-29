function mostrarTelefone(id) {
    var telefone = document.getElementById(id);
    telefone.style.display = 'block';
}

function mascaraCPF(input) {
    let valorCpf = input.value;

    valorCpf = valorCpf.replace(/\D/g, "");

    valorCpf = valorCpf.replace(/(\d{3})(\d)/, "$1.$2");
    valorCpf = valorCpf.replace(/(\d{3})(\d)/, "$1.$2");
    valorCpf = valorCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    input.value = valorCpf
}

function mascaraTel(input){

    let valorTel = input.value;

    valorTel = valorTel.replace(/\D/g, "");
    valorTel = valorTel.replace(/^(\d{2})(\d)/g, "($1) $2");
    valorTel = valorTel.replace(/(\d{5})(\d{4})$/, "$1-$2");

    input.value = valorTel

}

function openModal() {
    $('#imageModal').modal('show');

}

function calcular() {
    
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let valor3 = parseFloat(document.getElementById('valor3').value);

    if (isNaN(valor1)|| isNaN(valor2)||isNaN(valor3)) {
        alert("ATENÇÃO, preencha todos os campos corretamente");
        return;
    }

    let resultado = (valor2 * valor3) / valor1;

    document.getElementById('resultado').value = resultado.toFixed(2);


}

document.getElementById("download").addEventListener("click", function() {
    var element = document.getElementById("capture");

    html2canvas(element).then(function(canvas) {
        var imgData = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = imgData;
        link.download = "screenshot.png";
        link.click();
    });
});

function envioAlert() {
    let cpf = document.getElementById("cpf").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (cpf === "" || phone === "") {
        alert("Preencha os campos");
    } else {
        alert("Mensagem enviada");
    }
}
