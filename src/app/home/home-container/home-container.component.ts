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

import { FruitService } from 'src/app/fruit.service';
import { FruitModel } from 'src/app/fruit.model';

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
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  // But we PROMISE we will declare this before we use it.
  loginForm!: FormGroup;

  fruits: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fruitService: FruitService
  ) {}

  debug: boolean = false;

  ngOnInit(): void {
    // Swapping out fruits
    this.fruitService
      .listOfFruit()
      .subscribe((some_data) => (this.fruits = some_data));

    // this.fruitService.getFruits().subscribe((data) => (this.myFruits = data));

    // This creates our own FormGroup object. Not sure which is better.
    this.loginForm = new FormGroup(
      {
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        password: new FormControl(
          null,
          [
            Validators.required,
            CustomValidators.forbiddenPhrase,
            CustomValidators.forbiddenPhraseValidatorFn('abcdef'),
          ]
          // CustomValidators.forbiddenPhraseValidatorFn('abcdef')
        ),
      },
      { updateOn: 'blur' }
    );
  }

  message = '';

  onClick(event: MouseEvent, value: string) {
    event.preventDefault();
    this.message = value;
  }

  onSubscribe(event: string) {
    console.log(`I also got your e-mail: ${event}`);
  }

  onSubmit() {}
}
