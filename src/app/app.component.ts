import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'angular-seminari6';
  loggedin: boolean = false;

  getLoggedIn(loggedin: boolean) {
    this.loggedin = loggedin;
  }

  logout() {
    this.loggedin = false;
  }
}
