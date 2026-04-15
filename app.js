"use strict";

console.log("klik tæller starter !");

const counter = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
const countDisplay = document.querySelector("#counter");
const clickbutton=document.querySelector("#click-button");
const resetbutton=document.querySelector("#reset-button");
console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);

let count = 10;
count = count+1;
countDisplay.textContent = count;

clickButton.addEventListener("click", function() {
  count=count+1;

  countDisplay.textContent = count;
if(count>10){
  countDisplay.style.color= "lightgreen";
}
});

resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent
  = count;
if(count>10){
  countDisplay.style.color= "lightgreen";
}


});
    const minusButton=document.querySelector("#minus-button");
    minusButton.addEventListener("click", function () {
      count=count-1;
      countDisplay.textContent = count;
    });

    clickButton.addEventListener("click", function () {
      count=count+1;
      countDisplay.textContent = count;
      if(count=== 10){
        alert("Tilykke! du nåede 10 klik!");
      }
    });
    function increaseCount(){
        count=count+1;
        countDisplay.textContent = count;
    }
    function decreaseCount(){
        count=count-1
        countDisplay.textContent = count;
    }

    function resetCount(){
        count=0;
        countDisplay.textContent = count;
    }

    clickButton.addEventListener("click", increaseCount);
    minusButton.addEventListener("click", decreaseCount);
    resetButton.addEventListener("click", resetCount);
    
    
