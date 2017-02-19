import { GameStrategy } from './game-strategy';
import { Gesture } from './gesture';

export abstract class Player {
    constructor(public name: string, strategy?: GameStrategy) {

    }

    abstract choseGesture(value?: Gesture);
    abstract get gesture(): Gesture;
}
