import { Armory } from './armory-interface';

export interface ArmoryAPI {
  equipment: Array<Armory>;
  index: string;
  name: string;
  url: string;
}
