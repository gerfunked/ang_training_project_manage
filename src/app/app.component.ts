import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { FruitService } from './fruit.service';
import { FruitModel } from './fruit.model';

class CustomValidators {
  // How to generate a validation error without passing an argument
  static forbiddenPhrase(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (control.value.toLowerCase() === 'password') {
        return { forbiddenPhrase: true };
      }
    }
    return null;
  }

  // How to generate a validation error when passing an argument
  static forbiddenPhraseValidatorFn(phrase: string): ValidatorFn {
    return function forbiddenPhraser(
      control: AbstractControl
    ): ValidationErrors | null {
      if (control.value === phrase) {
        return { forbiddenPhraser: true };
      }
      return null;
    };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // You can declare null, but since it will be declared later, there is no need to
  // loginForm: FormGroup = null;

  // Or we could initiate it with empty junk.
  // loginForm: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  // });

  // But we PROMISE we will declare this before we use it.
  loginForm!: FormGroup;

  // We need to declare the fruitService, but promise it will be initialized before we use it.
  // fruitService!: FruitService;
  fruits: string[] = [];
  // myFruits: FruitModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fruitService: FruitService
  ) {}

  ngOnInit(): void {
    // Swapping out fruits
    this.fruitService
      .listOfFruit()
      .subscribe((some_data) => (this.fruits = some_data));

    // this.fruitService.getFruits().subscribe((data) => (this.myFruits = data));
  }

  title = 'Awesome Project';

  message = '';
}
