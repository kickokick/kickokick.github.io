const app = new PIXI.Application();
await app.init({ width: 1080, height: 360, canvas: document.getElementById("app") });

await PIXI.Assets.load('./assets/cat.png');
await PIXI.Assets.load('./assets/Catipillar.png');

let cat = PIXI.Sprite.from('./assets/cat.png');
app.stage.addChild(sprite);

let enemy = PIXI.Sprite.from('./assets/Catipillar.png');
app.stage.addChild(enemy);

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    cat.x = 50.0 + Math.cos(elapsed/50.0) * 50.0;
    enemy.x = 700 + Math.sin(elapsed/50.0) * 50.0;
    enemy.y = 100
});

function catAttack() {

}
function enemyAttack() {
    
}
function catDeath() {

}
function enemyDeath() {
    
}