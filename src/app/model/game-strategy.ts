import { Gesture } from './gesture';

export interface GameStrategy {
    choseGesture(): Gesture;
}
