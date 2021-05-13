import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoardCardModule } from '@/components/board-card/board-card.module';
import { BoardsRoutingModule } from './boards-routing.module';
import { PageModule } from '@/components/page/page.module';

@NgModule({
  declarations: [BoardsComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BoardCardModule,
    PageModule,
  ],
})
export class BoardsModule {}
