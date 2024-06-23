let fish = 0;
let autoCount = 0;
let aCost = 10;
let text = "Fish: " + fish;
let catTick = 0;
let enemyTick = 0;

const counter = document.getElementById("change");
const actionText = document.getElementById("action");
const autoOne = document.getElementById("autoOne");



function Click(){
    fish = fish + 1;
    text = "Fish: " + fish;
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
    const update = setInterval(function() {
        fish = (fish + (autoCount*1)) * 100;
        fish = Math.round(fish) / 100;
        text = "Fish: " + fish;
        counter.textContent = text;
        autoOne.textContent = "You own " + autoCount + " Automatic Clickers";
    }, 100);

    const combat = setInterval(function() {
        
        if (catTick == 0) {
            catTick = haste();
            console.log(catTick);
        }
        if (enemyTick == 0) {
            enemyTick = 100;
            console.log(enemyTick);
        }
        
        catTick--;
        enemyTick--;
        
    }, 100);
}