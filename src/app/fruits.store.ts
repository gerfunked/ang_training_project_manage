import { EntityStore, StoreConfig } from '@datorama/akita';
import { FruitsState, FruitModel } from './fruit.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'fruits' })
export class FruitsStore extends EntityStore<FruitsState, FruitModel> {
  constructor() {
    super();
  }
}
