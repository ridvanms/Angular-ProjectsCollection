import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
<<<<<<< HEAD
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
=======
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
<<<<<<< HEAD
    this.router.navigate(["new"], { relativeTo: this.route });
=======
    this.router.navigate(['new'], { relativeTo: this.route });
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
