import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngreditents() {
    return this.ingredients.slice();
  }
  addingIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
