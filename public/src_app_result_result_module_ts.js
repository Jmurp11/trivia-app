"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_result_result_module_ts"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <ion-card class=\"center padding\">\n    <div class=\"column\">\n      <div [hidden]=\"!isPassing\" class=\"center img-container\">\n        <img class=\"img\" src=\"../../../assets/trophy.svg\" />\n      </div>\n      <div [hidden]=\"isPassing\" class=\"center img-container\">\n        <img class=\"img\" src=\"../../../assets/pepe.svg\" />\n      </div>\n      <div class=\"center column\">\n        <h1>{{ message }}</h1>\n        <h3>{{ score }} % Score</h3>\n      </div>\n    </div>\n  </ion-card>\n  <div class=\"center\">\n    <ion-button size=\"large\" (click)=\"backToHome()\">Return Home</ion-button>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.component */ 7455);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results/results.component */ 7167);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-routing.module */ 3834);








let ResultModule = class ResultModule {
};
ResultModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_result_component__WEBPACK_IMPORTED_MODULE_0__.ResultComponent, _results_results_component__WEBPACK_IMPORTED_MODULE_1__.ResultsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _result_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResultRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./results.component.html */ 6334);
/* harmony import */ var _results_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component.scss */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9538);



/* eslint-disable @typescript-eslint/naming-convention */


var MessageOpts;
(function (MessageOpts) {
    MessageOpts["PERFECT"] = "Trivia Master! Congrats!";
    MessageOpts["ABOVE_AVG"] = "Impressive!";
    MessageOpts["BELOW_AVG"] = "Feels bad man...";
})(MessageOpts || (MessageOpts = {}));
let ResultsComponent = class ResultsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.result = this.router.getCurrentNavigation().extras.state.result;
        this.score = (this.result.score / this.result.length) * 100;
        this.message = this.setMessage(this.score);
        this.isPassing = this.score >= 70 ? true : false;
    }
    setMessage(score) {
        if (score === 100) {
            return MessageOpts.PERFECT;
        }
        else if (score >= 70) {
            return MessageOpts.ABOVE_AVG;
        }
        else if (score < 70) {
            return MessageOpts.BELOW_AVG;
        }
        else {
            return MessageOpts.BELOW_AVG;
        }
    }
    backToHome() {
        this.router.navigate(['/home']);
    }
};
ResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ResultsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-results',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_results_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_results_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultsComponent);



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

module.exports = ".padding {\n  margin: 10% 15% 10% 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6InJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZyB7XG4gICAgbWFyZ2luOiAxMCUgMTUlIDEwJSAxNSU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_result_result_module_ts.js.map