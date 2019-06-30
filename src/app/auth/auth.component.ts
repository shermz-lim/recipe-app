import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { format } from 'url';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    authForm: FormGroup;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

    private closeSub: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
        ) { }

    ngOnInit() {
        this.authForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit() {
        if (!this.authForm.valid) {
            return;
        }
        const email = this.authForm.value.email;
        const password = this.authForm.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signUp(email, password);
        }

        authObs.subscribe(
            (resData) => {
                this.error = null;
                this.router.navigate(['/recipe']);
            },
            (errorMessage) => {
                this.error = errorMessage;
                this.isLoading = false;
                this.showErrorAlert(errorMessage);
            }
        );

        this.authForm.reset();
    }

    showErrorAlert(errorMessage: string) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
            AlertComponent
        );
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = errorMessage;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
}
