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

// Generic key interfaces
export enum VelocityDirection {
    X,
    Y
}

export interface IKeyEvents {
    key: number;
    updateVelocity: () => { velocity: number, direction: VelocityDirection } | null;
}

export interface IControlEventHandler {
    gameKey: string;
    keyEvents: IKeyEvents[];

    init(): void;
    handleKeyPress(key: number): { velocity: number, direction: VelocityDirection } | null;
}

export interface ISpriteConfig {
  x: number;
  y: number;
  name: string;
}
