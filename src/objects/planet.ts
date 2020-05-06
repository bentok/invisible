import { GALAXY } from "../const/galaxy.const";
import { IGalaxyResourceConstructor } from "../interfaces/interfaces";
import { Plugin } from "matter";

export class Planet {
    private planet: any;
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
        
        // Randomize the planet size
        let planetSize = this.rnd.between(100, 300);
        // Create planet
        this.planet = this.scene.matter.add
        .sprite(
            this.position.x, 
            this.position.y,
            this.imageSource,
            undefined, 
            {
                circleRadius: planetSize / 6,
                mass: planetSize,
                isStatic: true,
                plugin: {
                  attractors: [
                    (bodyA: any, bodyB: any) => {
                      const xDiff = bodyA.position.x - bodyB.position.x;
                      const yDiff = bodyA.position.y - bodyB.position.y;
                      if (xDiff > 100 || yDiff > 100) {
                        return null;
                      }
                      return {
                        x: (bodyA.position.x - bodyB.position.x) * 0.00001,
                        y: (bodyA.position.y - bodyB.position.y) * 0.00001,
                      }
                    },
                  ]
                }
            },
            
        ).setIgnoreGravity(true);
      this.scene.matter.add.mouseSpring();
    }
}