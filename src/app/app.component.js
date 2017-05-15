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
    AppComponent.prototype.getTarget = function () {
        var Target = event.target;
        var id = ($((Target.parentNode).parentNode).attr('id'));
        /*console.log('тык');
        console.log(id);*/
        ID = parseInt(id);
    };
    AppComponent.prototype.saveChanges = function (id) {
        id = ID;
        //console.log(id);
        $(event.target).attr('data-dismiss', 'modal'); //Закрыть модальное окно
        $('#errorMessage').attr('style', 'visibility:false'); //сделать сообщение об ошибке невидимым
        if (($('#nameInput').val() != '') && ($('#lNameInput').val() != '')) {
            this.Users[id].name = $('#nameInput').val(); //сохранить новые значения
            this.Users[id].lName = $('#lNameInput').val();
            $('#nameInput').val(''); //очистить
            $('#lNameInput').val(''); //инпуты
        }
        else {
            $(event.target).removeAttr('data-dismiss'); // не  закрывать модальное окно
            $('#errorMessage').removeAttr('style'); //сообщение снова видно
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
//TODO сделать удаление и динамическую отрисовку таблицы 
//# sourceMappingURL=app.component.js.map