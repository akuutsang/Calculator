// DOM ELEMENTS
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const clear = document.querySelector(".ac")
const percent = document.querySelector("percent")
const pminus = document.querySelector(".pm")

const division = document.querySelector(".division")
const multiplication = document.querySelector(".multiplication")
const subtraction = document.querySelector(".subtraction")
const addition = document.querySelector(".addition")
const equal = document.querySelector(".equal")




// set time 
const updateTime = () => {
        const currentTime = new Date();

        let currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

if (currentHour > 12) {
    currentHour -= 12;
}
        hour.textContent = currentHour.toString();
        minute.textContent = currentMinute.toString().padStart(2,"0");
}
setInterval(updateTime, 1000);
updateTime();


