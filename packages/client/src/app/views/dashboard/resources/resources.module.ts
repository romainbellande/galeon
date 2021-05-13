import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { PageModule } from '@/components/page/page.module';
import { GameItemTileModule } from '@/components/game-item-tile/game-item-tile.module';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    GameItemTileModule,
    PageModule,
  ],
})
export class ResourcesModule {}
