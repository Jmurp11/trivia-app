"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 4552:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/auth.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

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

/***/ 6895:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3960);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 9209:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 6895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3960);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 811);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3960:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./auth.page.html */ 4552);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 4553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let AuthPage = class AuthPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthPage.ctorParameters = () => [];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



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

/***/ 4553:
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1762:
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map