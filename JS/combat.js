let catTick = 50;
let enemyTick = 100;
let currentEnemyFull = "";
let currentEnemyCut = "";
let currentEnemy = "";

let currentEnemyData = {
    health: null,
    damage: null,
    haste: null
};


function changeEnemy(name){
    currentEnemyFull = document.getElementById("enemy");

    if (name == "Catipillar"){
        currentEnemyFull.innerHTML = "Current Enemy: Catipillar";

        currentEnemyData.health = enemies.catipillar.health;
        currentEnemyData.damage = enemies.catipillar.damage;
        currentEnemyData.haste = enemies.catipillar.haste;

        console.log(currentEnemyData);
    } else if (name == "Nothing"){

        currentEnemyFull.innerHTML = "Current Enemy: Nothing";

        currentEnemyData.health = enemies.nothing.health;
        currentEnemyData.damage = enemies.nothing.damage;
        currentEnemyData.haste = enemies.nothing.haste;
    }
}


function getCurrentEnemy(){
    currentEnemyFull = document.getElementById("enemy");

    if (!(currentEnemyFull.innerHTML.lastIndexOf(": ") == -1)){
        currentEnemyCut = currentEnemyFull.innerHTML.substring(currentEnemyFull.innerHTML.lastIndexOf(": ") + 2);
    }

    return currentEnemyCut;
}


function resetEnemy(){
    currentEnemy = getCurrentEnemy();
    if (currentEnemy == "Catipillar"){

        currentEnemyData = enemies.catipillar;
        console.log(currentEnemyData);
        console.log(enemies.catipillar);

    }
}


const combat = setInterval(function() {

    getCurrentEnemy();
    
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