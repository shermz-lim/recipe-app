import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  welcomeText = '';
  welcomeTextFull = 'Welcome to the Recipe App'.split('');
  counter = 0;
  collapsed = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.counter < this.welcomeTextFull.length) {
        this.welcomeText = this.welcomeText + this.welcomeTextFull[this.counter];
        this.counter++;
      }
    }, 50);
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
