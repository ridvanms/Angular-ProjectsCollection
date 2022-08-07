import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { AlertComponent } from './alert/alet.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceHolderDirective } from './placeHolder/placeholder.directive';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
