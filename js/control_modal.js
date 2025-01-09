$(".close").click(function(){
    let id = $(this).parent().attr('id');

    close_modal(id, 100);

})

function show_modal(modal_id, animation_time){

    let id = "#" + modal_id;

    $(id).css("display", "flex");
    $(id + " .modal").slideDown(animation_time)
    
}

function close_modal(modal_id, animation_time){

    let id = "#" + modal_id;

    $(id + " .modal").slideUp(animation_time, function(){
        $(id).hide();
    })

}