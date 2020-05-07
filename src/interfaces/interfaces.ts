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

export enum PlayerAction {
    FIRE_LASER = 'FIRE_LASER'
}

// Generic key interfaces
export interface IKeyEvents {
    key: number;
    action: PlayerAction;
}

export interface IControlEventHandler {
    gameKey: string;
    keyEvents: IKeyEvents[];

    init(): void;
    handleKeyPress(key: number): PlayerAction | null;
}

export interface ISpriteConfig {
  x: number;
  y: number;
  name: string;
}
