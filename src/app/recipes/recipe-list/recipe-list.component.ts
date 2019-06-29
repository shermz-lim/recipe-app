import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;
  isLoading = false;

  constructor(private recipeService: RecipeService, private storageService: StorageService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    if (this.recipes.length === 0) {
      this.isLoading = true;
      this.storageService.fetchRecipes().subscribe(
        (recipes) => {
          this.recipes = recipes;
          this.isLoading = false;
        }
      )
    }
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
