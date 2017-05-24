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
        this.Users = USERS;
    }
    AppComponent.prototype.deleteUser = function () {
        this.Users.splice(ID, 1);
    };
    AppComponent.prototype.getTarget = function () {
        var Target = event.target;
        var id = $(Target).parent().parent().attr('id');
        ID = parseInt(id);
        if ($(Target).text() == 'Удалить') {
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
        }
        else {
            $(event.target).removeAttr('data-dismiss'); // не  закрывать модальное окно
            $('#addErrorMessage').removeAttr('style'); //сообщение снова видно
        }
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
//# sourceMappingURL=app.component.js.map