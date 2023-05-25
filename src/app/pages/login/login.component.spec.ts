import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';
import { ILoginForm } from '@pages/login/components/login-form/interfaces/login-form.interface';
import { loginFormConstants } from '@pages/login/mocks/login-form.constants.mock';
import { of, throwError } from 'rxjs';
import { LoginFormModule } from './components/login-form/login-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LoginFormModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [LoginComponent],
      providers: [LoginService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to form config', () => {
    const testLoginForm: ILoginForm = {
      errorEmailRequired: "test",
      errorEmailFormat: "test",
      errorPasswordRequired: "test",
      errorPasswordMinLength: "test",
      reminderText: "test",
      submitText: "test",
      emailPlaceholder: "test",
      passwordPlaceholder: "test"
    };
    spyOn(loginService, 'requestFormConfig').and.returnValue(of(testLoginForm));

    component.ngOnInit();

    expect(loginService.requestFormConfig).toHaveBeenCalled();
    expect(component.formConfig).toEqual(testLoginForm);
  });

  it('should handle error when subscribing to form config', () => {
    spyOn(loginService, 'requestFormConfig').and.returnValue(throwError(() => 'error'));

    component.ngOnInit();

    expect(loginService.requestFormConfig).toHaveBeenCalled();
    expect(component.formConfig).toEqual(loginFormConstants);
  });
});