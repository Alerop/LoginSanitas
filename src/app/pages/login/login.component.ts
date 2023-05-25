import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { ILoginForm } from '@pages/login/components/login-form/interfaces/login-form.interface';
import { loginFormConstants } from '@pages/login/mocks/login-form.constants.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  altImage: string;
  titleImage: string;
  textTitle: string;
  formConfig: ILoginForm | null;

  constructor(public loginService: LoginService) {
    this.altImage = "A cat in the nature";
    this.titleImage = "A cat in the nature";
    this.textTitle = "Prueba ténica";
    this.formConfig = null;
  }

  ngOnInit(): void {
    this.subscribeToFormConfig();
  }

  /**
   * @name subscribeToFormConfig
   * @description
   * subscribe to request the config form
   * @memberof LoginComponent
   */
  subscribeToFormConfig() {
    this.loginService.requestFormConfig().subscribe({
      next: (config: ILoginForm) => {
        this.formConfig = config;
      },
      error: (err) => {
        // seems the api will never answer bc is worng i will just set the values
        this.formConfig = loginFormConstants;
        console.warn('wrong');
      },
      complete: () => {
        console.info('request complete');
      }
    });
  }
}
