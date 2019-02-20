$(() => {
    const display = $("#clockOutDisplay");
    const button = $("#goBtn");
    const daylater = $('#days');

    var calc = () => {
        var clockin = Number($('#clockin').val());
        var clockmin = Number($('#clockmin').val());
        var workhours = Number($('#workhours').val());
        var workmin = Number($('#workmin').val());
        var totalH = clockin + workhours;
        if (isNaN(clockin) || isNaN(workhours) || clockin > 24) {
            display.text("I don't know.")
        }
        else {
            if (totalH === 0) {
                totalH = 12;
            }
            if (totalH > 12) {
                totalH -= 12;
            }
            if (isNaN(clockmin)) {
                clockmin = 00;
            }
            if (isNaN(workmin)) {
                workmin = 00;
            }
            var totalM = clockmin + workmin;
            if (clockmin + workmin > 60) {
                totalM -= 60;
                totalH += 1;
            }
            if (totalM === 60 || totalM === 0) {
                totalM = '00';
            }
            // In case anyone tries to be funny and input inhuman working hours eg. 24+ hours
            // Subtracts 12 from the total hours until it's less than 12;
            var days = 0;
            for (var i = totalH; i > 12; i -= 12) {
                totalH -= 12;
                days += .5;
            }
            var totD = Math.ceil(days);
            if (totalM < 10) {
                display.text(`${totalH}:0${totalM}`);
            }
            if (workhours >= 24) {
                display.text(`${totalH}:${totalM}`);
                daylater.text(`${totD} day(s) later.`);
            }
            else {
                display.text(`${totalH}:${totalM}`);
            }
        }
    }
    button.click(calc);
})