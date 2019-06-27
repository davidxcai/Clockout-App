// wh and wm are the hours and minutes displayed after calculation
// ch and cm are the values inputed in the form

$(() => {
    const display = $("#clockOutDisplay");
    const button = $("#goBtn");

    calculate = () => {
        let wh = Number($('#wh').val());
        let wm = Math.round(Number($('#wm').val()) / 15) * 15;
        let ch = Number($('#ch').val()) + wh;
        let cm = Math.round(Number($('#cm').val()) / 15) * 15;
        // lunch decider
        if (wh >= 6 && wm > 0 || wh > 6) {
            wm += 30;
        }
        let fm = wm + cm - 7;
        if (fm < 0) {
            ch -= 1;
            fm = 53;
        }

        // keeps time in 12 hour format
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
