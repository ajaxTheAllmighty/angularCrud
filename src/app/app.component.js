"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var entity = (function () {
    function entity() {
    }
    return entity;
}());
exports.entity = entity;
var USERS = [
    { id: 0, name: 'Jon Smith', dob: '01.10.1990' },
    { id: 1, name: 'Кайрат Нуртас', dob: '22.04.1988' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.Users = USERS;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <h1>\u0421\u043F\u0438\u0441\u043E\u043A</h1>\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        ...\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th> id </th>\n                    <th> \u0418\u043C\u044F </th>\n                    <th> \u0414\u0430\u0442\u0430 </th>\n                    <th> \u0423\u0434\u0430\u043B\u0438\u0442\u044C </th>\n                    <th> \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th> {{Users[0].id}} </th>\n                    <th> {{Users[0].name}} </th>\n                    <th> {{Users[0].dob}} </th>\n                    <th> <button class=\"crud__DeleteEditButton form-control\" data-toggle = \"modal\" data-target = \"#myModal\"> \u0423\u0434\u0430\u043B\u0438\u0442\u044C </button> </th>\n                    <th> <button class=\"crud__DeleteEditButton form-control\"> \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C </button> </th>\n                </tr>\n                <tr>\n                    <th> {{Users[1].id}} </th>\n                    <th> {{Users[1].name}} </th>\n                    <th> {{Users[1].dob}} </th>\n                    <th> <button class=\"crud__DeleteEditButton form-control\"> \u0423\u0434\u0430\u043B\u0438\u0442\u044C</button> </th>\n                    <th> <button class=\"crud__DeleteEditButton form-control\"> \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button> </th>\n                </tr>\n            </tbody>\n        </table>\n            "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map