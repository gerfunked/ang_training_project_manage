import { Component, Input } from '@angular/core';
import { FruitsStore } from '../fruits.store';
import { FruitService } from '../fruit.service';
import { FruitModel } from '../fruit.model';
@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent {
  @Input()
  fruits: string[] = [];

  myFruits: FruitModel[] = [];

  // constructor(private fruitService: FruitService) {}
  constructor(private fruitStore: FruitsStore) {}

  // this.myFruits = this.fruitService.
  // this.fruitService
  // .listOfFruit()
  // .subscribe((data) => (this.myFruits = data));

  // fService = new FruitService();

  // // theFruits = FruitsStore.length
  // someFruits = FruitService().getFruits();
}
