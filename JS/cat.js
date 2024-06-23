let catStats = {
    xp: 0,
    maxHealth: 100,
    currentHealth: 100,
    strength: 10,
    haste: 2,
    crit: 5,
    regen: 5,
    equipped: {
        helmet: null,
        chestplate: null,
        gloves: null,
        pants: null,
        boots: null,
        hand: null
    }
}

function equip(item, slot) {
    if (inventoryJSON[item] != null) {
        catStats.equipped[slot] = item;
    }
}

function haste() {
    return 50 - catStats.haste;
}

function damage() {
    return catStats.strength + inventoryJSON[catStats.equipped.hand].damage;
}