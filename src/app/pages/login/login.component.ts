import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  altImage: string;
  titleImage: string;
  textTitle: string;

  constructor() {
    this.altImage = "A cat in the nature";
    this.titleImage = "A cat in the nature";
    this.textTitle = "Prueba ténica";
  }
}
