function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let interval = 0;
    let step = 1;

    let startTimer = $('#start-timer');
    startTimer.on('click', function () {
        interval = setInterval(updateTime ,1000)
        updateTime();
    })
    $('#stop-timer').on('click', function () {
        clearInterval(interval);
    })

    function updateTime() {
        let secondsVal = seconds.text();
        let minutesVal = minutes.text();
        let hoursVal = hours.text();

        seconds.text(`0${(+secondsVal + 1)}`.slice(-2));
        if (secondsVal > 59) {
            seconds.text(0);
            minutes.text(`0${(+minutesVal + 1)}`.slice(-2));
            if (minutesVal > 59) {
                minutes.text(0);
                hours.text(+hoursVal + 1);
            }
        }
    }
}