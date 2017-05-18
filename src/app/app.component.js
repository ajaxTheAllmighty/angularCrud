"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ID;
var entity = (function () {
    function entity() {
    }
    return entity;
}());
exports.entity = entity;
var USERS = [
    { id: 0, name: 'Jon Smith', lName: 'Last Name' },
    { id: 1, name: 'qwe asd', lName: '123' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.Users = USERS;
    }
    AppComponent.prototype.deleteUser = function () {
        console.log(ID);
        this.Users.splice(ID, 1);
        this.drawTable();
    };
    AppComponent.prototype.getTarget = function () {
        var Target = event.target;
        var id = $(Target).parent().parent().attr('id');
        console.log('номер', id);
        console.log(this.Users);
        ID = parseInt(id);
        //console.log($(<HTMLButtonElement>Target).text());
        if ($(Target).text() == 'Удалить') {
            console.log(this.Users);
            this.deleteUser();
        }
    };
    AppComponent.prototype.saveChanges = function (id) {
        id = ID;
        $(event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#editErrorMessage').attr('style', 'visibility:hidden'); //сделать сообщение об ошибке невидимым
        if (($('#editNameInput').val() != '') && ($('#editLNameInput').val() != '')) {
            this.Users[id].name = $('#editNameInput').val(); //сохранить новые значения
            this.Users[id].lName = $('#editLNameInput').val();
            $('#editNameInput').val(''); //очистить
            $('#editLNameInput').val(''); //инпуты
            this.drawTable();
        }
        else {
            $(event.target).removeAttr('data-dismiss'); // не  закрывать модальное окно
            $('#editErrorMessage').removeAttr('style'); //сообщение снова видно
        }
    };
    AppComponent.prototype.addUser = function () {
        $(event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#addErrorMessage').attr('style', 'visibility:hidden'); //сделать сообщение об ошибке невидимым
        if (($('#addNameInput').val() != '') && ($('#addLNameInput').val() != '')) {
            var tempObj = { id: this.Users.length, name: $('#addNameInput').val(), lName: $('#addLNameInput').val() };
            this.Users.push(tempObj);
            $('#addNameInput').val('');
            $('#addLNameInput').val('');
            this.drawTable();
        }
        else {
            $(event.target).removeAttr('data-dismiss'); // не  закрывать модальное окно
            $('#addErrorMessage').removeAttr('style'); //сообщение снова видно
        }
    };
    AppComponent.prototype.drawTable = function () {
        console.log('drawing', this.Users);
        var Table = $('table');
        var tBody = $('tbody');
        console.log(this.Users.length);
        tBody.empty();
        //элементы таблицы
        for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log('start');
            var row = document.createElement('tr');
            var cells = [];
            var editButton = document.createElement('button');
            var deleteButton = document.createElement('button');
            row.setAttribute('id', item.id.toString()); // установить id строки
            var cell1 = document.createElement('th');
            cell1.innerHTML = (item.id + 1).toString(); // текст внутри ячейки
            cells.push(cell1);
            console.log(cells);
            var cell2 = document.createElement('th');
            cell2.innerHTML = item.name;
            cells.push(cell2);
            console.log(cells);
            var cell3 = document.createElement('th');
            cell3.innerHTML = item.lName;
            cells.push(cell3);
            console.log(cells);
            editButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки изменения
            editButton.setAttribute('data-toggle', 'modal');
            editButton.setAttribute('data-target', '#editModal');
            editButton.innerHTML = 'Изменить';
            var cell4 = document.createElement('th');
            cell4.appendChild(editButton);
            cells.push(cell4);
            console.log(cells);
            deleteButton.className = 'crud__DeleteEditButton form-control'; //настройка кнопки удаления
            //deleteButton.addEventListener('click',this.deleteUser,false)
            deleteButton.innerHTML = 'Удалить';
            var cell5 = document.createElement('th');
            cell5.appendChild(deleteButton);
            cells.push(cell5);
            console.log(cells);
            for (var _b = 0, cells_1 = cells; _b < cells_1.length; _b++) {
                var tempCell = cells_1[_b];
                console.log('appending');
                row.appendChild(tempCell);
            }
            row.addEventListener('click', this.getTarget.bind(this), false);
            tBody.append(row); //добавить строку в таблицу
        }
        Table.append(tBody); // добавить тело к таблице
        console.log('drawing done');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.drawTable();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './template.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//TODO сделать удаление и динамическую отрисовку таблицы -DONE
//# sourceMappingURL=app.component.js.map