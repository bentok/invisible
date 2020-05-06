export interface IGalaxySystemConstructor {
    scene: Phaser.Scene;
    x: number;
    y: number;
}

export interface IGalaxyResourceConstructor {
    scene: Phaser.Scene;
    position: Phaser.Math.Vector2;
    rnd: Phaser.Math.RandomDataGenerator;
}

export enum VelocityDirection {
    NOT_SET,
    X,
    Y
}

export interface Velocity {
    velocity: number;
    direction: VelocityDirection;
}

// Generic key interfaces
export interface IKeyEvents {
    key: number;
    updateVelocity: () => Velocity | null;
}

export interface IControlEventHandler {
    gameKey: string;
    keyEvents: IKeyEvents[];

    init(): void;
    handleKeyPress(key: number): Velocity | null;
}

export interface ISpriteConfig {
  x: number;
  y: number;
  name: string;
}
