import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
        <h1>Hello {{name}}</h1>
        <input (keydown)="KeyDown()" (keyup)="KeyUp()" [(ngModel)]="name" placeholder="title goes here">
        <button (click)="buttonClick()" class="btn btn-info">test</button>
            `
})

export class AppComponent {
    name = 'Angular';

    KeyDown() {
        console.log('down');
    }
    KeyUp() {
        console.log('up');
    }
    buttonClick() {
        alert('тык');
    }
}
