import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTileComponent } from './card-tile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [CardTileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [CardTileComponent],
})
export class CardTileModule {}
