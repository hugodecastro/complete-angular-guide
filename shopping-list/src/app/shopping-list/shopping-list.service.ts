import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient); // at this point we are pushing to the copy, not to the original
    this.ingredientChanged.emit(this.ingredients.slice()); // inform the change on ingredient
  }
}
