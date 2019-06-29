import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { format } from 'url';
import { AuthService } from './auth.service';

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

    constructor(private authService: AuthService) { }

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

        this.isLoading = true;
        if (this.isLoginMode) { 

        } else {
            this.authService.signUp(email, password).subscribe(
                (resData) => {
                    console.log(resData);
                    this.isLoading = false;
                },
                (errorMessage) => {
                    this.error = errorMessage;
                    this.isLoading = false;
                }
            );
        }

        this.authForm.reset();
    }
}
