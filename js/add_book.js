const form = document.querySelectorAll("#newbook input");

const title_input = document.getElementById('title');
const author_input = document.getElementById('author');
const genre_input = document.getElementById('genre');
const nPages_input = document.getElementById('n_pages');
const description_input = document.getElementById('description');

const btn_submit = document.getElementById('submit');

function get_description(description_input){

    let description = description_input.value;

    if(!description){
        return "";
    }

    return description.split("\n").join(" /|*|/ ");

}

function validate_form(){

    btn_submit.disabled = true;

    if(!has_minimum_length(title_input.value, 1)){
        return;
    }

    if(!has_minimum_length(author_input.value, 1)){
        return;
    }

    if(!has_minimum_length(genre_input.value, 1)){
        return;
    }
    
    if(!has_minimum_length(nPages_input.value, 1)){
        return;
    }

    btn_submit.disabled = false;

}

form.forEach(input =>{
    input.addEventListener('input', validate_form);
})

document.getElementById('newbook').addEventListener('submit', function(event){

    event.preventDefault();

    console.log(get_description(description_input));

    $.ajax({
        url: "../php/add_newBook.php",
        method: "post",
        data: {
            book_title: title_input.value,
            book_author: author_input.value,
            book_genre: genre_input.value,
            book_nPages: nPages_input.value,

            description: get_description(description_input)

        }
    })

})