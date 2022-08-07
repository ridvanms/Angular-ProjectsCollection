import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  styleUrls: ['./loading-spinner.css'],
  template:
    '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
})
export class LoadingSpinnerComponent {}
