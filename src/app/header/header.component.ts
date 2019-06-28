import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { StorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  constructor(private dataService: StorageService) { }

  ngOnInit() {
  }

  onSaveRecipes() {
    this.dataService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }

}
