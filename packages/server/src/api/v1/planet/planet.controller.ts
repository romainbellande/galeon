import { Controller, Post, Body } from '@nestjs/common';
import { Planet } from '@/entities';

import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { PlanetService } from './planet.service';

class MyPlanets {
  @ApiProperty()
  ownerId: string;
}

@ApiTags('Planet')
@Controller('')
export class PlanetController {
  constructor(public service: PlanetService) {}

  @Post()
  myPlanets(@Body() { ownerId }: MyPlanets): Promise<Planet[]> {
    return this.service.findByOwner(ownerId);
  }
}
