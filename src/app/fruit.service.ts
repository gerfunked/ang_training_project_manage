import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FruitModel } from './fruit.model';
import { FruitsStore } from './fruits.store';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor(private http: HttpClient, private fruitStore: FruitsStore) {}
  listOfFruit(): Observable<string[]> {
    return of([
      'French Fries',
      'Cheeseburgers',
      'Pizza',
      'Hot Dogs',
      'Cheetos',
    ]).pipe(delay(30));
  }

  // http://127.0.0.1:13000/fruits/1

  getFruits(): void {
    this.http
      .get<FruitModel[]>(`http://127.0.0.1:13000/fruits/`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe((data) => this.fruitStore.set(data));
  }

  //myFruits?: FruitModel[];

  // getFruits(): Observable<FruitModel[]>
  // {
  //   return of([
  //     this.myFruits;
  //   ]).pipe(delay(1500)).subscribe(data=> this.fruitStore.set(data));
  // }

  // getFruits(): void
  // {
  //   return this.myFruits;
  // }

  // getFruits(): void {

  //   this.http
  //     .get<FruitModel[]>('/')
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         alert(error.message);
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(data => this.fruitStore.set(data));
  // }

  //   getFruit(id: string) : void{
  //   this.http
  //     .get<FruitModel>(`${BaseUrl.hero}${id}`)
  //     .pipe(
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(data => this.heroStore.add(data));

  // }
  // getHero(id: string): void {
  //   this.http
  //     .get<HeroModel>(`${BaseUrl.hero}${id}`)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         alert(error.message);
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(data => this.heroStore.add(data));
  // }

  addFruit(fruit: FruitModel): void {}
  // addHero(hero: HeroModel): void {
  //   this.http
  //     .post<HeroModel>(`${BaseUrl.hero}`, hero)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         alert(error.message);
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(data => this.heroStore.add(data));
  // }

  // updateHero(hero: HeroModel): void {
  //   this.http
  //     .put<HeroModel>(`${BaseUrl.hero}${hero.id}`, hero)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         alert(error.message);
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(data => this.heroStore.update(hero.id, { ...data }));
  // }

  // removeHero(id: ID): void {
  //   this.http
  //     .delete<any>(`${BaseUrl.hero}${id}`)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         alert(error.message);
  //         return throwError(error.message);
  //       })
  //     )
  //     .subscribe(() => this.heroStore.remove(id));
  // }
}
