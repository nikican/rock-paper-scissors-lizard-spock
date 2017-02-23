import { LocalStorageService } from '../../local-storage-service/local-storage.service';
import { Injectable } from '@angular/core';

import { RandomStrategy, HumanPlayer, GameType, AIPlayer, Gesture, GestureType, Game } from '../../model';

@Injectable()
export class GameService {

  // serves as model for component
  game: Game;

  constructor(private localStorageService: LocalStorageService) {
  }

  playerChoseGesture(chosenGesture: Gesture): void {
    this.game.player1.choseGesture(chosenGesture);
    this.game.player2.choseGesture();

    this.endRound();
  }

  AIsChoseGesture() {
    this.game.player1.choseGesture();
    this.game.player2.choseGesture();

    this.endRound();
  }

  endRound() {
    this.game.chosenGesture1 = this.game.player1.gesture;
    this.game.chosenGesture2 = this.game.player2.gesture;

    const result = this.determineRoundResult(this.game.chosenGesture1, this.game.chosenGesture2);

    this.publishRoundResult(result);

    this.saveGame();
  }

  determineRoundResult(gesture1: Gesture, gesture2: Gesture): number {
    const numOfGestures: number = this.game.gestures.length;

    // algorithm is relying on proper order of gesture types in GestureType enum
    // http://stackoverflow.com/questions/9553058/scalable-solution-for-rock-paper-scissor
    const algorithmResult: number = (numOfGestures + gesture1.gestureType - gesture2.gestureType) % numOfGestures;

    let result: number;

    // daw
    if (algorithmResult === 0) {

      result = 0;
    }
    // palyer1 wins
    else if (algorithmResult % 2 === 1) {
      result = 1;
    }
    // player2 wins
    else {
      result = 2;
    }

    return result;
  }

  publishRoundResult(result: number) {
    // draw
    if (result === 0) {
      this.game.roundResultMessage = 'It\'s a draw!';
    }
    // player1 wins
    else if (result === 1) {
      this.game.player1Score++;
      this.game.roundResultMessage = 'Player1 wins!';
    }
    // player2 wins
    else {
      this.game.player2Score++;
      this.game.roundResultMessage = 'Player2 wins!';
    }
  }

  resetGame(): void {
    this.game.chosenGesture1 = null;
    this.game.chosenGesture2 = null;
    this.game.player1Score = 0;
    this.game.player2Score = 0;

    this.game.roundResultMessage = this.game.defaultRoundResultMessage;
  }

  saveGame() {
    this.localStorageService.saveGame(this.game.gameType, this.game);
  }

  resetAndSaveGame() {
    this.resetGame();
    this.saveGame();
  }
}
