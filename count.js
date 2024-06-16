
let count = 0;
let text = "Count: " + count;
const counter = document.getElementById("change");
function Click(){
    count = count + 1;
    text = "Count: " + count;
    console.log(text);
    counter.textContent = text;
}
