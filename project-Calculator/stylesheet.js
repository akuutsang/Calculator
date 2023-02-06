// DOM ELEMENTS
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");




// set time 
setInterval(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

        hour.textContent = currentHour.toString();
        minute.textContent = currentMinute.toString();
}, 1000);