// wh and wm are the total working hours and minutes
// ch and cm are the values inputed for the clock-in time

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
            if (wm > 60) {
                wm -= 60;
                ch += 1;
            }
        }
        let fm = wm + cm - 7;
        if (fm > 59) {
            ch += 1;
            fm -= 60;
        }
        else if (fm < 0) {
            ch -= 1;
            fm = 53;
        }

        // keeps time in 12 hour format
        if (ch > 12) {
            ch -= 12;
        }
        // console.log(`Clock in time is: ${ch - wh + 12}:${cm}
        // \nYou're working ${wh} hours and ${wm ? wm : 0} minutes
        // `)
        let time;
        fm < 10 ? time = ch + ':0' + fm : time = ch + ':' + fm;
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