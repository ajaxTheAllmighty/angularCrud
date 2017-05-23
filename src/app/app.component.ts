import {Component, OnInit} from '@angular/core';

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

export class AppComponent implements OnInit{
    name = 'Angular';
    Users = USERS;

    deleteUser () {
        this.Users.splice(ID,1);
        this.drawTable();
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
                this.drawTable();
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
            this.drawTable();
        }
        else {
            $(<HTMLButtonElement>event.target).removeAttr('data-dismiss');// не  закрывать модальное окно
            $('#addErrorMessage').removeAttr('style');//сообщение снова видно
        }
    }
    drawTable() {
        let Table = $('table');
        let tBody = $('tbody');
        tBody.empty();
        //элементы таблицы
            for (let item of this.Users){
                let row = document.createElement('tr');
                let cells = [];
                let editButton = document.createElement('button');
                let deleteButton = document.createElement('button');
                    row.setAttribute('id',item.id.toString()); // установить id строки
                let cell1 = document.createElement('th');
                    cell1.innerHTML = (item.id + 1).toString(); // текст внутри ячейки
                    cells.push(cell1);
                let cell2 = document.createElement('th');
                    cell2.innerHTML = item.name;
                    cells.push(cell2);
                let cell3 = document.createElement('th');
                    cell3.innerHTML = item.lName;
                    cells.push(cell3);
                    editButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки изменения
                    editButton.setAttribute('data-toggle', 'modal');
                    editButton.setAttribute('data-target', '#editModal');
                    editButton.innerHTML = 'Изменить';
                let cell4 = document.createElement('th');
                    cell4.appendChild(editButton);
                    cells.push(cell4);
                    deleteButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки удаления
                    //deleteButton.addEventListener('click',this.deleteUser,false)
                    deleteButton.innerHTML = 'Удалить';
                let cell5 = document.createElement('th');
                    cell5.appendChild(deleteButton);
                    cells.push(cell5);
                    for (let tempCell of cells){
                         row.appendChild(tempCell);
                     }
                    row.addEventListener('click',this.getTarget.bind(this),false);
                    tBody.append(row); //добавить строку в таблицу
            }
            Table.append(tBody); // добавить тело к таблице
    }
    ngOnInit ():void {
        this.drawTable();
    }
}
//TODO сделать удаление и динамическую отрисовку таблицы -DONE
//TODO использовать https://angular.io/docs/ts/latest/guide/displaying-data.html