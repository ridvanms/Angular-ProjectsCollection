import { sampleTime } from 'rxjs-compat/operator/sampleTime';
import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: (Ingredient[''] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]),
};

export function ShoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.type];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updatedIngredients = [state.ingredients];
      updatedIngredients[action.type] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== action.payload;
        }),
      };
    default:
      return state;
  }
}
