// Set the date you're counting down to
const countdownDate = new Date("April 5, 2022 05:00:00").getTime();

// Update count every 1 second
const x = setInterval(function(){
    const now = new Date().getTime(); // get today's date and time
    const distance = countdownDate - now; // find distance between now and countdown date

    // time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display result in id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // if the countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Coundown is over!";
    }
})