let fish = 0;
let autoCount = 0;
let aCost = 10;
let text = "Fish: " + fish;

const counter = document.getElementById("change");
const actionText = document.getElementById("action");
const autoOne = document.getElementById("autoOne");



function Click(){
    fish = fish + 1;
    text = "Fish: " + fish;
    console.log(text);
    counter.textContent = text;
}

function Buy(){
    if (fish >= aCost){
        fish = fish - aCost;
        autoCount = autoCount + 1;
    }
    
    aCost = (10 * Math.pow(1.5, autoCount)).toFixed(2);
    document.getElementById("autoclicker").innerHTML = "Buy autoclicker (" + aCost + ")";
}

function Increment(){
    const update = setInterval(function() {
        fish = (fish + (autoCount*1)) * 100;
        fish = Math.round(fish) / 100;
        text = "Fish: " + fish;
        counter.textContent = text;
        autoOne.textContent = "You own " + autoCount + " Automatic Clickers";
    }, 100);
}
