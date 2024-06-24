let catTick = 50;
let enemyTick = 100;

let currentEnemyData = {
    name: null,
    health: null,
    damage: null,
    haste: null
};

function changeEnemy(name) {
    document.getElementById("enemy").innerHTML = `Current Enemy: ${name}`;
    
    currentEnemyData.name = name;
    currentEnemyData.health = enemies[name].health;
    currentEnemyData.damage = enemies[name].damage;
    currentEnemyData.haste = enemies[name].haste;
}

function resetEnemy() {
    currentEnemyData.health = enemies[currentEnemyData.name].health;
    currentEnemyData.damage = enemies[currentEnemyData.name].damage;
    currentEnemyData.haste = enemies[currentEnemyData.name].haste;
}

const combat = setInterval(function() {
    actionText.innerHTML = currentEnemyData.name + " Health: " + currentEnemyData.health;

    if (currentEnemyData.health <= 0){
        resetEnemy();
        console.log("Congrats you killed an innocent something");
    }
    if (!(catTick == 0)) {
        catTick -= catStats.haste;
        console.log(catTick);
    } else {
        catTick = 50;
        currentEnemyData.health -= damage();
        console.log("CURRENT HEALTH: " + currentEnemyData.health);
    }

    if (enemyTick == 0) {
        enemyTick = 100;
        console.log(enemyTick);
    }        
}, 100);