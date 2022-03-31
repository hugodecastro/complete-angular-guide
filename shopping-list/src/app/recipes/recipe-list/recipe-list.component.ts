import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is Just a Test',
      'https://www.seriouseats.com/thmb/2OxF-UNLyWo2qMLSc6unSi7yH5o=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20160623-cubano-roast-pork-sandwich-recipe-19-57695d21e77947538db375d1d30b4bdf.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
