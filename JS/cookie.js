
/*

USE https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage INSTEAD

let fishElement = "";
let fishCount = "";
let cookieText = "";
let equalIndex = 0;

function saveCookies(){
    const cookieSave = setInterval(function() {
        fishElement = document.getElementById("change");
        text = "fish=" + fishElement.innerHTML.substring(6);
        document.cookie = text;
    }, 1000);
}

function onLoadUpdate(){
    fishCount = document.cookie;
    console.log(fishCount);
    equalIndex = fishCount.indexOf("=");
    cookieText = fishCount.substring(equalIndex+1);
    fishElement = document.getElementById("change");
    fishElement.innerHTML = "Fish: " + cookieText;
    console.log(fishElement.innerHTML);
}
*/