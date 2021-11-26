//Hero Loading for spritesheet cropping; Comment = "//Character"

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

        const x = 5;
        const y = 6;

        //Character
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0,              //Start left crop
                0,              //Start top crop
                32,             //Width of crop
                32,             //Height of crop
                x * 16 - 8,     //Position times 16 (cellsize), minus because the character isn't prefectly in the top-right of our image
                y * 16 - 18,    //Position times 16 (cellsize), minus because the character isn't prefectly in the top-right of our image
                32,             //Size
                32              //Size
            );
        }
        hero.src = "/images/characters/people/hero.png";

        //Character Shadow
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        }
        
        shadow.src = "/images/characters/shadow.png";
    }
}