import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );

  }

  private initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    let ingredientsArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredientsArray.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
            })
          );
        }
      }

      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;

    }


    this.recipeEditForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      ingredients: ingredientsArray
    });
  }

  getControls() {
    return (this.recipeEditForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.recipeEditForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(1)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (this.recipeEditForm.get('ingredients') as FormArray).removeAt(index);
  }

  onSubmit() {
    const recipe = this.recipeEditForm.value as Recipe
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.onCancel();
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['recipe', this.id]);
    } else {
      this.router.navigate(['recipe']);
    }
  }

}
