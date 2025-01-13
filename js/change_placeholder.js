function clean_file(id_input, id_thumbnail){

    document.getElementById(id_input).value = null;

    $("#" + id_thumbnail).parent().css("border", ".1em dashed var(--text-colour-secondary)")
    $("#" + id_thumbnail).parent().children().not('img').show()
    $("#" + id_thumbnail).parent().children('img').hide()
    $('#cancel').hide();

}

function change_placeholder(id_input, id_thumbnail){

    let fileInput = document.getElementById(id_input); 

    let file = fileInput.files[0];

    if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', function(){
            document.getElementById(id_thumbnail).style.display = "block";
            document.getElementById(id_thumbnail).src = this.result;
        })
    }

    //Cleans everything that isn't image
    $("#" + id_thumbnail).parent().css("border", "none")
    $("#" + id_thumbnail).parent().children().not('img').hide()
    $('#cancel').css('display', 'flex');

}

document.getElementById('cancel').addEventListener("mouseenter", function(){
    $("input:file").prop('disabled', true)
})

document.getElementById('cancel').addEventListener("mouseleave", function(){
    $("input:file").prop('disabled', false)
})