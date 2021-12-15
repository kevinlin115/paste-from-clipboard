import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textArray = [] as string[];

  getFromClipboard() {
    navigator.clipboard.readText().then(res => {
      this.textArray.unshift(res);
    })
  }


}
