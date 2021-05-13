import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameItemDialogComponent } from '@/components/game-item-dialog/game-item-dialog.component';

@Component({
  selector: 'app-game-item-tile',
  templateUrl: './game-item-tile.component.html',
  styleUrls: ['./game-item-tile.component.scss'],
})
export class GameItemTileComponent {
  @Input()
  public name!: string;

  @Input()
  public level!: number;

  constructor(public dialog: MatDialog) {}

  openGameItemDialog(): void {
    this.dialog.open(GameItemDialogComponent, {
      width: '45rem',
      data: {
        name: this.name,
        level: this.level,
      },
    });
  }
}
