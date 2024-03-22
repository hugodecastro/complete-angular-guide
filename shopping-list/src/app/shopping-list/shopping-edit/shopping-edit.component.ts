import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  onAddItem(): void {
    const ingredientName: string = (<HTMLInputElement>(
      this.nameInputReference.nativeElement
    )).value;
    const ingredientAmount: string = (<HTMLInputElement>(
      this.amountInputReference.nativeElement
    )).value;

    const newIngredient = new Ingredient(
      ingredientName,
      Number(ingredientAmount)
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
