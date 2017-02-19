/* tslint:disable:no-unused-letiable */
import { TestBed, async, inject } from '@angular/core/testing';

import { AIPlayer, Game, GameType, Gesture, GestureType, HumanPlayer, RandomStrategy } from '../../model';
import { GameService } from './game.service';

describe('GameService', () => {
  let gameService: GameService;

  const mockHumanVsAIgame = new Game(GameType.HUMAN_VS_AI,
    new HumanPlayer(),
    new AIPlayer(new RandomStrategy(this.gestures)),
    [
      new Gesture(GestureType.ROCK, 'fa fa-hand-rock-o'),
      new Gesture(GestureType.PAPER, 'fa fa-hand-paper-o'),
      new Gesture(GestureType.SCISSORS, 'fa fa-hand-scissors-o'),
      new Gesture(GestureType.LIZARD, 'fa fa-hand-lizard-o'),
      new Gesture(GestureType.SPOCK, 'fa fa-hand-spock-o')]
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  beforeEach(inject([GameService], gps => {
    gameService = gps;

    gameService.game = mockHumanVsAIgame;
  }));

  it('should have game', () => {
    expect(gameService.game).toBeTruthy();
  });

  it('should access game\'s gestures', () => {
    expect(gameService.game.gestures.length).toBe(mockHumanVsAIgame.gestures.length);
  });

  ////////// resetGame ////////////
  describe('call of \'resetGame\' method', () => {

    beforeEach(() => {
      gameService.resetGame();
    });

    it('shoud set game\'s choosenGesture1 to null', () => {
      expect(gameService.game.chosenGesture1).toBeNull;
    });

    it('shoud set game\'s choosenGesture2 to bull', () => {
      expect(gameService.game.chosenGesture2).toBeNull;
    });

    it('shoud set game\'s player1Score to 0', () => {
      expect(gameService.game.player1Score).toBe(0);
    });

    it('shoud set game\'s player2Score to 0', () => {
      expect(gameService.game.player1Score).toBe(0);
    });
  });

  /////////// determineRoundResult //////////
  describe('A suite for \'determineRoundResult\' method', () => {
    let gesture1;
    let gesture2;

    it('expects ROCK to beat SCISSORS', () => {
      gesture1 = new Gesture(GestureType.ROCK, '');
      gesture2 = new Gesture(GestureType.SCISSORS, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(1);
    });

    it('expects SCISSORS to beat PAPER', () => {
      gesture1 = new Gesture(GestureType.PAPER, '');
      gesture2 = new Gesture(GestureType.SCISSORS, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(2);
    });

    it('expects PAPER to beat ROCK', () => {
      gesture1 = new Gesture(GestureType.PAPER, '');
      gesture2 = new Gesture(GestureType.ROCK, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(1);
    });

    it('expects PAPER is equal to PAPER', () => {
      gesture1 = new Gesture(GestureType.PAPER, '');
      gesture2 = new Gesture(GestureType.PAPER, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(0);
    });

    it('expects PAPER to beat to SPOCK', () => {
      gesture1 = new Gesture(GestureType.PAPER, '');
      gesture2 = new Gesture(GestureType.SPOCK, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(1);
    });

    it('expects LIZARD to beat to SPOCK', () => {
      gesture1 = new Gesture(GestureType.LIZARD, '');
      gesture2 = new Gesture(GestureType.SPOCK, '');

      expect(gameService.determineRoundResult(gesture1, gesture2)).toBe(1);
    });
  });

  describe('A spy for \'determineRoundResult\' method', () => {
    let gesture1;
    let gesture2;

    beforeEach(() => {
      spyOn(gameService, 'determineRoundResult');

      gesture1 = new Gesture(GestureType.ROCK, '');
      gesture2 = new Gesture(GestureType.PAPER, '');

      gameService.determineRoundResult(gesture1, gesture2);
    });

    it('tracks that the spy was called', () => {
      expect(gameService.determineRoundResult).toHaveBeenCalled();
    });

    it('tracks all the arguments of its calls', () => {
      expect(gameService.determineRoundResult).toHaveBeenCalledWith(gesture1, gesture2);
    });
  });

  //////////////// publishRoundResults ////////////////
  describe('suite for \'publishRoundRedults\' method', () => {
    beforeEach(() => {
      gameService.game.roundResultMessage = '';
    });

    it('should change gameService.game.roundResultMessage to \'It\'s a draw!\' when result is draw', () => {
      gameService.publishRoundResult(0);

      expect(gameService.game.roundResultMessage).toEqual('It\'s a draw!');
    });

    it('should change gameService.game.roundResultMessage to \'Player1 wins!\' when Player1 wins', () => {
      gameService.publishRoundResult(1);

      expect(gameService.game.roundResultMessage).toEqual('Player1 wins!');
    });

    it('should change gameService.game.roundResultMessage to \'Player2 wins!\' when Player2 wins', () => {
      gameService.publishRoundResult(2);

      expect(gameService.game.roundResultMessage).toEqual('Player2 wins!');
    });

    it('should increase gameService.game.player1Score when Player1 wins', () => {
      const player1Score = gameService.game.player1Score;

      gameService.publishRoundResult(1);

      expect(gameService.game.player1Score).toEqual(player1Score + 1);
    });

    it('should increase gameService.game.player2Score when Player2 wins', () => {
      const player2Score = gameService.game.player2Score;

      gameService.publishRoundResult(2);

      expect(gameService.game.player2Score).toEqual(player2Score + 1);
    });
  });
});
