import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serverApp';
  header = 'Awsome';
  subHeader = 'App';

  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
  showOdds = false;
  value = 10;

  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }
}
