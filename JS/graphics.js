//TODO: SETH DO IT
let num = 0.002;
const app = new PIXI.Application();
await app.init({ width: 1200, height: 400, canvas: document.getElementById("app") }); //Initialize 

await PIXI.Assets.load('./assets/cat.png');
await PIXI.Assets.load('./assets/Catipillar.png');

let cat = PIXI.Sprite.from('./assets/cat.png');
app.stage.addChild(cat);

let enemy = PIXI.Sprite.from('./assets/Catipillar.png');
app.stage.addChild(enemy);

cat.anchor.x = 0.5;
cat.anchor.y = 0.5;

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    cat.x = 500 + -1 * (Math.cos(elapsed/50.0) * 100.0);
    cat.y = 200;
    enemy.x = 700 + Math.sin(elapsed/50.0) * 50.0;
    enemy.y = 100
    catAttack();
});

//Combat anims
function catAttack() {
    cat.rotation += num;
    if(cat.rotation > .5 || cat.rotation < 0){
        num *= -1;
    }

}
function enemyAttack() {
    
}
function catDeath() {

}
function enemyDeath() {
    
}