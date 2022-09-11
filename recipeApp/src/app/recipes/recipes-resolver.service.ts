import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

<<<<<<< Updated upstream
import { Recipe } from './recipe.model';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';
=======
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";
import { Store } from "@ngrx/store";

import * as FromApp from "../store/app.reducer";
import * as RecipeActions from "./store/recipe.actions";
import { Recipe } from "./recipe.model";
import { Actions, ofType } from "@ngrx/effects";
import { take } from "rxjs/operators";
>>>>>>> Stashed changes

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
<<<<<<< Updated upstream
    private store: Store<fromApp.AppState>,
=======
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService,
    private store: Store<FromApp.AppState>,
>>>>>>> Stashed changes
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
<<<<<<< Updated upstream
    // return this.dataStorageService.fetchRecipes();
    this.store.dispatch(new RecipesActions.FetchRecipes());
    return this.actions$.pipe(
      ofType(RecipesActions.SET_RECIPES),
      take(1)
    );
=======
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      // return this.dataStorageService.fetchRecipes();
      this.store.dispatch(new RecipeActions.FetchRecipe());
      return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
    } else {
      return recipes;
    }
>>>>>>> Stashed changes
  }
}
