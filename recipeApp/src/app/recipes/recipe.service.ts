import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.mode';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe',
      'First Recipe',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Recipe',
      'Testing the second one',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0',
      [new Ingredient('Bean', 2), new Ingredient('Buns', 23)]
    ),
    new Recipe(
      'One More Recipe',
      'Testing the last',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 12)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridients(ingredients);
  }
}
