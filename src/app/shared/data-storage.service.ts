import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map, tap } from 'rxjs/operators';

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
        return this.http.get<Recipe[]>(this.recipeUrl)
        .pipe(
            map(
                (recipes) => {
                    return recipes.map(
                        (recipe) => {
                            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                        }
                    );
                }
            ),
            tap(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
        );
    }

}
