import { ReturnStatement } from "@angular/compiler";
import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
  ]
};

export function ShoppingListReducer(state = initialState, action) {
  switch(action.type){
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients,action]
      }
  }
}
