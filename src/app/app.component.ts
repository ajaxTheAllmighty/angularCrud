import {Component} from '@angular/core';

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

export class AppComponent{

    Users = USERS;

    deleteUser () {
        this.Users.splice(ID,1);
    }
    getTarget() {
        let Target = event.target;
        let id = $(<HTMLButtonElement>Target).parent().parent().attr('id');
        ID = parseInt(id);
            if ($(<HTMLButtonElement>Target).text()=='Удалить'){
                this.deleteUser();
            }
    }
    saveChanges(id:number) {
        id = ID;
        $(<HTMLButtonElement>event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#editErrorMessage').attr('style','visibility:hidden');//сделать сообщение об ошибке невидимым
            if (($('#editNameInput').val() != '' ) && ($('#editLNameInput').val()!='')) {
                this.Users[id].name = $('#editNameInput').val();//сохранить новые значения
                this.Users[id].lName = $('#editLNameInput').val();
                $('#editNameInput').val('');//очистить
                $('#editLNameInput').val('');//инпуты
            }
            else {
                $(<HTMLButtonElement>event.target).removeAttr('data-dismiss');// не  закрывать модальное окно
                $('#editErrorMessage').removeAttr('style');//сообщение снова видно
            }
    }
    addUser() {
        $(<HTMLButtonElement>event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#addErrorMessage').attr('style','visibility:hidden');//сделать сообщение об ошибке невидимым
        if (($('#addNameInput').val() != '' ) && ($('#addLNameInput').val() != '' ))
        {
            let tempObj:entity = {id: this.Users.length, name: $('#addNameInput').val(), lName: $('#addLNameInput').val()};
            this.Users.push(tempObj);
            $('#addNameInput').val('');
            $('#addLNameInput').val('');
        }
        else {
            $(<HTMLButtonElement>event.target).removeAttr('data-dismiss');// не  закрывать модальное окно
            $('#addErrorMessage').removeAttr('style');//сообщение снова видно
        }
    }
}
