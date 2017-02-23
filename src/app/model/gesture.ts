import { Serializable } from './serializable';
import { GestureType } from './gesture-type.enum';

export class Gesture implements Serializable<Gesture> {
    __name__ = Gesture.name;

    private _name: string;

    private _gestureType: GestureType;

    private _image: string;

    get gestureType(): GestureType {
        return this._gestureType;
    }

    get name(): string {
        return GestureType[this.gestureType];
    }

    get image(): string {
        return this._image;
    }

    constructor(gestureType?: GestureType, image?: string) {
        this._gestureType = gestureType;
        this._image = image;
    }

    deserialize(input): Gesture {
        this._gestureType = input._gestureType;
        this._image = input._image;

        return this;
    }
}
