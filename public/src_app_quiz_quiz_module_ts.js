"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_quiz_quiz_module_ts"],{

/***/ 9026:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/quiz/question/question.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{ question.category }}</ion-card-subtitle>\n      <ion-card-title>{{ question.question }}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <div *ngFor=\"let a of answerList\">\n        <ion-button expand=\"block\" (click)=\"answerSelected(a)\">{{ utilities.cleanText(a) }}</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  \n</div>");

/***/ }),

/***/ 6691:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/quiz/quiz.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet></ion-router-outlet>\n");

/***/ }),

/***/ 9045:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/quiz/quiz/quiz.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ triviaType }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <app-question [question]=\"currentQuestion\" (newAnswerEvent)=\"questionAnswered($event)\"></app-question>\n</ion-content>");

/***/ }),

/***/ 1964:
/*!*****************************************************!*\
  !*** ./src/app/quiz/question/question.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionComponent": () => (/* binding */ QuestionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./question.component.html */ 9026);
/* harmony import */ var _question_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.component.scss */ 8070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities.service */ 7095);





let QuestionComponent = class QuestionComponent {
    constructor(utilities) {
        this.utilities = utilities;
        this.newAnswerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.question) {
            this.question.question = this.utilities.cleanText(this.question.question);
            this.answerList = this.shuffleArray([
                ...this.question.incorrect_answers,
                this.question.correct_answer
            ]);
        }
    }
    answerSelected(answer) {
        this.newAnswerEvent.emit({
            question: this.question.question,
            selected: this.utilities.cleanText(answer),
            correct: this.utilities.cleanText(this.question.correct_answer)
        });
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
};
QuestionComponent.ctorParameters = () => [
    { type: _utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService }
];
QuestionComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    newAnswerEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
QuestionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_question_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionComponent);



/***/ }),

/***/ 824:
/*!*********************************************!*\
  !*** ./src/app/quiz/quiz-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizPageRoutingModule": () => (/* binding */ QuizPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _quiz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.page */ 4026);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz/quiz.component */ 2119);





const routes = [
    {
        path: '',
        component: _quiz_page__WEBPACK_IMPORTED_MODULE_0__.QuizPage,
        children: [
            {
                path: '',
                component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent
            }
        ]
    }
];
let QuizPageRoutingModule = class QuizPageRoutingModule {
};
QuizPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], QuizPageRoutingModule);



/***/ }),

/***/ 2617:
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizPageModule": () => (/* binding */ QuizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 585);
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-routing.module */ 824);
/* harmony import */ var _quiz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.page */ 4026);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question/question.component */ 1964);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz.component */ 2119);









let QuizPageModule = class QuizPageModule {
};
QuizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizPageRoutingModule,
        ],
        declarations: [_quiz_page__WEBPACK_IMPORTED_MODULE_1__.QuizPage, _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__.QuizComponent, _question_question_component__WEBPACK_IMPORTED_MODULE_2__.QuestionComponent]
    })
], QuizPageModule);



/***/ }),

/***/ 4026:
/*!***********************************!*\
  !*** ./src/app/quiz/quiz.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizPage": () => (/* binding */ QuizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quiz_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quiz.page.html */ 6691);
/* harmony import */ var _quiz_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.page.scss */ 6165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let QuizPage = class QuizPage {
    constructor() { }
    ngOnInit() { }
};
QuizPage.ctorParameters = () => [];
QuizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-quiz',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quiz_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quiz_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuizPage);



/***/ }),

/***/ 2119:
/*!*********************************************!*\
  !*** ./src/app/quiz/quiz/quiz.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1838);
/* harmony import */ var _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quiz_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quiz.component.html */ 9045);
/* harmony import */ var _quiz_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component.scss */ 6238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9538);





let QuizComponent = class QuizComponent {
    constructor(router) {
        this.router = router;
        this.results = [];
    }
    ngOnInit() {
        this.score = 0;
        this.questions = this.router.getCurrentNavigation().extras.state.quiz;
        this.quizLength = this.questions.length;
        this.setCurrentQuestion();
        console.log(this.questions);
    }
    questionAnswered(event) {
        this.results.push({
            question: this.currentQuestion.question,
            selected: event.selected,
            correct: event.correct
        });
        this.questions = this.removeQuestion(this.questions, this.questions[this.currentQIndex].question);
        this.incrementScore((event.correct === event.selected));
        this.setCurrentQuestion();
    }
    indexOfNextQuestion(q) {
        return Math.floor(Math.random() * q.length);
    }
    setCurrentQuestion() {
        if (this.questions.length <= 0) {
            const result = {
                results: this.results,
                score: this.score,
                length: this.quizLength
            };
            this.router.navigate(['result'], { state: { result } });
            return;
        }
        this.currentQIndex = this.indexOfNextQuestion(this.questions);
        this.currentQuestion = this.questions[this.currentQIndex];
    }
    incrementScore(isTrue) {
        if (isTrue) {
            this.score = this.score + 1;
        }
    }
    removeQuestion(q, question) {
        return q.filter((el) => el.question !== question);
    }
};
QuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
QuizComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quiz',
        template: _Users_jamesmurphy_workspace_trivia_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quiz_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quiz_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuizComponent);



/***/ }),

/***/ 8070:
/*!*******************************************************!*\
  !*** ./src/app/quiz/question/question.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6165:
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6238:
/*!***********************************************!*\
  !*** ./src/app/quiz/quiz/quiz.component.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_quiz_quiz_module_ts.js.map