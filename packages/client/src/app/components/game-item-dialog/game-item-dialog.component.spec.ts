import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemDialogComponent } from './game-item-dialog.component';

describe('GameItemDialogComponent', () => {
  let component: GameItemDialogComponent;
  let fixture: ComponentFixture<GameItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
