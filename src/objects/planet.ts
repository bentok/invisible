import { GALAXY } from "../const/galaxy";
import { IGalaxyResourceConstructor } from "../interfaces/interfaces";

export class Planet {
    private planet: Phaser.GameObjects.Sprite;
    private position: Phaser.Math.Vector2;
    private imageSource: string;
    private rnd: Phaser.Math.RandomDataGenerator;
    private scene: Phaser.Scene;
  
    constructor(params: IGalaxyResourceConstructor) {
        this.scene = params.scene;
        this.position = params.position;
        this.rnd = params.rnd;

        // Choose a random planet
        this.imageSource = GALAXY.planetSources[this.rnd.between(0, GALAXY.planetSources.length - 1)];
        
        // Create planet
        this.planet = this.scene.matter.add
        .sprite(
            this.position.x, 
            this.position.y, 
            this.imageSource, 
            undefined, 
            {ignoreGravity: true}
        );
    }
}