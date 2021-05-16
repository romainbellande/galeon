import { Column } from 'typeorm';
import { Building } from '@galeon/data/enums';
import { Building as BuildingEntity } from './building.embed';

export class Buildings {
  @Column(() => BuildingEntity)
  [Building.METAL_MINE]: BuildingEntity;

  @Column(() => BuildingEntity)
  [Building.CRYSTAL_MINE]: BuildingEntity;

  @Column(() => BuildingEntity)
  [Building.DEUTERIUM_SYNTHER]: BuildingEntity;
}
