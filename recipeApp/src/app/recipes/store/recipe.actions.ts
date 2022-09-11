import { Action } from '@ngrx/store';

<<<<<<< Updated upstream
import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
=======
export const SET_RECIPES = "[Recipes] Set Recipes";
export const FETCH_RECIPE = "[Recipe] Fetch Recipe";
>>>>>>> Stashed changes

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}
export class FetchRecipe implements Action {
  readonly type = FETCH_RECIPE;
}

<<<<<<< Updated upstream
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipesActions = SetRecipes;
=======
export type RecipesActions = SetRecipes | FetchRecipe;
>>>>>>> Stashed changes
