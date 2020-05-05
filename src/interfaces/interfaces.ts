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
export interface IKeyEvents {
    key: number;
    updatedSpritePosition: (oldX: number, oldY: number) => {xCoord: number, yCoord: number };
}

export interface IControlEventHandler {
    gameKey: string;
    keyEvents: IKeyEvents[];

    init(): void;
    handleKeyPress(key: number, oldX: number, oldY: number): { xCoord: number, yCoord: number};
}
