import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
