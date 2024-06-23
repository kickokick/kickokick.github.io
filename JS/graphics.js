const app = new PIXI.Application();
await app.init({ width: 1080, height: 360, canvas: document.getElementById("app") });

await PIXI.Assets.load('./assets/cat.png');
let sprite = PIXI.Sprite.from('./assets/cat.png');
app.stage.addChild(sprite);

await PIXI.Assets.load('./assets/Catipillar.png');
let enem = PIXI.Sprite.from('./assets/Catipillar.png');
app.stage.addChild(enem);

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 50.0 + Math.cos(elapsed/50.0) * 50.0;
    enem.x = 700 + Math.sin(elapsed/50.0) * 50.0;
    enem.y = 100
});