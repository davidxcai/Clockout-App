// wh and wm are the hours and minutes displayed after calculation
// ch and cm are the values inputed in the form

$(() => {
    const display = $("#clockOutDisplay");
    const button = $("#goBtn");

    calculate = () => {
        let wh = Number($('#wh').val());
        let wm = Number($('#wm').val());
        let ch = Number($('#ch').val()) + wh;
        let cm = Number($('#cm').val());
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
        if (ch > 12) {
            ch -= 12;
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
