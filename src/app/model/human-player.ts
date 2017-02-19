import { Gesture } from './gesture';
import { Player } from './player';

export class HumanPlayer extends Player {
    private _gesture: Gesture;

    constructor() {
        super('Human');
    }

    get gesture(): Gesture {
        return this._gesture;
    }

    choseGesture(value: Gesture) {
        this._gesture = value;
    }
}
