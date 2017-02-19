/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScoreboardComponent } from './scoreboard.component';

describe('ScoreboardComponent', () => {
  let fixture: ComponentFixture<ScoreboardComponent>;
  let component: ScoreboardComponent;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ScoreboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have player1 score display element', () => {
    debugElement = fixture.debugElement.query(By.css('#player1Score'));

    expect(debugElement).toBeTruthy();
  });

  it('should display player1 score of 37', () => {
    component.player1Score = 37;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('#player1Score'));
    element = debugElement.nativeElement;

    expect(element.textContent).toContain(37);
  });

  it('should have player2 score display element', () => {
    debugElement = fixture.debugElement.query(By.css('#player2Score'));

    expect(debugElement).toBeTruthy();
  });

  it('should display player2 score of 37', () => {
    component.player2Score = 37;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('#player2Score'));
    element = debugElement.nativeElement;

    expect(element.textContent).toContain(37);
  });

  it('should have round result display element', () => {
    debugElement = fixture.debugElement.query(By.css('#roundResult'));

    expect(debugElement).toBeTruthy();
  });

  it('should display round result \' domination \'', () => {
    component.roundResultMessage = 'domination';

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('#roundResult'));
    element = debugElement.nativeElement;

    expect(element.textContent).toBe('domination');
  });
});
