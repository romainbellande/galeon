import { User } from '@/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PlanetModule } from '../planet/planet.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PlanetModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
