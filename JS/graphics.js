const app = new PIXI.Application();
await app.init({ width: 640, height: 360, canvas: document.getElementById("app") });

await PIXI.Assets.load('./assets/cat.png');
let sprite = PIXI.Sprite.from('./assets/cat.png');
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});