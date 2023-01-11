import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-testing';
  btnText = "Subscribe";
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75];

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000);
  }
}
