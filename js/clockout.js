$(() => {
    const display = $("#clockOutDisplay");
    const button = $("#goBtn");

    calculate = () => {
        let ch = Number($('#ch').val()) + Number($('#wh').val());
        let cm = Number($('#cm').val());
        let wm = Number($('#wm').val());
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
