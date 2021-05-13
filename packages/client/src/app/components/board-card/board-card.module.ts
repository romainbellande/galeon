import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BoardCardComponent } from './board-card.component';

@NgModule({
  declarations: [BoardCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [BoardCardComponent],
})
export class BoardCardModule {}
