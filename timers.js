// Countdown function - Timers Exercise:
function countDown(num) {
    let timer = setInterval(function() {
        if (num <= 0) {
            console.log('DONE');
            clearInterval(timer);
        } else {
            console.log(num);
        }
        num--;
    }, 1000)
};



//random Game function

function randomGame() {
    let counter = 0;
    let timer = setInterval(function() {
        let number = Math.random();
        counter += 1;
        if (number > 0.75) {
            console.log(`It took ${counter} tries to find a number over 0.75.`);
            clearInterval(timer);
        }
    }, 1000)
}
    
