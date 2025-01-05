function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const timer_interval = 10; //ms

async function show_toast(toast_id, bar_timeout){

    $("#" + toast_id).show(200);

    let remainingTime = bar_timeout;

    while(remainingTime > 0){
        let percentage = ((remainingTime / bar_timeout) * 100).toFixed(2);
        let bar = $("#" + toast_id + " .toast_bar");
        
        bar.css("width", percentage + "%")
        
        remainingTime -= timer_interval;
        await timeout(timer_interval);
    }

    $("#" + toast_id).hide(80);

}

function set_toast_content(toast_id, toast_header, toast_body){
    $("#" + toast_id + " h2").text(toast_header);
    $("#" + toast_id + " p").text(toast_body);

}