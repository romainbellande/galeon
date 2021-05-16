import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import { routes } from './routes';
import { UserModule } from './api/v1/user/user.module';
import { IsUnique } from './utils/validators/is-unique';
import { AuthModule } from './api/v1/auth/auth.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    RouterModule.forRoutes(routes),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [IsUnique],
})
export class AppModule {}
