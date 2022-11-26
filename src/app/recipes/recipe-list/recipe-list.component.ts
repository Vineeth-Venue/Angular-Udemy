import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('Test Recipe','Testing the Recipe','http://www.expressfoodie.com/wp-content/uploads/2017/02/Chicken-Michael-W.-May-Flickr.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
