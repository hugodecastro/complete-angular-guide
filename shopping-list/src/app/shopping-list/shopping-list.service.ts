import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<
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
    this.ingredientsChanged.emit(this.ingredients.slice()); // inform the change on ingredient
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients); // spread the ingredients list
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
