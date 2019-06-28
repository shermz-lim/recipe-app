import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class StorageService {
    recipeUrl = 'https://recipe-app-896ab.firebaseio.com/recipes.json';

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    saveRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.recipeUrl, recipes).subscribe(
            (responseData) => {
                console.log(responseData);
            }
        );
    }

    fetchRecipes() {
        this.http.get(this.recipeUrl).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}
