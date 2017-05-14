import { Component } from '@angular/core';

export class entity {
    id:number;
    name:string;
    dob:string;
}

var USERS: entity[] = [
    {id: 0, name: 'Jon Smith', dob: '01.10.1990'},
    {id: 1, name: 'Кайрат Нуртас', dob: '22.04.1988'}
];

@Component({
  selector: 'my-app',
  template: `
        <h1>Список</h1>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th> id </th>
                    <th> Имя </th>
                    <th> Дата </th>
                    <th> Удалить </th>
                    <th> Изменить </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th> {{Users[0].id}} </th>
                    <th> {{Users[0].name}} </th>
                    <th> {{Users[0].dob}} </th>
                    <th> <button class="crud__DeleteEditButton form-control" data-toggle = "modal" data-target = "#myModal"> Удалить </button> </th>
                    <th> <button class="crud__DeleteEditButton form-control"> Изменить </button> </th>
                </tr>
                <tr>
                    <th> {{Users[1].id}} </th>
                    <th> {{Users[1].name}} </th>
                    <th> {{Users[1].dob}} </th>
                    <th> <button class="crud__DeleteEditButton form-control"> Удалить</button> </th>
                    <th> <button class="crud__DeleteEditButton form-control"> Изменить</button> </th>
                </tr>
            </tbody>
        </table>
            `
})

export class AppComponent {
    name = 'Angular';
    Users = USERS;
}
