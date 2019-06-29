import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { StorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  collapsed = true;

  constructor(private dataService: StorageService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(
      (user) => {
        this.isAuthenticated = !!user;
      }
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveRecipes() {
    this.dataService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.logout();
  }

}
