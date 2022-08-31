import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
<<<<<<< HEAD
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
=======
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
<<<<<<< HEAD
      this.id = +params["id"];
=======
      this.id = +params['id'];
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
<<<<<<< HEAD
    this.router.navigate(["edit"], { relativeTo: this.route });
=======
    this.router.navigate(['edit'], { relativeTo: this.route });
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
