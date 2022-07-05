import {Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.mode';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'First Recipe',
      'https://www.timeoutabudhabi.com/public/images/2020/08/03/Blaze-Pizza1.jpg',
      [new Ingredient('Cheese', 1), new Ingredient('Olive', 20)]
    ),
    new Recipe(
      'Hot Soup',
      'Second Recipe',
      'https://th.bing.com/th/id/OIP.-iU39iMSiYCjIsuB_qS1ggHaE8?pid=ImgDet&rs=1',
      [new Ingredient('Pasta', 2), new Ingredient('Patatoes', 23)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridients(ingredients);
  }
}
