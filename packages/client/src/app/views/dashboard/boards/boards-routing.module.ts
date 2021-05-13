import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent } from './boards.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import(/* webpackChunkName: "board" */ './board/board.module').then(
        (m) => m.BoardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
