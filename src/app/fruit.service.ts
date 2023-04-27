import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor() {}
  list(): Observable<string[]> {
    return of([
      'French Fries',
      'Cheeseburgers',
      'Pizza',
      'Hot Dogs',
      'Cheetos',
    ]).pipe(delay(3000));
  }
}
