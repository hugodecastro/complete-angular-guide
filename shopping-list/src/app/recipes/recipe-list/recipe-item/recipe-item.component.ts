import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  // @Input decorator allows to bind property to outside
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected(): void {
    this.recipeService.getRecipeSelectedEvent().emit(this.recipe);
  }
}
