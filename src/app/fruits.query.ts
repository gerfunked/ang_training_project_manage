import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FruitsStore } from './fruits.store';
import { FruitsState, FruitModel } from './fruit.model';

@Injectable({ providedIn: 'root' })
export class FruitsQuery extends QueryEntity<FruitsState, FruitModel> {
  constructor(protected fruitsStore: FruitsStore) {
    super(fruitsStore);
  }
}
