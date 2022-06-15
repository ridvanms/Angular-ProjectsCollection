import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.mode';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  recipe = [];

  constructor(private recipeServer: RecipeService) {}

  ngOnInit() {
    this.recipeServer.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
}
