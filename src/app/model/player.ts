import { Serializable, GameStrategy, Gesture } from './';

import * as model from './';

export abstract class Player implements Serializable<Player> {
    __name__ = Player.name;

    protected _gesture: Gesture;

    constructor(public name: string, public strategy?: GameStrategy) {

    }

    get gesture(): Gesture {
        return this._gesture;
    }

    abstract choseGesture(value?: Gesture);

    deserialize(input): Player {
        this.name = input.name;

        // '!=' checks for null or undefined
        if (input.strategy != null) {
            this.strategy = new model[input.strategy.__name__]().deserialize(input.strategy);
        }

        this._gesture = input._gesture;

        return this;
    }
}
