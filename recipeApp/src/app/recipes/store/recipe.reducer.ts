import { Actions } from "@ngrx/effects";
import { StartEdit } from "src/app/shopping-list/store/shopping-list.actions";
import { Recipe } from "../recipe.model";
import * as RecipeActions from "./recipe.actions";

export interface State {
  recipes: Recipe[];
}
const initialState: State = {
  recipes: [],
};

export function recipeReducer(state, action) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case RecipeActions.ADD_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case RecipeActions.UPDATE_RECIPES:
      const updateRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe,
      };
      const updateRecipes = { ...state.recipes };
      updateRecipes[action.payload.index] = updateRecipe;
      return {
        ...state,
        recipes: updateRecipes,
      };
    case RecipeActions.DELETE_RECIPES:
      return {
        ...state,
        recipes: state.recipes.filter((recipes, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
}
