import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
    {path: 'shopping', component: ShoppingListComponent },
];

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [

    ]
})
export class ShoppingListModule {

}
