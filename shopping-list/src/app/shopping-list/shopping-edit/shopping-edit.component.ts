import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

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
    this.shoppingListService.addIngredient(newIngredient);
  }
}
