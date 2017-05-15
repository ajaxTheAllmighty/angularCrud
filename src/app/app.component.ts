import { Component } from '@angular/core';

var ID:number;

export class entity {
    id:number;
    name:string;
    lName:string;
}

let USERS: entity[] = [
    {id: 0, name: 'Jon Smith', lName: 'Last Name'},
    {id: 1, name: 'qwe asd', lName: '123'}
];

@Component({
    selector: 'my-app',
    templateUrl: './template.html',
})

export class AppComponent {
    name = 'Angular';
    Users = USERS;

    getTarget() {
        let Target = event.target;
        let id = ($(((<HTMLButtonElement>Target).parentNode).parentNode).attr('id'));
        /*console.log('тык');
        console.log(id);*/
        ID = parseInt(id);
    }
    saveChanges(id:number) {
        id = ID;
        //console.log(id);
        $(<HTMLButtonElement>event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#errorMessage').attr('style','visibility:false');//сделать сообщение об ошибке невидимым
            if (($('#nameInput').val() != '' ) && ($('#lNameInput').val()!='')) {
                this.Users[id].name = $('#nameInput').val();//сохранить новые значения
                this.Users[id].lName = $('#lNameInput').val();
                $('#nameInput').val('');//очистить
                $('#lNameInput').val('');//инпуты
            }
            else {
                $(<HTMLButtonElement>event.target).removeAttr('data-dismiss');// не  закрывать модальное окно
                $('#errorMessage').removeAttr('style');//сообщение снова видно
            }
    }
}
//TODO сделать удаление и динамическую отрисовку таблицы