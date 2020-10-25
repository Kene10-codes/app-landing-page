//preloader function
window.addEventListener('load', function(){
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
})

const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('Nov 10, 2020 15:00:00').getTime();

//update every second
const interval = setInterval(() => {
    //get today's date and time
    const now = new Date().getTime();

    //get distance
    const distance = launchDate - now;

    //time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60 ) / (1000 ));

    //display result
    countdown.innerHTML = `
     <div>${days}<span>Days</span></div>
     <div>${hours}<span>Hours</span></div>
     <div>${minutes}<span>Minutes</span></div>
     <div>${seconds}<span>Seconds</span></div>
    `;

    //check if launched date passed
    if(distance < 0){
        //stop countdown
        clearInterval(interval)
        //style countdown output
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched!";

    }
}, 1000);

