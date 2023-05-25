import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() emailPlaceholder!: string | undefined;
  @Input() passwordPlaceholder!: string | undefined;
  @Input() errorEmailRequired!: string | undefined;
  @Input() errorEmailFormat!: string | undefined;
  @Input() errorPasswordRequired!: string | undefined;
  @Input() errorPasswordMinLength!: string | undefined;
  @Input() reminderText!: string | undefined;
  @Input() submitText!: string | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit() {
    this.createForm();
  }

  get emailInput(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get passwordInput(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  /**
   * @name createForm
   * @description
   * Create default login form
   * @memberof LoginFormComponent
   */
  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      reminder: [false]
    },
      { updateOn: 'submit' });
  }

  /**
   * @name validateAllFormField
   * @description
   * Validate all form fields
   * @param {FormGroup} form
   * @memberof LoginFormComponent
   */
  validateAllFormField(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormControl;
      control.markAsTouched({ onlySelf: true });
    });
  }

  /**
   * @name submitForm
   * @description
   * Submit form
   * @memberof LoginFormComponent
   */
  submitForm(): void {
    if (this.formGroup.valid) {
      console.log('OK');
    } else {
      this.validateAllFormField(this.formGroup);
      console.log(this.formGroup);

      console.log('no');
      // Display error messages or perform other actions
    }
  }

}
