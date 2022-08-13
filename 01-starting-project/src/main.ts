import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';

import { AppComponent } from './app/app.component';
// import { AnalyticsService } from './app/shared/analytics.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    //  AnalyticsService,
    importProvidersFrom(AppRoutingModule),
  ],
});
