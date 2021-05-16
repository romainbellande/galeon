import { Building } from './enums';
import { Building as IBuilding } from './building.interface';

export type Buildings = {
  [key in Building]: IBuilding;
};
