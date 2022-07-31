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

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStatrtComponent },
      { path: 'new', component: RecipesEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
