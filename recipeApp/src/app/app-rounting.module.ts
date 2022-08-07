import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStatrtComponent } from './recipes/recipe-statrt/recipe-statrt.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { Recipe } from './recipes/recipe.mode';
import { AuthComponent } from './auth/aut.component';
import { AuthGuard } from './auth/auth.guard';
import { SharedModule } from './shared/shared.module';
import { RecipesRoutingModule } from './recipes/recepies-rounting.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    SharedModule,
    RecipesRoutingModule,
  ],
  exports: [RouterModule, RecipesRoutingModule],
})
export class AppRountingModule {}
