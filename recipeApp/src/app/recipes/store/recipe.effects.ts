import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipe.model";

import * as FromApp from "../../store/app.reducer";
import * as RecipeActions from "./recipe.actions";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipe = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        "https://recipebook-10645-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      );
    }),
    map((recipes) => {
      return recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        };
      });
    }),
    map((recipes) => {
      return new RecipeActions.SetRecipes(recipes);
    })
  );
  @Effect({ dispatch: false })
  storeRecipe = this.actions$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select("recipes")),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        "https://recipebook-10645-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<FromApp.AppState>
  ) {}
}
