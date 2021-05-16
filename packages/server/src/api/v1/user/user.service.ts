import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { User } from '@/entities';
import { PlanetService } from '../planet/planet.service';
import { decrypt } from '@/utils/crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private repo: MongoRepository<User>,
    private planetService: PlanetService,
  ) {}

  async createOne({ email, pseudo, password }: Partial<User>): Promise<User> {
    const user = new User();

    user.email = email;
    user.pseudo = pseudo;
    user.password = password;

    const res = await this.repo.save(user);

    await this.planetService.createOne({
      name: 'Homeworld',
      ownerId: res.id.toString(),
    });

    res.id = res.id.toString();
    res.email = email;
    res.pseudo = pseudo;

    return res;
  }

  findOne(user: Partial<User>): Promise<User> {
    return this.repo.findOne(user);
  }
}
