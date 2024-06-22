let inventoryJSON = {};

function add(item, count){
    if (inventoryJSON.inventory.item != null){
        inventoryJSON.inventory.item += count;
    }
}

function remove(item, count){
    inventoryJSON.inventory.item -= count;
}