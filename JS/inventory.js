let inventoryJSON = {};
const invObj = document.getElementById('inventory');

function add(item, count){
    if (inventoryJSON[item] == null) {
        inventoryJSON[item] = {};
        inventoryJSON[item].num = count;
    }
    else {
        inventoryJSON[item].num += count;
    }
    invObj.innerHTML = invString(inventoryJSON);
}

function invString(inventory) {
    let string = '';
    for (const element in inventory) {
        string += `${element}: ${inventoryJSON[element].num}\n`;
    }
    console.log(string);
    return string;
}

function remove(item, count){
    inventoryJSON[item].num -= count;
}