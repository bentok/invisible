import { GALAXY } from "../const/galaxy";
import { Planet } from "../objects/planet"
import { Star } from "../objects/star"
import { IGalaxySystemConstructor } from "../interfaces/interfaces";

export class GalaxyMap {
    private resource: Planet | Star;
    private starSystemExists: boolean;
    private isPlanet: boolean;
    private position: Phaser.Math.Vector2;
    private rnd: Phaser.Math.RandomDataGenerator;
    private scene: Phaser.Scene;
  
    constructor(params: IGalaxySystemConstructor) {
        this.scene = params.scene;
        this.position = new Phaser.Math.Vector2(params.x, params.y);

        // Create a random seed, which depends on the x and y value
        // So we get for each x and y value the same seed
        let seed = 1586603672819283926694102 * this.position.x * this.position.y;
    
        // Push that seed into the random data generator of Phaser
        this.rnd = new Phaser.Math.RandomDataGenerator([seed.toString()]);
    
        // Check if the star systems exist or not
        this.starSystemExists = this.rnd.between(0, 10) === 1 ? true : false;

        // Only if the star systems exist, we should create it
        if (this.starSystemExists) {
            // Check if this system is a planet or star
            this.isPlanet = this.rnd.between(0, 100) === 1 ? true : false;
            let resourceParams = {
                scene: this.scene,
                position: this.position,
                rnd: this.rnd,
            }

            // Create the resource
            if (this.isPlanet) {

                this.resource = new Planet(resourceParams);
            }
            else {
                this.resource = new Star(resourceParams);
            }
        }
    }
  
    public isStarSystemAlive(): boolean {
      return this.starSystemExists;
    }
}