"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_result_result_module_ts"],{

/***/ 233:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/header/header.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"router.url === '/profile' || router.url === '/auth'\">\n      <ion-button color=\"primary\" (click)=\"navigate('home')\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"router.url !== '/profile' && router.url !== '/auth'\">\n      <ion-button color=\"primary\" (click)=\"checkLogin()\">\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 7776:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/result/result-detail/result-detail.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"dismiss()\"\n      ><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon\n    ></ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content [fullscreen]=\"true\">\n  <div *ngFor=\"let d of details\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{ d.question }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <div>\n          <ion-button class=\"text-wrap\"\n            [hidden]=\"d.selected === d.correct\"\n            expand=\"block\"\n            color=\"danger\"\n            >{{ d.selected }}</ion-button\n          >\n          <ion-button class=\"text-wrap\" expand=\"block\" color=\"success\">{{\n            d.correct\n          }}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 9880:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/result/result.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet></ion-router-outlet>");

/***/ }),

/***/ 6334:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/result/results/results.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div [hidden]=\"result\" class=\"center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-card [hidden]=\"!result\" class=\"center padding\">\n    <div class=\"column\">\n      <div\n        [hidden]=\"!(message === messageOpts[0])\"\n        class=\"center img-container\"\n      >\n        <img class=\"img\" src=\"../../../assets/trophy.svg\" />\n      </div>\n      <div\n        [hidden]=\"!(message === messageOpts[1])\"\n        class=\"center img-container\"\n      >\n        <img class=\"img\" src=\"../../../assets/cyborg.svg\" />\n      </div>\n      <div\n        [hidden]=\"!(message === messageOpts[2])\"\n        class=\"center img-container\"\n      >\n        <img class=\"img\" src=\"../../../assets/penguin.svg\" />\n      </div>\n      <div\n        [hidden]=\"!(message === messageOpts[3])\"\n        class=\"center img-container\"\n      >\n        <img class=\"img\" src=\"../../../assets/pepe.svg\" />\n      </div>\n      <div class=\"center column\">\n        <h1>{{ message }}</h1>\n        <h3>{{ score }}% Score</h3>\n      </div>\n      <div class=\"center padding-bottom\">\n        <ion-button size=\"small\" color=\"secondary\" (click)=\"presentModal()\"\n          >See Details</ion-button\n        >\n      </div>\n    </div>\n  </ion-card>\n  <div class=\"center\">\n    <ion-button size=\"large\" (click)=\"backToHome()\">Play Again!</ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ng-adsense></ng-adsense>\n</ion-footer>");

/***/ }),

/***/ 1528:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 233);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 1762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9538);





let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.profile = 'profile';
    }
    ngOnInit() {
        this.title = 'Trivaster';
    }
    navigate(path) {
        this.router.navigate([path]);
    }
    checkLogin() {
        if (true) {
            this.navigate(this.profile);
        }
        else {}
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 811:
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 1528);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 585);






let HeaderModule = class HeaderModule {
};
HeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
        ]
    })
], HeaderModule);



/***/ }),

/***/ 4189:
/*!*****************************************************************!*\
  !*** ./src/app/result/result-detail/result-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultDetailComponent": () => (/* binding */ ResultDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./result-detail.component.html */ 7776);
/* harmony import */ var _result_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result-detail.component.scss */ 6090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 585);





let ResultDetailComponent = class ResultDetailComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
};
ResultDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ResultDetailComponent.propDecorators = {
    details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ResultDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-result-detail',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_result_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultDetailComponent);



/***/ }),

/***/ 3834:
/*!*************************************************!*\
  !*** ./src/app/result/result-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultRoutingModule": () => (/* binding */ ResultRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.component */ 7455);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results/results.component */ 7167);





const routes = [
    {
        path: '',
        component: _result_component__WEBPACK_IMPORTED_MODULE_0__.ResultComponent,
        children: [
            {
                path: '',
                component: _results_results_component__WEBPACK_IMPORTED_MODULE_1__.ResultsComponent
            }
        ]
    }
];
let ResultRoutingModule = class ResultRoutingModule {
};
ResultRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ResultRoutingModule);



/***/ }),

