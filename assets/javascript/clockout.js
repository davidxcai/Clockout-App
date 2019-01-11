// var clockinHour = Number(process.argv[2]);
// var clockinMin = Number(process.argv[3]);
// var hoursWorked = Number(process.argv[4]);
// var minWorked = Number(process.argv[5]);

var display = $("#clockOutDisplay");
var button = $("#goBtn");
var totalHour = 0;
var totalMin = 0;
var ampm = "am";

function calculate() {
    var clockinHour = parseInt($("#ciHour").val());
    var clockinMin = parseInt($("#ciMin").val());
    var hoursWorked = parseInt($("#hoursWorked").val());
    var minWorked = parseInt($("#minutesWorked").val());
    if (isNaN(minWorked)) {
        minWorked = 00;
    }
    if (isNaN(clockinMin)) {
        clockinMin = 00;
    }
    totalHour = clockinHour + hoursWorked;
    if (hoursWorked >= 6) {
        totalMin += 30;
    }
    if (totalHour > 12) {
        ampm = "pm";
        totalHour -= 12;
    }
    totalMin += clockinMin + minWorked;
    if (totalMin >= 60) {
        totalMin -= 60;
        totalHour += 1;
    }
    if (totalMin < 10) {
        // console.log(totalHour + ":0" + totalMin + ampm);
        display.html(`${totalHour}:0${totalMin}${ampm}`);
    }
    if (totalMin >= 10) {
        // console.log(totalHour + ":" + totalMin + ampm);
        display.html(`${totalHour}:${totalMin}${ampm}`);
    }
}

//when you click "tell me" button, runs this function
button.click(function () {
    calculate();
});

//detects "enter" key being pressed; enter is 13 in all browsers when you use jquery
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        calculate();
    }
});

