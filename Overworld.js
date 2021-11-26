class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
    }

    init() {
        //Background
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        }
        image.src = "/images/maps/DemoLower.png";

        //Character
        const x = 0;
        const y = 0;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0,              //Start left crop
                0,              //Start top crop
                32,             //Width of crop
                32,             //Height of crop
                x,              //Position
                y,              //Position
                32,             //Size
                32              //Size
            );
        }
        hero.src = "/images/characters/people/hero.png";
    }
}