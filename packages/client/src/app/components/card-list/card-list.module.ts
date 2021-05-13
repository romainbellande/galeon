import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardListComponent } from './card-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [CardListComponent],
})
export class CardListModule {}
