import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Cool Recipe', 
            'This is a cool recipe!',
            'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            [new Ingredient('banana', 5), new Ingredient('chicken', 5)]),
        new Recipe(
            'Coolest Recipe', 
            'This is a cool recipe!',
            'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            [new Ingredient('banana', 5), new Ingredient('chicken', 5)])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}
