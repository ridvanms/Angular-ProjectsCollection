import { sampleTime } from 'rxjs-compat/operator/sampleTime';
import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListAction from './shopping-list.actions';

const initialState = {
  ingredients: (Ingredient[''] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]),
};

export function ShoppingListReducer(
  state = initialState,
  action: ShoppingListAction.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListAction.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    default:
      return state;
  }
}
