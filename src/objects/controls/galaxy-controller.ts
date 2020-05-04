import { IControlEventHandler, IKeyEvents } from "../../interfaces/interfaces";
import { of, Observable } from "rxjs";
import { Physics } from "phaser";

export class GalaxyController implements IControlEventHandler {

    gameKey: string = 'Galaxy';
    keyEvents: IKeyEvents[] = [];

    private _spriteInstance: Phaser.Physics.Matter.Sprite;

    constructor(sprite: Phaser.Physics.Matter.Sprite) {
        this._spriteInstance = sprite;
     }

    init(): void {
        this.keyEvents = this.createKeyMappings();

    }

    handleKeyPress(key: number): void {
        const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
        keyFound?.updatedSprite();
    }

    private createKeyMappings(): IKeyEvents[] {
        const KEY_MAPPINGS: IKeyEvents[] = [
            {
                key: Phaser.Input.Keyboard.KeyCodes.LEFT,
                updatedSprite: () => {
                    this._spriteInstance.setVelocity(-10);
                }
            }
        ]
        return KEY_MAPPINGS;
    }

}