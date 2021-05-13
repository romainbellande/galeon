import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(/* webpackChunkName: "home" */ './home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'boards',
        loadChildren: () =>
          import(
            /* webpackChunkName: "boards" */ './boards/boards.module'
          ).then((m) => m.BoardsModule),
      },
      {
        path: 'resources',
        loadChildren: () =>
          import(
            /* webpackChunkName: "resources" */ './resources/resources.module'
          ).then((m) => m.ResourcesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
