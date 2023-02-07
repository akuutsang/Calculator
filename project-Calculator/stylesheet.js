// DOM ELEMENTS
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const clear = document.querySelector(".ac");
const percent = document.querySelector("percent");
const pminus = document.querySelector(".pm");

const display = document.querySelector(".display")

const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const subtraction = document.querySelector(".subtraction");
const addition = document.querySelector(".addition");
const equal = document.querySelector(".equal");

const decimal = document.querySelector(".decimal");
const zero = document.querySelector(".number-0");
const one = document.querySelector(".number-1");
const two = document.querySelector(".number-2");
const three = document.querySelector(".number-3");
const four = document.querySelector(".number-4");
const five = document.querySelector(".number-5");
const six = document.querySelector(".number-6");
const seven = document.querySelector(".number-7");
const eight = document.querySelector(".number-8");
const nine = document.querySelector(".number-9");

const numberArray = [
    zero, one, two, three, four, five, six, seven, eight, nine
];

// functions
const handleNumClick = (numString) => {
  const currentDisplayString = display.textContent;

  if (currentDisplayString === "0") {
    display.textContent = numString
  }
  else{
    display.textContent = parseFloat(currentDisplayString + numString).toLocaleString();
  }
  

    
}



// Add event listeners to buttons and numbers.

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    number.addEventListener("click", () => {
        handleNumClick(i.toString())
    });

    
}




// set time (to achieve that, we will need some methods such as; Date(), .getHours(), .getMinutes())
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



