import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipeApp';
  bigText = 'Coding';

  loadedFeature: string = 'shopping-list';
  onNavigation(feature: string) {
    this.loadedFeature = feature;
  }
}
