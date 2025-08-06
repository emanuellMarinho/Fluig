function validateForm(form) {
    var arr = new Array("cep", "logradouro", "bairro", "cidade", "estado", "nome", "email", "telefone", "documentoIdentidade", "dataNascimento");

    for (var i = 0; i < arr.length; i++) {
    	var campo = arr[i];
        if (form.getValue(campo) == "") {
        	throw '\n\n Atenção! \n\n O preenchimento do campo ' + campo + ' é obrigatório. \n\n';
        }
    }
}