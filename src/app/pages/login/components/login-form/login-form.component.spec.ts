import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule
      ],
      declarations: [LoginFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log "OK" when form is valid and submitForm is called', () => {
    spyOn(console, 'log');

    component.formGroup.setValue({
      email: 'test@example.com',
      password: 'password123',
      reminder: false
    });
    component.submitForm();

    expect(console.log).toHaveBeenCalledWith('OK');
  });

  it('should log formGroup and "no" when form is invalid and submitForm is called', () => {
    spyOn(console, 'log');

    component.submitForm();

    expect(console.log).toHaveBeenCalledWith(component.formGroup);
    expect(console.log).toHaveBeenCalledWith('no');
  });
});