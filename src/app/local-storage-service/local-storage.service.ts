import { Injectable } from '@angular/core';

import { Game, GameType } from '../model';
import { Gesture } from '../model/gesture';

@Injectable()
export class LocalStorageService {

  constructor() { }

  saveGame(gameType: GameType, game: Game) {
    const gameTypeKey = this.gameTypeKeyGenerator(gameType);

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(gameTypeKey, JSON.stringify(game));
    }
  }

  loadGame(gameType: GameType): Game {
    const gameTypeKey = this.gameTypeKeyGenerator(gameType);
    let game = null;

    if (this.isLocalStorageAvailable() && localStorage.getItem(gameTypeKey)) {
      game = new Game().deserialize(JSON.parse(localStorage.getItem(gameTypeKey)));
    }

    return game;
  }

  gameTypeKeyGenerator(gameType: GameType): string {
    return GameType[gameType];
  }

  saveActiveGame(gameType: GameType) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('activeGame', GameType[gameType]);
    }
  }

  loadActiveGame(): GameType {
    let gameType: GameType = null;

    if (this.isLocalStorageAvailable() && localStorage.getItem('activeGame')) {
      gameType = GameType[localStorage.getItem('activeGame')];
    }

    return gameType;
  }

  // check if browser supports localstorage
  isLocalStorageAvailable(): boolean {
    let isAvailable = false;

    try {
      const storage = window['localStorage'],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      isAvailable = true;
    } catch (e) {
    }

    return isAvailable;
  }
}