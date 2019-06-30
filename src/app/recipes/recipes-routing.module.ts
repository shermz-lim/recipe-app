import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeBlankComponent } from './recipe-blank/recipe-blank.component';
import { RecipeResolverService } from './recipe-resolver.service';

const routes: Routes = [
    {path: 'recipe',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
        {path: 'new', component: RecipeEditComponent, resolve: [RecipeResolverService] },
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] },
        {path: '', component: RecipeBlankComponent }
    ]},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
