const shop = {
    yarn: {
        baseCost: 20,
        growth: 1.7
    }
}
let cost = 0;

function buy(item) {
    if (inventoryJSON[item] == null) {
        cost = shop[item].baseCost;
    }
    else {
        cost = shop[item].baseCost * Math.pow(shop[item].growth, inventoryJSON[item].num);
    }
    if (fish >= cost) {
        fish -= cost;
        add(item, 1);
    }
    document.getElementById('yarn').innerHTML = "Buy "+ item + "(" + (shop[item].baseCost * Math.pow(shop[item].growth, inventoryJSON[item].num)).toFixed(2) + ")";
}