import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor() {}
  item_list(): string[] {
    return ['French Fries', 'Cheeseburgers', 'Pizza', 'Hot Dogs'];
  }
}
