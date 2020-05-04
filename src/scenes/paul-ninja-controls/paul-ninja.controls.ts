import * as Phaser from 'phaser';
import { Observable, of } from 'rxjs';

export class PaulNinjaControlEventHandler {

    constructor(sprite: Phaser.Physics.Matter.Sprite) {
        this._sprite = sprite;
    }

    private _sprite: Phaser.Physics.Matter.Sprite;
    private _key_mappings: { key: number, action: Function }[] = [
        {
            key: Phaser.Input.Keyboard.KeyCodes.LEFT,
            action: () => {
                return this._sprite.setVelocity(10);
            }
        }
    ];

    public createKeyEventObservables(): Observable<number[]> {
        return of(this._key_mappings.map(keyMapping => keyMapping.key));
    }

    
}