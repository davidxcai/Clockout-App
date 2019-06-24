// wh and wm are the total working hours and minutes
// ch and cm are the values inputed for the clock-in time

$(() => {
    const display = $("#clockOutDisplay");
    const button = $("#goBtn");

    calculate = () => {
        let wh = Number($('#wh').val());
        let wm = Number($('#wm').val()) - 7;
        let ch = Number($('#ch').val()) + wh;
        let cm = Math.round(Number($('#cm').val()) / 15) * 15;
        console.log(`work minutes ${cm}`);
        if (wh >= 6 && wm > 0 || wh > 6) {
            wm += 30;
        }
        for (let i = 0; i < wm; i++) {
            cm++;
            if (cm === 60) {
                ch += 1;
                cm = 0;
            }
        }
        if (cm === 0) {
            cm = 53;
            ch -= 1;
        }
        if (ch > 12) {
            ch = ch - 12;
        }
        let time;
        cm < 10 ? time = ch + ':0' + cm : time = ch + ':' + cm;
        display.text(time);
    }

    button.click(() => {
        calculate();
    });

    $(document).on('keypress', e => {
        if (e.which == 13) {
            calculate();
        }
    });
});