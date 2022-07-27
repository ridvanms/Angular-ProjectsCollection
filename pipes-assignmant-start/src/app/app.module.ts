import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RevorsePipe } from './revorse.pipe';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, RevorsePipe, SortPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
