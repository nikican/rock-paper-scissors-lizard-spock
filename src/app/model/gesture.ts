import { GestureType } from './gesture-type';

export class Gesture {
    private _name: string;
    private _gestureType: GestureType;
    private _image: string;

    constructor(gestureType: GestureType, image?: string) {
        this._gestureType = gestureType;
        this._image = image;
    }

    get gestureType(): GestureType {
        return this._gestureType;
    }

    get name(): string {
        return GestureType[this.gestureType];
    }

    get image(): string {
        return this._image;
    }
}
