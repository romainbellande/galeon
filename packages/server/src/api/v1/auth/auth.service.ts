import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '@/entities';
import { encrypt } from '@/utils/crypto';
import { isMatch } from '@/utils/hash';
import { UserDto } from '@/api/v1/user/user.dto';
import { UserService } from '@/api/v1//user/user.service';
import { AccessTokenResponse } from './access-token-response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const encryptedEmail: string = await encrypt(email);
    const user = await this.userService.findOne({ email: encryptedEmail });

    if (user && isMatch(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async signin(user: User): Promise<AccessTokenResponse> {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup({ email, pseudo, password }: UserDto): Promise<User> {
    return this.userService.createOne({
      email,
      pseudo,
      password,
    });
  }
}
