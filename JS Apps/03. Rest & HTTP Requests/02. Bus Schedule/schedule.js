function solve() {
    let nextStopId = 'depot';
    let currentStopName;
    
    function depart() {
        $('#depart').attr('disabled', true);

        $.ajax({
            method: "GET",
            url: `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`
        }).then(nextStop).catch(displayError);

    }
    function nextStop(nextStop) {
        currentStopName = nextStop.name;
        nextStopId = nextStop.next;
        $('.info').text(`Next stop ${currentStopName}`);
        $('#arrive').removeAttr('disabled');
    }
    function arrive() {
        $('#arrive').attr('disabled', true);
        $('.info').text(`Arriving at ${currentStopName}`);
        $('#depart').removeAttr('disabled');
    }
    function displayError() {
        $('.info').text(`Error`);
        $('#depart').attr('disabled', true);
        $('#arrive').attr('disabled', true);
    }
    return {
        depart,
        arrive
    };
}
let result = solve();