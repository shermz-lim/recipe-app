import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../shared/alert/alert.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    {path: 'auth', component: AuthComponent}
];


@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        AlertComponent
    ]
})
export class AuthModule { }
