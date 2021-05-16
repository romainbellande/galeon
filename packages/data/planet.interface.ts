import { User } from './user.interface';
import { Buildings } from './buildings.type';

export interface Planet {
  name: string;

  ownerId: string;

  buildings: Buildings;
}
