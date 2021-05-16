import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Building } from '@galeon/data/enums';
import { Building as IBuilding } from '@galeon/data';

import { Planet } from '@/entities';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet) private repo: MongoRepository<Planet>,
  ) {}

  createOne({ name, ownerId }: Partial<Planet>): Promise<Planet> {
    const planet = new Planet();

    planet.name = name;

    planet.ownerId = ownerId;

    const defaultBuilding: IBuilding = {
      level: 0,
      resourceAmount: 0,
    };

    planet.buildings = {
      [Building.METAL_MINE]: defaultBuilding,
      [Building.CRYSTAL_MINE]: defaultBuilding,
      [Building.DEUTERIUM_SYNTHER]: defaultBuilding,
    };

    return this.repo.save(planet);
  }

  findByOwner(ownerId: string): Promise<Planet[]> {
    return this.repo.find({ ownerId });
  }
}
