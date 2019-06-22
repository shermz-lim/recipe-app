import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut felis feugiat, ultrices arcu eu, rutrum sapien. \
            Praesent ligula arcu, blandit ac enim ornare, rhoncus ullamcorper velit. Cras tristique ut quam a gravida',
            'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            [new Ingredient('banana', 5), new Ingredient('chicken', 5)]),
        new Recipe(
            'Healthy Salad', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut felis feugiat, ultrices arcu eu, rutrum sapien. \
            Praesent ligula arcu, blandit ac enim ornare, rhoncus ullamcorper velit. Cras tristique ut quam a gravida',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            [new Ingredient('banana', 5), new Ingredient('chicken', 5)])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
