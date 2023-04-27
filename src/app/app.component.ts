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

  constructor(
    private formBuilder: FormBuilder,
    private fruitService: FruitService
  ) {}

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   username: new FormControl(),
    //   password: new FormControl(),
    // });

    // This uses the passed in formBuilder Object. You need to pass in formBuilder in with the constructor
    // this.loginForm = this.formBuilder.group(
    //   {
    //     username: [null, Validators.required],
    //     password: [null, Validators.required],
    //   },
    //   { updateOn: 'blur' }
    // );

    // fruits: string [] = ['Potatoe', 'Carrot', 'Squash', 'Gummy'];
    // Swapping out fruits
    this.fruits = this.fruitService.list();

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

  title = 'Awesome Project';

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
