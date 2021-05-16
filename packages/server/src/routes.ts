import { Routes } from 'nest-router';
import { AuthModule } from './api/v1/auth/auth.module';
import { UserModule } from './api/v1/user/user.module';
import { PlanetModule } from './api/v1/planet/planet.module';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          {
            path: '/auth',
            module: AuthModule,
          },
          {
            path: '/users',
            module: UserModule,
          },
          {
            path: '/planets',
            module: PlanetModule,
          },
        ],
      },
    ],
  },
];
