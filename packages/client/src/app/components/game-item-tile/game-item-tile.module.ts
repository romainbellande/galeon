import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GameItemDialogModule } from '@/components/game-item-dialog/game-item-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '@/shared.module';
import { GameItemTileComponent } from './game-item-tile.component';

@NgModule({
  declarations: [GameItemTileComponent],
  imports: [
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    GameItemDialogModule,
  ],
  exports: [GameItemTileComponent],
})
export class GameItemTileModule {}
