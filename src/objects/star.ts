import { GALAXY } from "../const/galaxy";
import { IGalaxyResourceConstructor } from "../interfaces/interfaces";

export class Star {
    private star: Phaser.GameObjects.Arc;
    private position: Phaser.Math.Vector2;
    private radius: number;
    private color: number;
    private alpha: number;
    private rnd: Phaser.Math.RandomDataGenerator;
    private scene: Phaser.Scene;
  
    constructor(params: IGalaxyResourceConstructor) {
        this.scene = params.scene;
        this.position = params.position;
        this.rnd = params.rnd;

        // Generate a random radius
        this.radius = this.rnd.between(1, 10) / 10;
    
        // Generate a random color
        this.color = GALAXY.starColors[this.rnd.between(0, GALAXY.starColors.length - 1)];

        // Generate random alpha
        this.alpha = this.rnd.realInRange(0.5, 1);

        // Create circle
        this.star = this.scene.add
        .circle(
            this.position.x,
            this.position.y,
            this.radius,
            this.color,
            this.alpha
        ).setInteractive();
    }
}