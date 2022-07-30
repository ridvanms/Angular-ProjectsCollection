import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.mode';
import { RecipesComponent } from '../recipes/recipes.component';
import { map } from 'rxjs-compat/operator/map';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-81928-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipe() {
    this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-81928-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      // .pipe(
      //   map((recipes) => {
      //     return recipes.map((recipe) => {
      //       return {
      //         ...recipe,
      //         ingredients: recipe.ingredients ? recipe.ingredients : [],
      //       };
      //     });
      //   })
      // )
      .subscribe((recipes) => {
        this.recipeService.setRecieps(recipes);
      });
  }
}
