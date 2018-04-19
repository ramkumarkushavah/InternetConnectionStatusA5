import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public onlineOffline: boolean = navigator.onLine;
  constructor() {
    window.addEventListener('online', () => {
      this.onlineOffline = true;
      console.log("You are online", this.onlineOffline);
    });
    window.addEventListener('offline', () => {
      this.onlineOffline = false;
      console.log("You are offline", this.onlineOffline);
    });
  }
}
