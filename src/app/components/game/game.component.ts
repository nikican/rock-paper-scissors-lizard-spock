import { Component, Input, OnInit } from '@angular/core';

import { GameService } from './game.service';
import { Game, GameType, Gesture } from '../../model';

@Component({
  selector: 'rps-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService],
})
export class GameComponent implements OnInit {

  private _game: Game;

  @Input()
  get game(): Game {
    return this._game;
  }

  set game(value: Game) {
    this.gameService.game = value;
  }

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this._game = this.gameService.game;
  }

  isHumanVSAI(): boolean {
    return this.gameService.game.gameType === GameType.HUMAN_VS_AI;
  }

  onGestureClicked(playersGesture: Gesture): void {
    this.gameService.playerChoseGesture(playersGesture);
  }

  resetGame(): void {
    this.gameService.resetAndSaveGame();
  }

  onMakeAIsFightClicked() {
    this.gameService.AIsChoseGesture();
  }
}
