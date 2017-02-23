import { Gesture, GameStrategy, Player } from './';

export class HumanPlayer extends Player {
    __name__ = HumanPlayer.name;

    constructor(strategy?: GameStrategy) {
        super('Human', strategy);
    }

    choseGesture(value: Gesture) {
        this._gesture = value;
    }

    deserialize(input): HumanPlayer {
        return super.deserialize(input);
    }
}
