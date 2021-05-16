import { Test, TestingModule } from '@nestjs/testing';
import { PlanetController } from './planet.controller';
import { getRepositoryToken } from '@nestjs/typeorm';

import { PlanetService } from './planet.service';
import { Planet } from '@/entities';
import { MockRepository } from '@/utils/testing/mock-repository';

describe('Planet Controller', () => {
  let controller: PlanetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [
        PlanetService,
        {
          provide: getRepositoryToken(Planet),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<PlanetController>(
      PlanetController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
