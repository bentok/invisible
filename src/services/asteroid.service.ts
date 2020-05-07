import { GALAXY } from "../const/galaxy.const";
import { ASTEROID } from "../const/asteroid.const";
import { Asteroid } from "../sprites/asteroid.sprite";
import { between } from '../lib/Math';

export class AsteroidService {
    private world: Phaser.Physics.Matter.World;
    private maxAsteroids: number;
    private numAsteroids: number;
    private asteroids: Asteroid[];

    constructor(world: Phaser.Physics.Matter.World, maxAsteroids: number) {
        this.world = world;
        this.maxAsteroids = maxAsteroids;
        this.asteroids = [];

        this.spawnAsteroids(this.maxAsteroids);
    };

    public update() {
        // Remove destroyed / offscreen asteroids
        this.asteroids = this.asteroids.filter(this.checkAsteroid); 
        this.numAsteroids = this.asteroids.length;

        // Update asteroids
        this.asteroids.forEach(asteroid => asteroid.update());

        // Add asteroids
        let desroyedAsteroids = this.maxAsteroids - this.numAsteroids;
        if (desroyedAsteroids > 0) {
            this.spawnAsteroids(desroyedAsteroids);
        }
        
        return this.asteroids
    }

    private spawnAsteroids(numAsteroids) {
        for (let i = 0; i < numAsteroids; i++) {
            // Random spawn should originate from outside the map
            let asteroidX = GALAXY.width - (ASTEROID.OFFSET * 2);
            let asteroidY = GALAXY.height - (ASTEROID.OFFSET * 2);
            if (between(0, 2) == 1) {
                asteroidX = between(0, 2) == 1 ? between(0, GALAXY.width / 2) :  between(GALAXY.width / 2, GALAXY.width);
                asteroidY = between(0, 2) == 1 ? asteroidY : GALAXY.height + (ASTEROID.OFFSET * 2); 
            } else {
                asteroidY = between(0, 2) == 1 ? between(0, GALAXY.height / 2) :  between(GALAXY.height / 2, GALAXY.height);
                asteroidX = between(0, 2) == 1 ? asteroidX : GALAXY.width + (ASTEROID.OFFSET * 2);
            }
            // Randomly pick from asteroid types
            let imgSrc = ASTEROID.MEDIUM.IMGSRC;
            let asteroidConfig = ASTEROID.MEDIUM.CONFIG;
            switch(between(0, 3)) {
                case 3: {
                    imgSrc = ASTEROID.LARGE.IMGSRC;
                    asteroidConfig = ASTEROID.LARGE.CONFIG;
                    break;
                }
        
                case 2: {
                    imgSrc = ASTEROID.MEDIUM.IMGSRC;
                    asteroidConfig = ASTEROID.MEDIUM.CONFIG;
                    break;
                }

                case 1: {
                    imgSrc = ASTEROID.SMALL.IMGSRC;
                    asteroidConfig = ASTEROID.SMALL.CONFIG;
                    break;
                }
            }
            let asteroid = new Asteroid(this.world, { x: asteroidX, y: asteroidY, name: imgSrc }, asteroidConfig);
            this.world.scene.add.existing(asteroid);
            this.asteroids.push(asteroid);
        }
        this.numAsteroids = this.asteroids.length;
    }

    private checkAsteroid(asteroid: Asteroid) {
        return !asteroid.isDestroyed && !asteroid.isOffScreen;
      }
}