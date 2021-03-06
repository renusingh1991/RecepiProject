import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() RecipewasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe 1',
      'This is simply a test recipe1',
      'http://cookieandkate.com/images/2019/09/best-ratatouille-recipe-1-1.jpg'),
      new Recipe('Test recipe 2',
      'This is simply a test recipe2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      )
  ];
  ngOnInit() {
  }
  OnSelectedRecipe(recipe:Recipe)
  {
  
   this.RecipewasSelected.emit(recipe);

  }


}