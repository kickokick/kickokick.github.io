
var count = 0;
let counter = document.getElementById("change");
function Click(){
    count = count + 1;
    var text = "Count: " + count;
    console.log(text);
    counter.appendChild(text);
}
