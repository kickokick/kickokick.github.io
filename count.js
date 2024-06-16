
let count = 0;
let autoCount = 0;
let text = "Count: " + count;
const counter = document.getElementById("change");
const actionText = document.getElementById("action");
function Click(){
    count = count + 1;
    text = "Count: " + count;
    console.log(text);
    counter.textContent = text;
    actionText.textContent = "You clicked";
}

function Buy(){
    if (count > 10){
        count = count - 10;
        autoCount = autoCount + 1;
        actionText.textContent = "You bought an auto clicker";
    } else {
        actionText.textContent = "sorry pal ur too broke";
    }
}

const interval = setInterval(function(){
    count = count + (autoCount*0.1);
    counter.textContent = text;
}, 1000);