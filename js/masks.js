function letters_js(valor, input){

    valor = valor.toString();
    valor = valor.replace(/[^a-zA-Z\s]/g,"");

    document.getElementById(input.id).value = valor;

}

function int_js(input){

    valor = input.value.toString().replace(/\D/g,"");

    input.value = valor;

}

function limit_value(id_input, threshold){

    let input = document.getElementById(id_input);

    console.log(threshold['min'])
    console.log(input.value)
    console.log(input.value < threshold['min'])

    if(threshold['min'] == 0 && input.value == '-'){
        input.value = 0;
    }

    if(typeof threshold['min'] === 'number' && input.value < threshold['min']){
        console.log('enter')
        input.value = threshold['min'];
        return;
    }

    if(typeof threshold['max'] === 'number' && input.value > threshold['max']){
        input.value = threshold['max'];
        return;
    }

}