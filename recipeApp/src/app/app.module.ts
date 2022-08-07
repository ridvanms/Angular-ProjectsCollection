import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRountingModule } from './app-rounting.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/aut.component';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alet.component';
import { PlaceHolderDirective } from './shared/placeHolder/placeholder.directive';
import { RecipesModule } from './recipes/recepies.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DropdownDirective,

    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RecipesModule,
    ShoppingListModule,
  ],
  providers: [
    RecipeService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule {}
