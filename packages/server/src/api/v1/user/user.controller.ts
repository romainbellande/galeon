import { Controller, Post, UseGuards } from '@nestjs/common';

import { User } from '@/entities';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('User')
@ApiBearerAuth()
@Controller('')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(public service: UserService) {}

  @Post()
  public createOne(user: Partial<User>): Promise<User> {
    return this.service.createOne(user);
  }
}
