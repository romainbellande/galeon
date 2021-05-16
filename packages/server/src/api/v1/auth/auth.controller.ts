import { User } from '@/entities';
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../user/user.dto';
import { AccessTokenResponse } from './access-token-response';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Credentials } from './models/credentials';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: Credentials })
  @ApiResponse({ type: AccessTokenResponse })
  @Post('/signin')
  async signin(@Request() req): Promise<AccessTokenResponse> {
    return this.authService.signin(req.user);
  }

  @Post('/signup')
  @ApiResponse({ type: User })
  async signup(@Body() userDto: UserDto) {
    return this.authService.signup(userDto);
  }
}