/***/ 7455:
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultComponent": () => (/* binding */ ResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./result.component.html */ 9880);
/* harmony import */ var _result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.component.scss */ 5320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let ResultComponent = class ResultComponent {
    constructor() { }
    ngOnInit() { }
};
ResultComponent.ctorParameters = () => [];
ResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-result',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_result_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_result_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultComponent);



/***/ }),

/***/ 158:
/*!*****************************************!*\
  !*** ./src/app/result/result.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultModule": () => (/* binding */ ResultModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.component */ 7455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results/results.component */ 7167);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-routing.module */ 3834);
/* harmony import */ var _result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result-detail/result-detail.component */ 4189);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.module */ 811);
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-adsense */ 6398);











let ResultModule = class ResultModule {
};
ResultModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_result_component__WEBPACK_IMPORTED_MODULE_0__.ResultComponent, _results_results_component__WEBPACK_IMPORTED_MODULE_1__.ResultsComponent, _result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_3__.ResultDetailComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__.HeaderModule,
            _result_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResultRoutingModule,
            ng2_adsense__WEBPACK_IMPORTED_MODULE_10__.AdsenseModule
        ]
    })
], ResultModule);



/***/ }),

/***/ 7167:
/*!*****************************************************!*\
  !*** ./src/app/result/results/results.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsComponent": () => (/* binding */ ResultsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./results.component.html */ 6334);
/* harmony import */ var _results_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component.scss */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/analytics */ 2559);
/* harmony import */ var _result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../result-detail/result-detail.component */ 4189);



/* eslint-disable @typescript-eslint/naming-convention */





var MessageOpts;
(function (MessageOpts) {
    MessageOpts["PERFECT"] = "Trivia Master! Congrats!";
    MessageOpts["ABOVE_AVG"] = "Impressive!";
    MessageOpts["BELOW_AVG"] = "Might be time to start studying...";
    MessageOpts["BAD"] = "Feels bad man...";
})(MessageOpts || (MessageOpts = {}));
let ResultsComponent = class ResultsComponent {
    constructor(router, routerOutlet, modalController) {
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.messageOpts = [];
    }
    ngOnInit() {
        if (!this.router.getCurrentNavigation().extras.state) {
            this.backToHome();
        }
        this.result = this.router.getCurrentNavigation().extras.state.result;
        this.details = this.router.getCurrentNavigation().extras.state.details;
        this.score = (this.result.score / this.result.length) * 100;
        this.message = this.setMessage(this.score);
        this.messageOpts = [
            MessageOpts.PERFECT,
            MessageOpts.ABOVE_AVG,
            MessageOpts.BELOW_AVG,
            MessageOpts.BAD,
        ];
    }
    setMessage(score) {
        if (score === 100) {
            return MessageOpts.PERFECT;
        }
        else if (score >= 80 && score < 100) {
            return MessageOpts.ABOVE_AVG;
        }
        else if (score >= 60 && score < 80) {
            return MessageOpts.BELOW_AVG;
        }
        else if (score < 60) {
            return MessageOpts.BAD;
        }
        else {
            return;
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _result_detail_result_detail_component__WEBPACK_IMPORTED_MODULE_3__.ResultDetailComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    details: this.details,
                },
            });
            const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_2__.getAnalytics)();
            (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_2__.logEvent)(analytics, 'check results');
            return yield modal.present();
        });
    }
    backToHome() {
        this.router.navigate(['/home']);
    }
};
ResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ResultsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-results',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_results_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_results_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultsComponent);



/***/ }),

/***/ 1762:
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6090:
/*!*******************************************************************!*\
  !*** ./src/app/result/result-detail/result-detail.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5320:
/*!**********************************************!*\
  !*** ./src/app/result/result.component.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1017:
/*!*******************************************************!*\
  !*** ./src/app/result/results/results.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".padding {\n  margin: 10% 15% 10% 15%;\n}\n\n.padding-bottom {\n  padding-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmcge1xuICAgIG1hcmdpbjogMTAlIDE1JSAxMCUgMTUlO1xufVxuXG4ucGFkZGluZy1ib3R0b20ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_result_result_module_ts.js.map