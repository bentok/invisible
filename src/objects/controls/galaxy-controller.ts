import { IControlEventHandler, IKeyEvents } from "../../interfaces/interfaces";

export class GalaxyController implements IControlEventHandler {

    gameKey: string = 'Galaxy';
    keyEvents: IKeyEvents[] = [];

    constructor() {
     }

    init(): void {
        this.keyEvents = this.createKeyMappings();

    }

    handleKeyPress(key: number, oldX: number, oldY: number):{ xCoord: number, yCoord: number } {
        const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
        const newCoord = keyFound?.updatedSpritePosition(oldX, oldY);
        return !!newCoord ? newCoord : { xCoord: oldX, yCoord: oldY };
    }

    private createKeyMappings(): IKeyEvents[] {
        const KEY_MAPPINGS: IKeyEvents[] = [
            {
                key: Phaser.Input.Keyboard.KeyCodes.LEFT,
                updatedSpritePosition: (x: number, y: number) => {
                    const xCoord = x - 10 >= 0 ? x - 10 : 0;
                    return { xCoord, yCoord: y };
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                updatedSpritePosition: (x: number, y: number) => {
                    return { xCoord: x + 10, yCoord: y };
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.DOWN,
                updatedSpritePosition: (x: number, y: number) => {
                    return { xCoord: x, yCoord: y + 10 };
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.UP,
                updatedSpritePosition: (x: number, y: number) => {
                    const yCoord = y - 10 >= 0 ? y - 10 : 0;
                    return { xCoord: x, yCoord };
                }
            }
        ]
        return KEY_MAPPINGS;
    }

}