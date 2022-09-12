import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const SET_RECIPES = "[Recipes] Set Recipes";
export const FETCH_RECIPES = "[Recipe] Fetch Recipe";
export const ADD_RECIPES = "[Recipe] Add Recipe";
export const UPDATE_RECIPES = "[Recipe] Update Recipe";
export const DELETE_RECIPES = "[Recipe] Delete Recipe";

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;

  constructor() {}
}
export class AddRecipe implements Action {
  readonly type = ADD_RECIPES;

  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPES;

  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPES;

  constructor(public payload: number) {}
}

export type RecipesActions =
  | SetRecipes
  | FetchRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe;
