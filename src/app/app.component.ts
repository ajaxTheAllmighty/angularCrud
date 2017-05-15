import { Component } from '@angular/core';


export class entity {
    id:number;
    name:string;
    dob:string;
}

let USERS: entity[] = [
    {id: 0, name: 'Jon Smith', dob: '01.10.1990'},
    {id: 1, name: 'qwe asd', dob: '22.04.1988'}
];


@Component({
  selector: 'my-app',
  templateUrl: './template.html',
})

export class AppComponent {
    name = 'Angular';
    Users = USERS;
}