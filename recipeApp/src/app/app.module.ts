import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import * as fromApp from "./store/app.reducer";
import { AuthEffects } from "./auth/store/auth.effects";
<<<<<<< Updated upstream
import { environment } from "../environments/environment";
import { RecipeEffects } from "./recipes/store/recipe.effects";
=======
import { RecipeEffect } from "./recipes/store/recipe.effects";
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
<<<<<<< Updated upstream
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),

=======
    EffectsModule.forRoot([AuthEffects, RecipeEffect]),
>>>>>>> Stashed changes
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
