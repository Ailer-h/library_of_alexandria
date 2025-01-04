function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const timer_interval = 100; //ms

async function show_toast(toast_id, bar_id, timeout){

    $("#" + toast_id).show(200);

    let remainingTime = timeout;

    while(remainingTime > 0){
        let percentage = ((remainingTime / timeout) * 100).toFixed(2);
        let bar = $("#" + bar_id);
        console.log(bar)
        bar.css("width", percentage + "%")
        await timeout(timer_interval);
        remainingTime -= timer_interval;
    }

}