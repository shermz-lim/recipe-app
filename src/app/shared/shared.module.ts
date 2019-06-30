import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective,
        AlertComponent
    ],
    imports: [
    ],
    exports: [
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective,
        AlertComponent
    ]
})
export class SharedModule {

}
