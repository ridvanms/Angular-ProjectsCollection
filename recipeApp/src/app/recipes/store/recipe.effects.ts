<<<<<<< Updated upstream
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
      );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
=======
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { Recipe } from "../recipe.model";
import * as RecipeAction from "./recipe.actions";

@Injectable()
export class RecipeEffect {
  @Effect()
  fetchRecipe = this.actions$.pipe(
    ofType(RecipeAction.FETCH_RECIPE),
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
    map((recipe) => {
      return new RecipeAction.SetRecipes(recipe);
>>>>>>> Stashed changes
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
