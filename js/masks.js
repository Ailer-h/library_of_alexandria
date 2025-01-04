function letters_js(valor, input){

    valor = valor.toString();
    valor = valor.replace(/[^a-zA-Z\s]/g,"");

    document.getElementById(input.id).value = valor;

}