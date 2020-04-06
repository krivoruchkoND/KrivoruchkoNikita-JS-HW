// Write function countDown. Function expects number and logs values one by one till zero with one second delay.
// Example: 
// countDown(3); // 3 2 1 0
function countDown(seconds) {
    var timer = setInterval(function () {
        if (seconds < 0) {
            clearInterval(timer);
        } else {
            console.log(seconds);
            seconds--;
        }
    }, 1000);
};
