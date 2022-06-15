import { EventEmitter, Injectable, Output } from '@angular/core';

import { Recipe } from './recipe.mode';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe',
      'First Recipe',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'
    ),
    new Recipe(
      'Another Recipe',
      'Testing the second one',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'
    ),
    new Recipe(
      'One More Recipe',
      'Testing the last',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
