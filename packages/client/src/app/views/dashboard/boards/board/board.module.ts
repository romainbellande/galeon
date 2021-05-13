import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { PageModule } from '@/components/page/page.module';
import { CardListModule } from '@/components/card-list/card-list.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardTileModule } from '@/components/card-tile/card-tile.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    PageModule,
    CardListModule,
    DragDropModule,
    CardTileModule,
  ],
})
export class BoardModule {}
