(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Pomodoro\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n  <ion-item class=\"new-task\">\n    <ion-textarea class=\"textarea\" [(ngModel)]=\"textarea\" placeholder=\"Adj meg egy új teendőt...\"></ion-textarea>\n  </ion-item>\n  <ion-list>\n      <ion-item>\n        <ion-input [(ngModel)]=\"task\" placeholder=\"Feladat...\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"location\" placeholder=\"Helszín...\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kezdete</ion-label>\n        <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"startString\" ></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Vége</ion-label>\n        <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"endString\" ></ion-datetime>\n      </ion-item>\n    </ion-list>\n  <ion-button expand=\"block\" style=\"--background: #218380\" (click)=\"addTask()\">Hozzáad</ion-button>\n  <div *ngIf=\"visible\" class=\"chip-wrapper\">\n    <ion-chip *ngIf=\"visible\" class=\"chip\">\n        <ion-label>Sikeres hozzáadás</ion-label>\n    </ion-chip> \n  </div>   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea {\n  max-width: 100%;\n  width: 100%;\n  height: 40vh;\n}\n\n.chip {\n  background-color: green;\n  color: white;\n}\n\n.chip-wrapper {\n  text-align: center;\n}\n\n.in {\n  opacity: 1;\n  -webkit-transform-origin: -100% 50%;\n  transform-origin: -100% 50%;\n}\n\n.out {\n  opacity: 0;\n  -webkit-transform-origin: -100% 50%;\n  transform-origin: -100% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXGlvbmljLXBvbW9kb3JvLXRpbWUtbWFuYWdlbWVudFxccG9tb2Rvcm8vc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0UsVUFBQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbi5jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoaXAtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluIHtcbiAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJSA1MCU7XG59XG5cbi5vdXQge1xuICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCUgNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcbn0iLCIudGV4dGFyZWEge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbi5jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoaXAtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJSA1MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcbn1cblxuLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTEwMCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJSA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/timer.service */ "./src/app/services/timer.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(tasksService, timerService) {
        this.tasksService = tasksService;
        this.timerService = timerService;
        this.visible = false;
        this.taskNumber = 0;
        this.id = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        // aktualis idoponttok beallitasa
        this.startString = new Date().toISOString();
        this.endString = new Date().toISOString();
    };
    // uj feladat
    HomePage.prototype.addTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addTask, TIME_IN_MS;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasksService.getTasks().then(function (tasks) {
                            if (tasks) {
                                _this.taskNumber = tasks.length;
                            }
                            else {
                                _this.taskNumber = 0;
                            }
                        })];
                    case 1:
                        _a.sent();
                        this.id = this.taskNumber;
                        this.start = new Date(this.startString);
                        this.end = new Date(this.endString);
                        addTask = new _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["Task"](this.id, this.task, this.textarea, this.location, this.start, this.end, 'white', false);
                        this.tasksService.addTask(addTask);
                        this.startString = new Date().toISOString();
                        this.endString = new Date().toISOString();
                        this.textarea = '';
                        this.location = '';
                        this.task = '';
                        TIME_IN_MS = 2500;
                        this.visible = true;
                        setTimeout(function () { _this.visible = false; }, TIME_IN_MS);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] },
        { type: _services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map