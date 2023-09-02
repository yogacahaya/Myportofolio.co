const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 80)
});

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#636161 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

let CircularProgress = document.querySelector(".circular-progress1"),
    ProgressValue = document.querySelector(".progress-value1");
let ProgressStartValue = 0,    
    ProgressEndValue = 60,    
    Speed = 100;
    
let Progress = setInterval(() => {
    ProgressStartValue++;
    ProgressValue.textContent = `${ProgressStartValue}%`
    CircularProgress.style.background = `conic-gradient(#636161 ${ProgressStartValue * 3.6}deg, #ededed 0deg)`
    if(ProgressStartValue == ProgressEndValue){
        clearInterval(Progress);
    }    
}, speed);