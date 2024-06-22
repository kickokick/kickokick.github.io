let fish = 0;
let autoCount = 0;
let aCost = 10;
let text = "fish: " + fish;

const counter = document.getElementById("change");
const actionText = document.getElementById("action");
const autoOne = document.getElementById("autoOne");


function Click(){
    fish = fish + 1;
    text = "fish: " + fish;
    console.log(text);
    counter.textContent = text;
    actionText.textContent = "You clicked";
}

function Buy(){
    if (fish >= aCost){
        fish = fish - aCost;
        autoCount = autoCount + 1;
        actionText.textContent = "You bought an auto clicker";
    } else {
        actionText.textContent = "sorry pal ur too broke";
    }
    
    aCost = (10 * Math.pow(1.5, autoCount)).toFixed(2);
    document.getElementById("autoclicker").innerHTML = "Buy autoclicker (" + aCost + ")";
}

function Increment(){
    const update = setInterval(function(){
        fish = (fish + (autoCount*1)) * 100;
        fish = Math.round(fish) / 100;
        text = "fish: " + fish;
        counter.textContent = text;
        autoOne.textContent = "You own " + autoCount + " Automatic Clickers";
    }, 100);
}