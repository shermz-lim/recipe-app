import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeBlankComponent } from './recipes/recipe-blank/recipe-blank.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {path: 'recipe',
  component: RecipesComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'new', component: RecipeEditComponent, resolve: [RecipeResolverService] },
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] },
    {path: '', component: RecipeBlankComponent }
  ]},
  {path: 'shopping', component: ShoppingListComponent },
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
