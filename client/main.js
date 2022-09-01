"use strict";
(self["webpackChunkhealth_care"] = self["webpackChunkhealth_care"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 9412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'signUp',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent,
    },
    {
        path: 'main',
        component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent,
    },
    {
        path: '**',
        redirectTo: 'main'
    }
    // children:[
    //   {path:'login',component:AuthComponent},
    //   {path:'signIn',component:SignInComponent},
    //   {
    //     path:'cars',
    //     component:CarsComponent,
    //     canActivate:[LoginGuard],
    //     children:[
    //       {path:':id', component:CarDetailsComponent, pathMatch:'full'}
    //     ]
    //   },
    //   {path:'users',component:UsersComponent,canActivate:[LoginGuard]},
    //   {path:'auto_parks',component:AutoParksComponent,canActivate:[LoginGuard]},
    // ]
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _services_is_authenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/is_authenticated */ 369);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class AppComponent {
    constructor(isAuthToken, isAuthObs) {
        this.isAuthToken = isAuthToken;
        this.isAuthObs = isAuthObs;
        this.title = 'health-care';
    }
    ngOnInit() {
        let isAuth = this.isAuthToken.isAuthorization();
        this.isAuthObs.userIsLogged.next(isAuth);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_is_authenticated__WEBPACK_IMPORTED_MODULE_1__.Is_authenticated)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "main-container", "min-vh-100", 2, "padding", "0!important", "height", "100vh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header")(2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ 5431);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 9412);
/* harmony import */ var _components_doctors_titles_doctors_titles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/doctors-titles/doctors-titles.component */ 3914);
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/interceptors/auth.interceptor */ 7126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
            useClass: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor,
            multi: true,
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__.MainPageComponent,
        _components_doctors_titles_doctors_titles_component__WEBPACK_IMPORTED_MODULE_6__.DoctorsTitlesComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule] }); })();


/***/ }),

/***/ 3914:
/*!***********************************************************************!*\
  !*** ./src/app/components/doctors-titles/doctors-titles.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorsTitlesComponent": () => (/* binding */ DoctorsTitlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DoctorsTitlesComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorsTitlesComponent.ɵfac = function DoctorsTitlesComponent_Factory(t) { return new (t || DoctorsTitlesComponent)(); };
DoctorsTitlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsTitlesComponent, selectors: [["app-doctors-titles"]], decls: 2, vars: 0, template: function DoctorsTitlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctors-titles works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3JzLXRpdGxlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_is_authenticated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/is_authenticated */ 369);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function () { return ["login"]; };
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [""]; };
const _c2 = function () { return ["#", "doctors"]; };
const _c3 = function () { return ["network"]; };
class HeaderComponent {
    constructor(isAuth) {
        this.isAuth = isAuth;
        this.LoginButton = true;
    }
    ngOnInit() {
        this.isAuth.userIsLogged.subscribe(value => this.LoginButton = !value);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_is_authenticated__WEBPACK_IMPORTED_MODULE_0__.Is_authenticated)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 7, consts: [[1, "align-content-lg-between", 2, "width", "100%"], [1, "navbar", "px-3", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HealthCare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Our network");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.LoginButton);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 1866);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_is_authenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/is_authenticated */ 369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function LoginComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
const _c0 = function () { return ["../signUp"]; };
class LoginComponent {
    constructor(authService, TokenStorage, Router, isAuthObs) {
        this.authService = authService;
        this.TokenStorage = TokenStorage;
        this.Router = Router;
        this.isAuthObs = isAuthObs;
        this.errMsg = "";
        this.isLoginFailed = false;
        this.LogInOk = () => {
            this.isAuthObs.userIsLogged.next(true);
            this.isLoginFailed = false;
        };
        this.LogInFailed = (err) => {
            this.errMsg = err;
            setTimeout(() => {
                this.errMsg = '';
            }, 3000);
            this.isLoginFailed = true;
        };
    }
    ngOnInit() {
        this._createLoginForm();
    }
    _createLoginForm() {
        this.auth = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('ore.kitto@gmail.com'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1111')
        });
    }
    _login() {
        const tokenStorage = this.TokenStorage;
        const LogInFailed = this.LogInFailed;
        const LogInOk = this.LogInOk;
        let router;
        router = this.Router;
        this.authService.login(this.auth.getRawValue()).subscribe({
            next(token) {
                tokenStorage.saveTokens(token);
                LogInOk();
                router.navigate(['main']).then(() => { });
            },
            error(err) {
                LogInFailed(err.error.detail);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_is_authenticated__WEBPACK_IMPORTED_MODULE_2__.Is_authenticated)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "container-md", "text-center", "align-middle", "align-items-center", 2, "height", "80vh"], [1, "row", "justify-content-md-center", "align-items-center", 2, "height", "80%"], [1, "col", "col-2", 3, "formGroup", "ngSubmit"], [1, "mb-3", "no-select"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "align-self-auto"], [1, "row", "no-select", 2, "height", "10%"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "bg-white", "bg-opacity-75", "py-2", "mx-2", "col-4", "rounded-5"], [2, "font-weight", "bold"], [1, "text-info", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx._login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Don`t have an account yet? Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".form-signin[_ngcontent-%COMP%] {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%], .form-label[_ngcontent-%COMP%], .no-select[_ngcontent-%COMP%]{\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBOzs7RUFJRSx5QkFBeUI7RUFFekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCxcclxuLmZvcm0tbGFiZWwsXHJcbi5uby1zZWxlY3R7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9412:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 2, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5431:
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
// import {SignUpService} from "../../services/sign-up.service";
// import {Router} from "@angular/router";



class SignupComponent {
    constructor() { }
    ngOnInit() {
        this._createSignUpForm();
    }
    _createSignUpForm() {
        this.signUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('ore.kitto@gmail.com'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('BigTown2033'),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
        });
    }
    _SignUp() {
        console.log(this.signUp.getRawValue());
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 29, vars: 1, consts: [[1, "container-md", "text-center", "align-middle", "align-items-center", 2, "height", "80vh"], [1, "row", "justify-content-md-center", "align-items-center", 2, "height", "80%"], [1, "col", "col-2", 3, "formGroup", "ngSubmit"], [1, "mb-3", "no-select"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "formControlName", "email", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", "formControlName", "password", 1, "form-control"], ["for", "firstName", 1, "form-label"], ["type", "password", "id", "firstName", "formControlName", "first_name", 1, "form-control"], ["for", "lastName", 1, "form-label"], ["type", "password", "id", "lastName", "formControlName", "last_name", 1, "form-control"], ["for", "age", 1, "form-label"], ["type", "password", "id", "age", "formControlName", "age", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "password", "id", "phoneNumber", "formControlName", "phone_number", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "align-self-auto"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() { return ctx._SignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3)(20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUp);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6191:
/*!***********************************!*\
  !*** ./src/app/constants/urls.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urls": () => (/* binding */ urls)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

const { URL } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
const urls = {
    login: `${URL}/auth/token`,
    refresh: `${URL}/auth/refresh`,
    users: `${URL}/users`,
    signIn: `${URL}/users/add_user`,
};


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/urls */ 6191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage.service */ 1573);





class AuthService {
    // REFRESH_TOKEN = 'refresh-token'
    constructor(httpClient, tokenStorage) {
        this.httpClient = httpClient;
        this.tokenStorage = tokenStorage;
        this.ACCESS_TOKEN = 'auth-token';
    }
    login(user) {
        return this.httpClient.post(`${_constants_urls__WEBPACK_IMPORTED_MODULE_0__.urls.login}`, user);
    }
    register(credentials) {
        return this.httpClient.post(`${_constants_urls__WEBPACK_IMPORTED_MODULE_0__.urls.users}`, Object.assign({}, credentials));
    }
    refreshToken() {
        const refresh = this.tokenStorage.getRefreshToken();
        return this.httpClient.post(`${_constants_urls__WEBPACK_IMPORTED_MODULE_0__.urls.login}/refresh`, { refresh }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((tokens) => {
            this.tokenStorage.saveTokens(tokens);
        }));
    }
    isAuthorization() {
        return !!window.sessionStorage.getItem(this.ACCESS_TOKEN);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)
/* harmony export */ });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);



/***/ }),

/***/ 7126:
/*!***********************************************************!*\
  !*** ./src/app/services/interceptors/auth.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7556);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _is_authenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is_authenticated */ 369);






class AuthInterceptor {
    constructor(authService, tokenStorage, router, is_Auth_obs) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.is_Auth_obs = is_Auth_obs;
        this.isRefreshing = false;
    }
    intercept(request, next) {
        const isAuth = this.authService.isAuthorization();
        if (isAuth) {
            request = this.addToken(request, this.tokenStorage.getAccessToken());
            this.is_Auth_obs.userIsLogged.next(true);
            console.log(this.is_Auth_obs.userIsLogged.value);
        }
        else {
            this.router.navigate(['login']).then();
        }
        return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((res) => {
            if (res && res.error && res.status === 401) {
                return this.handle401Error(request, next);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => {
                new Error('Token is expired');
                this.is_Auth_obs.userIsLogged.next(false);
                console.log(this.is_Auth_obs.userIsLogged.value);
                // this.router.navigate(['login']).then()
            });
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            return this.authService.refreshToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)((tokens) => {
                return next.handle(this.addToken(request, tokens.access));
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
                this.isRefreshing = false;
                this.tokenStorage.signOut();
                this.router.navigate(['login']).then();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('token invalid or expired'));
            }));
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_is_authenticated__WEBPACK_IMPORTED_MODULE_2__.Is_authenticated)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 369:
/*!**********************************************!*\
  !*** ./src/app/services/is_authenticated.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Is_authenticated": () => (/* binding */ Is_authenticated)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class Is_authenticated {
    constructor() {
        this.userIsLogged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
}
Is_authenticated.ɵfac = function Is_authenticated_Factory(t) { return new (t || Is_authenticated)(); };
Is_authenticated.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Is_authenticated, factory: Is_authenticated.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1573:
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const ACCESS_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ACCESS_TOKEN;
const REFRESH_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.REFRESH_TOKEN;
class TokenStorageService {
    constructor() {
    }
    signOut() {
        window.sessionStorage.clear();
    }
    saveTokens(token) {
        window.sessionStorage.removeItem(ACCESS_TOKEN);
        window.sessionStorage.removeItem(REFRESH_TOKEN);
        window.sessionStorage.setItem(ACCESS_TOKEN, token.access);
        window.sessionStorage.setItem(REFRESH_TOKEN, token.refresh);
    }
    getAccessToken() {
        return window.sessionStorage.getItem(ACCESS_TOKEN);
    }
    getRefreshToken() {
        return window.sessionStorage.getItem(REFRESH_TOKEN);
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    URL: '/api',
    ACCESS_TOKEN: 'auth-token',
    REFRESH_TOKEN: 'refresh-token',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map