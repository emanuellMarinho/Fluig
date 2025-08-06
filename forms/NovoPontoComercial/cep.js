$("#cep").blur(function () {
    var cep = $("#cep").val();

    if (!cep) {
        console.warn("CEP vazio.");
        return;
    }

    $.ajax({
        url: "https://brasilapi.com.br/api/cep/v1/" + cep,
        method: "GET",
        dataType: "json",
        success: function (dados) {
            $("#logradouro").val(dados.street);
            $("#bairro").val(dados.neighborhood);
            $("#cidade").val(dados.city);
            $("#estado").val(dados.state);
        },
        error: function (e) {
            throw new Error("Error:" + e);
        }
    });
});
