import { Component, Inject, OnInit } from '@angular/core';
// import { FruitsState } from 'src/app/fruit.model';
// import { FruitService } from 'src/app/fruit.service';
// import { FruitModel } from 'src/app/fruit.model';
// import { FruitListComponent } from 'src/app/fruit-list/fruit-list.component';
// import { Injectable } from '@angular/core';
// import { ID } from '@datorama/akita';
// import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
// import { User } from 'src/app/shared/stores/general/user.model';
// import { UsersStore } from 'src/app/shared/stores/general/users.store';

@Component({
  selector: 'app-akita-sb',
  templateUrl: './akita-sb.component.html',
  styleUrls: ['./akita-sb.component.css'],
})

// @Injectable({ providedIn: 'root' })
export class AkitaSbComponent implements OnInit {
  currentValue: string = 'I am the current value';
  aNewValue: string = 'I am the new value';
  // newUser!: User;
  constructor() {}

  ngOnInit(): void {
    this.aNewValue = 'Another new value';
  }
}
