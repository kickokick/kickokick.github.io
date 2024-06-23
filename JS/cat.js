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

function damage() {
    if (inventoryJSON[catStats.equipped.hand] == null){
        return catStats.strength;
    }
    return catStats.strength + inventoryJSON[catStats.equipped.hand].damage;
}