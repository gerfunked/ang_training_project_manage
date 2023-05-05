import { ID, EntityState } from '@datorama/akita';

export type FruitModel = {
  id: ID;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

export interface FruitsState extends EntityState<FruitModel> {}
