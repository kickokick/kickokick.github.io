//vars and dictionary
let catTick = 50;
let enemyTick = 100;
let nothingSelected = true;
let catsHealth = document.getElementById("catHealth");

let catData = {
    name: "bob",
    health: 100,
    damage: 10,
    haste: 2,
}

let currentEnemyData = {
    name: null,
    health: null,
    damage: null,
    haste: null,
    fish: null,
};

//Changes Enemy based on input
function changeEnemy(name) {
    document.getElementById("enemy").innerHTML = `Current Enemy: ${name}`;
    
    currentEnemyData.name = name;
    currentEnemyData.health = enemies[name].health;
    currentEnemyData.damage = enemies[name].damage;
    currentEnemyData.haste = enemies[name].haste;
    currentEnemyData.fish = enemies[name].fish;
}

//Resets enemy to enemy from dictionary
function resetEnemy() {
    let name = enemies[currentEnemyData.name]
    currentEnemyData.health = name.health;
    currentEnemyData.damage = name.damage;
    currentEnemyData.haste = name.haste;
    currentEnemyData.fish = name.fish;
}

//Give fish/rewards to the player after killing an enemy
function awardPoints(name){
    fish += currentEnemyData.fish;
}

//combat loop/interval
// TODO: Enemy attack back and animations, also display info
const combat = setInterval(function() {
    //dipslay health
    if(currentEnemyData.name != null){
        actionText.innerHTML = currentEnemyData.name + " Health: " + currentEnemyData.health;
        nothingSelected = !nothingSelected;
    } else 
        actionText.innerHTML = "Nothing Selected"

    if(nothingSelected == false){
        //When dies
        if (currentEnemyData.health <= 0){
            resetEnemy();
            awardPoints(currentEnemyData.name);
            catData.health = 0;
            console.log("Congrats you killed an innocent something");
        }//tick stuff
        if (!(catTick == 0)) {
            catTick -= catStats.haste;
            //console.log(catTick);
        } else {
            catTick = 50;
            currentEnemyData.health -= damage();
            //console.log("CURRENT HEALTH: " + currentEnemyData.health);
        }

        if (enemyTick == 0) {
            enemyTick = 100;
            catData.health -= currentEnemyData.damage;
            catsHealth.innerHTML = `Cat's Health: ${catData.health}`;
            //console.log(enemyTick);
        } else{
            enemyTick -= currentEnemyData.haste;
        }
    }
}, 100);