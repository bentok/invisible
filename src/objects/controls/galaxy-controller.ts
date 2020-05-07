// import { IControlEventHandler, IKeyEvents, VelocityDirection } from "../../interfaces/interfaces";

// export class GalaxyController implements IControlEventHandler {

//     gameKey: string = 'Galaxy';
//     keyEvents: IKeyEvents[] = [];

//     constructor() {
//      }

//     init(): void {
//         this.keyEvents = this.createKeyMappings();

//     }

//     handleKeyPress(key: number):{ velocity: number, direction: VelocityDirection } | null{
//         const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
//         const updatedVelocity = keyFound?.updateVelocity() ?? null;
//         return updatedVelocity;
//     }

//     private createKeyMappings(): IKeyEvents[] {
//         const KEY_MAPPINGS: IKeyEvents[] = [
//             {
//                 key: Phaser.Input.Keyboard.KeyCodes.LEFT,
//                 updateVelocity: () => {
//                     return { velocity: -10, direction: VelocityDirection.X };
//                 }
//             },
//             {
//                 key: Phaser.Input.Keyboard.KeyCodes.RIGHT,
//                 updateVelocity: () => {
//                     return { velocity: 10, direction: VelocityDirection.X }
//                 }
//             },
//             {
//                 key: Phaser.Input.Keyboard.KeyCodes.DOWN,
//                 updateVelocity: () => {
//                     return { velocity: 10, direction: VelocityDirection.Y }
//                 }
//             },
//             {
//                 key: Phaser.Input.Keyboard.KeyCodes.UP,
//                 updateVelocity: () => {
//                     return { velocity: -10, direction: VelocityDirection.Y }
//                 }
//             }
//         ]
//         return KEY_MAPPINGS;
//     }

// }