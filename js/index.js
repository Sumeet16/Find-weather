const view = document.querySelector(".view");
const viewSvg = document.querySelector(".svg");
const search = document.querySelector("svg");
const viewMoreBox = document.querySelector(".info-card");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

let currTime = () => {
    let currDate = new Date();
    let localTime = currDate.toLocaleTimeString();
    time.innerHTML = localTime;
};

let currDay = () => {
    let day = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    let today = day.toLocaleDateString('en-US', options);
    date.innerHTML = today;
};

currDay();

setInterval(currTime, 1000);

view.addEventListener("click", ()=>{
    viewSvg.classList.toggle("rotate");
    viewMoreBox.classList.toggle("visible");
});

viewSvg.addEventListener("click", ()=>{
    viewSvg.classList.toggle("rotate");
    viewMoreBox.classList.toggle("visible");
});