import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GameItemDialogComponent } from './game-item-dialog.component';
import { SharedModule } from '@/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [GameItemDialogComponent],
  imports: [SharedModule, MatButtonModule, MatDividerModule, MatTableModule],
  exports: [GameItemDialogComponent],
})
export class GameItemDialogModule {}
