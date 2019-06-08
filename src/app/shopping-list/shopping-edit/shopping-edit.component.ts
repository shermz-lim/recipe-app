import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value));
  }

}
