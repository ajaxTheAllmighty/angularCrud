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
        console.log(ID);
        this.Users.splice(ID,1);
        this.drawTable();
    }
    getTarget() {
        let Target = event.target;
        let id = $(<HTMLButtonElement>Target).parent().parent().attr('id');
        console.log('номер',id);
        console.log(this.Users);
        ID = parseInt(id);
        //console.log($(<HTMLButtonElement>Target).text());
            if ($(<HTMLButtonElement>Target).text()=='Удалить'){
                console.log(this.Users);
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
        console.log('drawing', this.Users);
        let Table = $('table');
        let tBody = $('tbody');
        console.log(this.Users.length);
        tBody.empty();
        //элементы таблицы
            for (let item of this.Users){
                console.log('start');
                let row = document.createElement('tr');
                let cells = [];
                let editButton = document.createElement('button');
                let deleteButton = document.createElement('button');
                    row.setAttribute('id',item.id.toString()) // установить id строки
                let cell1 = document.createElement('th');
                    cell1.innerHTML = item.toString(); // текст внутри ячейки
                    cells.push(cell1);
                console.log(cells);
                let cell2 = document.createElement('th');
                    cell2.innerHTML = item.name;
                    cells.push(cell2);
                console.log(cells);
                let cell3 = document.createElement('th');
                    cell3.innerHTML = item.lName;
                    cells.push(cell3);
                console.log(cells);
                    editButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки изменения
                    editButton.setAttribute('data-toggle', 'modal');
                    editButton.setAttribute('data-target', '#editModal');
                    editButton.innerHTML = 'Изменить';
                let cell4 = document.createElement('th');
                    cell4.appendChild(editButton);
                    cells.push(cell4);
                console.log(cells);
                    deleteButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки удаления
                    //deleteButton.addEventListener('click',this.deleteUser,false)
                    deleteButton.innerHTML = 'Удалить';
                let cell5 = document.createElement('th');
                    cell5.appendChild(deleteButton);
                    cells.push(cell5);
                console.log(cells);
                    for (let tempCell of cells){
                         console.log('appending');
                         row.appendChild(tempCell);
                     }
                    row.addEventListener('click',this.getTarget.bind(this),false)
                    tBody.append(row); //добавить строку в таблицу
            }
            Table.append(tBody); // добавить тело к таблице
            console.log('drawing done');
    }
    ngOnInit ():void {
        this.drawTable();
    }
}
//TODO сделать удаление и динамическую отрисовку таблицы -DONE
