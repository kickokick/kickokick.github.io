let inventoryJSON = {};

const uniqueItems = {
    stick: {
        damage: 2
    },
    sword: {
        damage: 10
    }
}

const invObj = document.getElementById('inventory');

function add(item, count) {
    if (uniqueItems[item] != null && inventoryJSON[item] == null) {
        inventoryJSON[item] = uniqueItems[item];
    }
    else if (inventoryJSON[item] == null) {
        inventoryJSON[item] = {};
        inventoryJSON[item].num = count;
    }
    else if (uniqueItems[item] == null){
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

function remove(item, count) {
    inventoryJSON[item].num -= count;
}
function displayInventory() {
    var popup = document.getElementById("inventory");
    popup.classList.toggle("show");
  }