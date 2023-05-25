import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { ILoginForm } from '@pages/login/components/login-form/interfaces/login-form.interface';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    loginService = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should make a GET request to the form config endpoint', () => {
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

    loginService.requestFormConfig().subscribe(formConfig => {
      expect(formConfig).toEqual(testLoginForm);
    });

    const req = httpMock.expectOne('/es/login/config');
    expect(req.request.method).toBe('GET');
    req.flush(testLoginForm);
  });
});