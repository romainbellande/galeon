import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemTileComponent } from './game-item-tile.component';

describe('GameItemTileComponent', () => {
  let component: GameItemTileComponent;
  let fixture: ComponentFixture<GameItemTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
