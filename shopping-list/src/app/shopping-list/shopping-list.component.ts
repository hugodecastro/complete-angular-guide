import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(protected shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // listen to the ingredient added event
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]): void => {
        this.ingredients = ingredients;
      }
    );
  }
}
