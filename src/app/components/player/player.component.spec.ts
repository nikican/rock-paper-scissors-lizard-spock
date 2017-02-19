/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayerComponent } from './player.component';
import { HumanPlayer, Gesture, GestureType, AIPlayer } from '../../model';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let mockGesture: Gesture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    mockGesture = new Gesture(GestureType.SPOCK, 'fa fa-hand-spock-o');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have placeholder text for gesture', () => {
    debugElement = fixture.debugElement.query(By.css('p'));
    element = debugElement.nativeElement;

    expect(element.textContent).toBe('... is thinking.');
  });

  it('should display player\'s name', () => {
    component.player = new HumanPlayer();
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('h1'));
    element = debugElement.nativeElement;

    expect(element.textContent).toBe('Human');
  });

  it('should have gesture\'s image as class', () => {
    component.gesture = mockGesture;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('i'));
    element = debugElement.nativeElement;

    expect(element.getAttribute('class')).toBe('fa fa-hand-spock-o');
  });

  it('should\'t have placeholder for gesture', () => {
    component.gesture = mockGesture;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'));

    expect(debugElement).not.toBe;
  });
});
