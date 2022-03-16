"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 1847:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-user-info [user]=\"user\"></app-user-info>\n\n  <app-user-data [quiz]=\"quiz.getAvailableQuizzes()\" [user]=\"user\"></app-user-data>\n</ion-content>\n\n<ion-footer>\n  <ng-adsense></ng-adsense>\n</ion-footer>");

/***/ }),

/***/ 1874:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet></ion-router-outlet>");

/***/ }),

/***/ 5391:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/user-data/user-data.component.html ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-card-content>\n    <div class=\"row\">\n      <div>\n        <span style=\"font-weight: bold\">GP: </span>\n        <span class=\"secondary\">{{ user.gamesPlayed }}</span>\n      </div>\n      <div>\n        <span style=\"font-weight: bold\">Avg Score: </span>\n        <span class=\"secondary\">{{ user.averageScore }}%</span>\n      </div>\n      <div>\n        <span style=\"font-weight: bold\">Streak: </span>\n        <span class=\"secondary\">{{ user.streak }}</span>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content>\n    <div class=\"row\">\n      <div>\n        <span style=\"font-weight: bold\">Most Played Category: </span>\n        <span class=\"secondary\">{{ user.mostPlayedCat }}</span>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content>\n    <div class=\"row\">\n      <div>\n        <span style=\"font-weight: bold\">Best Category: </span>\n        <span class=\"secondary\">{{ user.bestCat }}</span>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 6506:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/user-info/user-info.component.html ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{ user.username }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content class=\"row\">\n    <span style=\"font-weight: bold; padding-right: .2em;\">Created: </span>\n    <span class=\"secondary\">{{ user.created }}</span>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ 5261:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 1559);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2601);





const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage,
        children: [
            {
                path: '',
                component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
            }
        ]
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ProfileRoutingModule);



/***/ }),

/***/ 1559:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */ 1847);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _home_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/quiz.service */ 4234);





let ProfileComponent = class ProfileComponent {
    constructor(quiz) {
        this.quiz = quiz;
    }
    ngOnInit() {
        this.user = {
            username: 'murphyj1011',
            streak: 2,
            averageScore: 70,
            gamesPlayed: 20,
            mostPlayedCat: 'Mythology',
            bestCat: 'History',
            created: 'MAR 3, 2022'
        };
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _home_quiz_service__WEBPACK_IMPORTED_MODULE_2__.QuizService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 330:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 5261);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2601);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ 1559);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.module */ 811);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info/user-info.component */ 1264);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 5331);
/* harmony import */ var _home_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/quiz.service */ 4234);
/* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-data/user-data.component */ 3967);
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-adsense */ 6398);














let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            ng2_adsense__WEBPACK_IMPORTED_MODULE_13__.AdsenseModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, _profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__.UserInfoComponent, _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_6__.UserDataComponent],
        providers: [_home_quiz_service__WEBPACK_IMPORTED_MODULE_5__.QuizService]
    })
], ProfileModule);



/***/ }),

/***/ 2601:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 1874);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 7386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 3967:
/*!**********************************************************!*\
  !*** ./src/app/profile/user-data/user-data.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataComponent": () => (/* binding */ UserDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-data.component.html */ 5391);
/* harmony import */ var _user_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-data.component.scss */ 1221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);




let UserDataComponent = class UserDataComponent {
    constructor() { }
    ngOnInit() { }
};
UserDataComponent.ctorParameters = () => [];
UserDataComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    quiz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UserDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-data',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_data_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_data_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserDataComponent);



/***/ }),

/***/ 1264:
/*!**********************************************************!*\
  !*** ./src/app/profile/user-info/user-info.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-info.component.html */ 6506);
/* harmony import */ var _user_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.component.scss */ 8868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);




let UserInfoComponent = class UserInfoComponent {
    constructor() { }
    ngOnInit() { }
};
UserInfoComponent.ctorParameters = () => [];
UserInfoComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UserInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-info',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_info_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_user_info_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserInfoComponent);



/***/ }),

/***/ 730:
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7386:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1221:
/*!************************************************************!*\
  !*** ./src/app/profile/user-data/user-data.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJ1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 8868:
/*!************************************************************!*\
  !*** ./src/app/profile/user-info/user-info.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".row {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map