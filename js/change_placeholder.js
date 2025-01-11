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
    $("#" + id_thumbnail).parent().children().not('img').hide()

}