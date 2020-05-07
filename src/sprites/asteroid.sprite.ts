import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';
import { between } from '../lib/Math';
import { GALAXY } from '../const/galaxy.const';
import { ASTEROID } from '../const/asteroid.const';

interface IAsteroidConfig {
  mass: number,
  scale: number,
  frictionAir: number,
  rotationSpeed: number,
  depth: number,
  maxVelocity: number,
  minVelocity: number
};

export class Asteroid extends Sprite {
  private velocityX: number;
  private velocityY: number;
  private rotationSpeed: number;
  private dustEmitter: any;
  public isDestroyed = false;
  public isOffScreen = false;

  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, asteroidConfig: IAsteroidConfig) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
    this.setScale(asteroidConfig.scale, asteroidConfig.scale);
    this.setFrictionAir(asteroidConfig.frictionAir);
    this.setAngle(between(0, 360));
    this.setMass(asteroidConfig.mass);
    this.depth = asteroidConfig.depth;
    this.rotationSpeed = asteroidConfig.rotationSpeed;
    this.velocityX = between(asteroidConfig.minVelocity, asteroidConfig.maxVelocity);
    this.velocityY = between(asteroidConfig.minVelocity, asteroidConfig.maxVelocity);
    if (this.velocityX == 0) {
      this.velocityX = 2;
    }
    if (this.velocityY == 0) {
      this.velocityX = -2;
    }
    this.dustEmitter = this.scene.add.particles('fake');

    this.setVelocity(this.velocityX, this.velocityY);

    this.setOnCollide(() => {
      let explosion = this.scene.add.particles('fake').createEmitter({
        x: this.x,
        y: this.y,
        speed: { min: -300, max: 300 },
        angle: { min: 0, max: 360 },
        scale: { start: this.scale, end: 0 },
        blendMode: 'SCREEN',
        gravityY: -this.y,
        active: true,
        lifespan: 250
      });
      explosion.explode(15, this.x, this.y);
      this.isDestroyed = true;
      this.destroy(true);
    });
  }

  update() {
    this.checkIfOffScreen();
    if (!this.isDestroyed && !this.isOffScreen) {
      this.applyForces();
      this.applyParticles();
    } else {
      this.destroy(true);
    }
  }

  private applyForces() {
    this.setVelocity(this.velocityX, this.velocityY);
    this.rotation += this.rotationSpeed;
  }

  private applyParticles() {
    // TODO: Should emit from the opposite direction of angular velocity
    this.dustEmitter.createEmitter({
      // radial: false,
      lifespan: 100,
      speedX: { min: 200, max: 400 },
      // quantity: 2,
      // gravityY: -this.y,
      active: true,
      scale: { start: this.scale, end: 0, ease: 'Power3' },
      blendMode: 'ADD'
    }).emitParticle(5, this.x, this.y);
  }

  private checkIfOffScreen() {
    // horizontal check
    if (this.x > GALAXY.width + (ASTEROID.OFFSET * 3)) {
      this.isOffScreen = true;
    } else if (this.x < -(ASTEROID.OFFSET * 3)) {
      this.isOffScreen = true;
    }

    // vertical check
    if (this.y > GALAXY.height + (ASTEROID.OFFSET * 3)) {
      this.isOffScreen = true;
    } else if (this.y < -(ASTEROID.OFFSET * 3)) {
      this.isOffScreen = true;
    }
  }
}