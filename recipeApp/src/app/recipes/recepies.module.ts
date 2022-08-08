import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStatrtComponent } from './recipe-statrt/recipe-statrt.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStatrtComponent,
    RecipesEditComponent,
  ],
  imports: [RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStatrtComponent,
    RecipesEditComponent,
  ],
})
export class RecipesModule {}
