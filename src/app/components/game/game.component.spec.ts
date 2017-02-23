/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { LocalStorageService } from '../../local-storage-service/local-storage.service';
import { GameComponent } from './game.component';
import { GameService } from './game.service';
import { AIPlayer, Game, GameType, Gesture, GestureType, HumanPlayer, RandomStrategy } from '../../model';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameModelService: GameService;
  let debugElement: DebugElement;
  let element: HTMLElement;

  const mockHumanVsAIgame = new Game(GameType.HUMAN_VS_AI,
    new HumanPlayer(),
    new AIPlayer(new RandomStrategy(this.gestures)),
    [new Gesture(GestureType.ROCK)]
  );
  const mockAIvsAIgame = new Game(GameType.AI_VS_AI,
    new AIPlayer(new RandomStrategy(this.gestures)),
    new AIPlayer(new RandomStrategy(this.gestures)),
    [new Gesture(GestureType.ROCK)]
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
      providers: [GameService, LocalStorageService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

    gameModelService = fixture.debugElement.injector.get(GameService);
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('Reset Game button', () => {
    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('#resetBtn'));
      element = debugElement.nativeElement;
    });

    it('should call \'resetGame\' method on click', () => {
      spyOn(component, 'resetGame');

      debugElement.triggerEventHandler('click', null);
      expect(component.resetGame).toHaveBeenCalled();
    });

    it('should have \'Reset game\' text', () => {
      expect(element.textContent).toContain('Reset game');
    });
  });

  it('should have scoreboard', () => {
    debugElement = fixture.debugElement.query(By.css('rps-scoreboard'));

    expect(debugElement).toBeTruthy;
  });

  it('should have 2 player components', () => {
    const debugelements = fixture.debugElement.queryAll(By.css('rps-player'));

    expect(debugelements.length).toBe(2);
  });

  describe('GameComponent in Human vs AI mode', () => {
    beforeEach(() => {
      gameModelService.game = mockHumanVsAIgame;

      fixture.detectChanges();
    });

    it('should have gesture picker', () => {
      debugElement = fixture.debugElement.query(By.css('#gesturePicker'));

      expect(debugElement).toBeTruthy;
    });

    it('should have gestures as much as there are in model', () => {
      const debugElements = fixture.debugElement.queryAll(By.css('#gesture'));

      expect(debugElements.length).toBe(gameModelService.game.gestures.length);
    });

    it('should call \'onGestureClicked\' on click on gesture', () => {
      debugElement = fixture.debugElement.query(By.css('#gesture'));

      spyOn(component, 'onGestureClicked');

      debugElement.triggerEventHandler('click', null);
      expect(component.onGestureClicked).toHaveBeenCalled();
    });
  });

  describe('GameComponent in AI vs AI mode', () => {
    beforeEach(() => {
      gameModelService.game = mockAIvsAIgame;

      fixture.detectChanges();
    });

    it('should\'t have gesture picker', () => {
      debugElement = fixture.debugElement.query(By.css('#gesturePicker'));

      expect(debugElement).toBeFalsy;
    });

    it('should have button to trigger end of a round', () => {
      debugElement = fixture.debugElement.query(By.css('#AIfightBtn'));

      expect(debugElement).toBeTruthy;
    });

    it('should call \'onMakeAIsFightClicked\' on click on end round button', () => {
      debugElement = fixture.debugElement.query(By.css('#AIfightBtn'));

      spyOn(component, 'onMakeAIsFightClicked');

      debugElement.triggerEventHandler('click', null);
      expect(component.onMakeAIsFightClicked).toHaveBeenCalled();
    });
  });
});
