"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.applyClass = false;
        this.applyblue = true;
        this.imgLink = "http://lorempixel.com/400/200";
        this.title = "Transformer 5";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>El t\u00EDtulo {{title}}<my-tutorials></my-tutorials>linea</h1>\n\t\t<img [src]=\"imgLink\">  \n \t\t<h4 [class.myClass]=\"applyClass\">Este texto es h4 con myClass</h4> \n\t\t<h4 [style.color]=\"applyblue ? 'blue' : 'red'\">Otra forma de aplicar el estilo</h4>\n  \t\t \n  ",
        styles: ["h1 { color: red}\n \t.myClass { color: green;} \n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map