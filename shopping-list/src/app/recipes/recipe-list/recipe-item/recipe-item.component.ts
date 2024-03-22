import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  // @Input decorator allows to bind property to outside
  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter<void>();

  onSelected(): void {
    this.recipeSelected.emit();
  }
}
