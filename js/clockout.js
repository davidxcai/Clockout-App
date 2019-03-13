$(() => {
    var display = $("#clockOutDisplay");
    var button = $("#goBtn");

    function calculate() {
        var ch = Number($('#ch').val());
        var cm = Number($('#cm').val());
        var wh = Number($('#wh').val());
        var wm = Number($('#wm').val());
        if (wh >= 6 && wm > 0 || wh > 6) {
            wm += 30;
        }
        for (var i = 0; i < wh; i++) {
            ch++;
        }
        for (var i = 0; i < wm; i++) {
            cm++;
            if (cm === 60) {
                ch += 1;
                cm = 0;
            }
            if (ch > 12) {
                ch = ch - 12;
            }
        }
        if (cm < 10) {
            display.text(ch + ':0' + cm);
        }
        else {
            display.text(ch + ':' + cm);
        }
    }

    button.click(function () {
        calculate();
    });

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            calculate();
        }
    });
});