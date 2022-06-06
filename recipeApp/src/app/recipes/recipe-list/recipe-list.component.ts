import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simple test',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'
    ),
    new Recipe(
      'A test Recipe',
      'This is a simple test',
      'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
