(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_bisection_bisection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bisection/bisection.component */ "./src/app/components/bisection/bisection.component.ts");
/* harmony import */ var _components_false_position_false_position_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/false-position/false-position.component */ "./src/app/components/false-position/false-position.component.ts");
/* harmony import */ var _components_formulas_formulas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/formulas/formulas.component */ "./src/app/components/formulas/formulas.component.ts");
/* harmony import */ var _components_secant_secant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/secant/secant.component */ "./src/app/components/secant/secant.component.ts");
/* harmony import */ var _components_graph_coloring_graph_coloring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/graph-coloring/graph-coloring.component */ "./src/app/components/graph-coloring/graph-coloring.component.ts");
/* harmony import */ var _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newton-raphson/newton-raphson.component */ "./src/app/newton-raphson/newton-raphson.component.ts");
/* harmony import */ var _prim_prim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prim/prim.component */ "./src/app/prim/prim.component.ts");
/* harmony import */ var _dijkstra_dijkstra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dijkstra/dijkstra.component */ "./src/app/dijkstra/dijkstra.component.ts");
/* harmony import */ var _graph_coloring_steps_graph_coloring_steps_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graph-coloring-steps/graph-coloring-steps.component */ "./src/app/graph-coloring-steps/graph-coloring-steps.component.ts");
/* harmony import */ var _kruskal_kruskal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kruskal/kruskal.component */ "./src/app/kruskal/kruskal.component.ts");













// import { KruskalComponent } from './kruskal/kruskal.component';

var routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'bisection', component: _components_bisection_bisection_component__WEBPACK_IMPORTED_MODULE_4__["BisectionComponent"] },
    { path: 'false-position', component: _components_false_position_false_position_component__WEBPACK_IMPORTED_MODULE_5__["FalsePositionComponent"] },
    { path: 'formula', component: _components_formulas_formulas_component__WEBPACK_IMPORTED_MODULE_6__["FormulasComponent"] },
    { path: 'secant-method', component: _components_secant_secant_component__WEBPACK_IMPORTED_MODULE_7__["SecantComponent"] },
    { path: 'newton-method', component: _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_9__["NewtonRaphsonComponent"] },
    { path: 'graph-coloring', component: _components_graph_coloring_graph_coloring_component__WEBPACK_IMPORTED_MODULE_8__["GraphColoringComponent"] },
    { path: 'prim', component: _prim_prim_component__WEBPACK_IMPORTED_MODULE_10__["PrimComponent"] },
    { path: 'dijkstra', component: _dijkstra_dijkstra_component__WEBPACK_IMPORTED_MODULE_11__["DijkstraComponent"] },
    { path: 'graph-coloring-steps', component: _graph_coloring_steps_graph_coloring_steps_component__WEBPACK_IMPORTED_MODULE_12__["GraphColoringStepsComponent"] },
    { path: 'kruskal', component: _kruskal_kruskal_component__WEBPACK_IMPORTED_MODULE_13__["KruskalComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'algorithms';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/ng-katex.esm.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_false_position_false_position_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/false-position/false-position.component */ "./src/app/components/false-position/false-position.component.ts");
/* harmony import */ var _components_bisection_bisection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bisection/bisection.component */ "./src/app/components/bisection/bisection.component.ts");
/* harmony import */ var _components_formulas_formulas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/formulas/formulas.component */ "./src/app/components/formulas/formulas.component.ts");
/* harmony import */ var _components_secant_secant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/secant/secant.component */ "./src/app/components/secant/secant.component.ts");
/* harmony import */ var _components_graph_coloring_graph_coloring_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/graph-coloring/graph-coloring.component */ "./src/app/components/graph-coloring/graph-coloring.component.ts");
/* harmony import */ var _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newton-raphson/newton-raphson.component */ "./src/app/newton-raphson/newton-raphson.component.ts");
/* harmony import */ var _prim_prim_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prim/prim.component */ "./src/app/prim/prim.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dijkstra_dijkstra_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dijkstra/dijkstra.component */ "./src/app/dijkstra/dijkstra.component.ts");
/* harmony import */ var _graph_coloring_steps_graph_coloring_steps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./graph-coloring-steps/graph-coloring-steps.component */ "./src/app/graph-coloring-steps/graph-coloring-steps.component.ts");
/* harmony import */ var _kruskal_kruskal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kruskal/kruskal.component */ "./src/app/kruskal/kruskal.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_false_position_false_position_component__WEBPACK_IMPORTED_MODULE_9__["FalsePositionComponent"],
                _components_bisection_bisection_component__WEBPACK_IMPORTED_MODULE_10__["BisectionComponent"],
                _components_formulas_formulas_component__WEBPACK_IMPORTED_MODULE_11__["FormulasComponent"],
                _components_secant_secant_component__WEBPACK_IMPORTED_MODULE_12__["SecantComponent"],
                _components_graph_coloring_graph_coloring_component__WEBPACK_IMPORTED_MODULE_13__["GraphColoringComponent"],
                _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_14__["NewtonRaphsonComponent"],
                _prim_prim_component__WEBPACK_IMPORTED_MODULE_15__["PrimComponent"],
                _dijkstra_dijkstra_component__WEBPACK_IMPORTED_MODULE_17__["DijkstraComponent"],
                _graph_coloring_steps_graph_coloring_steps_component__WEBPACK_IMPORTED_MODULE_18__["GraphColoringStepsComponent"],
                _kruskal_kruskal_component__WEBPACK_IMPORTED_MODULE_19__["KruskalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_katex__WEBPACK_IMPORTED_MODULE_3__["KatexModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/bisection/bisection.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/bisection/bisection.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmlzZWN0aW9uL2Jpc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/bisection/bisection.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/bisection/bisection.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h2 style=\"font-weight: bold;\">Bisection Algorithm</h2>\n  </div>\n  <form class=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Formula</label>\n        <input\n          type=\"text\"\n          name=\"formula\"\n          [(ngModel)]=\"formula\"\n          value=\"x^3-2x-5\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />\n      </div>\n    <div class=\"form-group\">\n      <label style=\"font-size: 15px;\">Lower Bound</label>\n      <input\n        type=\"number\"\n        name=\"lowerBound\"\n        [(ngModel)]=\"lowerBound\"\n        value=\"1\"\n        class=\"form-control\"\n        style=\"font-size: 16px\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label style=\"font-size: 15px;\">Upper Bound</label>\n      <input\n        type=\"number\"\n        name=\"upperBound\"\n        [(ngModel)]=\"upperBound\"\n        class=\"form-control\"\n        value=\"2\"\n        style=\"font-size: 16px\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label style=\"font-size: 15px;\">Stopping Criteria</label>\n      <input\n        type=\"number\"\n        name=\"EPSILON\"\n        [(ngModel)]=\"EPSILON\"\n        class=\"form-control\"\n        value=\"0.01\"\n        value=\"0.01\"\n        style=\"font-size: 16px\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"submit\"\n        value=\"Submit\"\n        style=\"font-size: 15px\"\n        class=\"btn btn-primary\"\n      />\n    </div>\n  </form>\n\n  <div *ngIf=\"result != false\" class=\"row\">\n    <h3 class=\"col\">{{ result }}</h3>\n  </div>\n  <div *ngIf=\"result == false\" class=\"row\">\n    <h3 class=\"col\">You have not assumed right Lower bound and upper bound</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/bisection/bisection.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bisection/bisection.component.ts ***!
  \*************************************************************/
/*! exports provided: BisectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BisectionComponent", function() { return BisectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");



var BisectionComponent = /** @class */ (function () {
    function BisectionComponent() {
        this.lowerBound = 1;
        this.upperBound = 2;
        this.EPSILON = 0.01;
        this.formula = "x^3+3x-5";
    }
    BisectionComponent.prototype.ngOnInit = function () {
    };
    BisectionComponent.prototype.ets = function (number, formula) {
        var scope = { x: number };
        // console.log(number + " " + formula + " " + math.evaluate(formula, scope));
        return mathjs__WEBPACK_IMPORTED_MODULE_2__["evaluate"](formula, scope);
        // return x * x * x + 3 * x - 5; // The function that we need to find it's root x^3+3x-5
    };
    BisectionComponent.prototype.bisection = function (a, b, formula) {
        var c;
        // validation that the user has entered valid guess for lower and upper bound
        if (this.ets(a, formula) * this.ets(b, formula) >= 0) {
            c = false;
        }
        else {
            c = a;
            // The iterations are infinite in this case until it reaches the stopping criterion which is 0.01
            // It can be replaced by For loop with user input to add a limit to the iterations 
            while ((b - a) >= this.EPSILON) {
                c = (a + b) / 2;
                if (this.ets(c, formula) == 0.0) {
                    break;
                }
                else if (this.ets(c, formula) * this.ets(a, formula) < 0) {
                    b = c;
                }
                else {
                    a = c;
                }
            }
        }
        // It will print out the result 
        return c;
    };
    BisectionComponent.prototype.onSubmit = function () {
        this.result = this.bisection(this.lowerBound, this.upperBound, this.formula);
    };
    BisectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bisection',
            template: __webpack_require__(/*! ./bisection.component.html */ "./src/app/components/bisection/bisection.component.html"),
            styles: [__webpack_require__(/*! ./bisection.component.css */ "./src/app/components/bisection/bisection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BisectionComponent);
    return BisectionComponent;
}());



/***/ }),

/***/ "./src/app/components/false-position/false-position.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/false-position/false-position.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFsc2UtcG9zaXRpb24vZmFsc2UtcG9zaXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/false-position/false-position.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/false-position/false-position.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n<div class=\"row with-margins\">\n  <div class=\"col\">\n    <div class=\"text-center\">\n      <h2 style=\"font-weight: bold;\">False Position Algorithm</h2>\n    </div>\n    <form class=\"form\"  (ngSubmit)=\"onSubmit()\" #FalsePosition=\"ngForm\">\n    <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Formula</label>\n        <input\n          type=\"text\"\n          name=\"formula\"\n          [(ngModel)]=\"model.formula\"\n          placeholder=\"x^3-2x-5\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Lower Bound</label>\n        <input\n          type=\"number\"\n          name=\"xl\"\n          [(ngModel)]=\"model.xl\"\n          placeholder=\"-10\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Upper Bound</label>\n        <input\n          type=\"number\"\n          name=\"xu\"\n          [(ngModel)]=\"model.xu\"\n          class=\"form-control\"\n          placeholder=\"+10\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Stopping Criterion</label>\n        <input\n          type=\"number\"\n          name=\"es\"\n          [(ngModel)]=\"model.es\"\n          class=\"form-control\"\n          placeholder=\"0.01\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n      <div class=\"form-group\">\n          <label style=\"font-size: 15px\">Maximum Iterations</label>\n          <input\n            type=\"number\"\n            name=\"imax\"\n            [(ngModel)]=\"model.imax\"\n            class=\"form-control\"\n            placeholder=\"100\"\n            required\n            style=\"font-size: 16px\"\n          />\n        </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Submit\" style=\"font-size: 15px;\"  class=\"btn btn-primary\"/>\n      </div>\n    </form>\n  </div>\n</div>\n<div *ngIf=\"xr\" class=\"row\">\n  <div class=\"col\" style=\"font-size: 15px;\">\n      <p> The Root is {{ xr }} </p>\n      <p> Verification Test F({{xr}}) = {{fxr}}</p>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/false-position/false-position.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/false-position/false-position.component.ts ***!
  \***********************************************************************/
/*! exports provided: FalsePositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalsePositionComponent", function() { return FalsePositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _numerical_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../numerical-methods */ "./src/app/numerical-methods.ts");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");




var FalsePositionComponent = /** @class */ (function () {
    function FalsePositionComponent() {
        this.model = new _numerical_methods__WEBPACK_IMPORTED_MODULE_2__["NumericalMethods"](-10, +10, 0.01, 100, 'x^3-2x-5');
    }
    FalsePositionComponent.prototype.ngOnInit = function () {
    };
    FalsePositionComponent.prototype.performEquation = function (number, formula) {
        var scope = { x: number };
        return mathjs__WEBPACK_IMPORTED_MODULE_3__["evaluate"](formula, scope);
    };
    FalsePositionComponent.prototype.modFalsePos = function (xl, xu, es, imax, formula) {
        var iter = 0;
        var fl = this.performEquation(xl, formula);
        var fu = this.performEquation(xu, formula);
        var il = 0;
        var iu = 0;
        var xr = null; /** */
        var ea = 0;
        while (ea >= es || iter < imax) {
            var xrold = xr;
            xr = xu - fu * (xl - xu) / (fl - fu);
            var fr = this.performEquation(xr, formula);
            iter++;
            if (xr != 0) {
                ea = Math.abs((xr - xrold) / xr) * 100;
            }
            var test = fl * fr;
            if (test < 0) {
                xu = xr;
                fu = this.performEquation(xu, formula);
                iu = 0;
                il++;
                if (il >= 2) {
                    fl = fl / 2;
                }
            }
            else if (test > 0) {
                xl = xr;
                fl = this.performEquation(xl, formula);
                il = 0;
                iu++;
                if (iu >= 2) {
                    fu = fu / 2;
                }
            }
            else {
                ea = 0;
            }
        }
        return xr;
    };
    // algorithm for false position yet to be implemented .....
    FalsePositionComponent.prototype.onSubmit = function () {
        this.xr = this.modFalsePos(this.model.xl, this.model.xu, this.model.es, this.model.imax, this.model.formula);
        this.fxr = this.performEquation(this.xr, this.model.formula);
    };
    FalsePositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-false-position',
            template: __webpack_require__(/*! ./false-position.component.html */ "./src/app/components/false-position/false-position.component.html"),
            styles: [__webpack_require__(/*! ./false-position.component.css */ "./src/app/components/false-position/false-position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FalsePositionComponent);
    return FalsePositionComponent;
}());



/***/ }),

/***/ "./src/app/components/formulas/formulas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/formulas/formulas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYXMvZm9ybXVsYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/formulas/formulas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/formulas/formulas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul>\n    <li *ngFor=\"let eq of equations; index as i\" style=\"list-style: none;display: inline-block\">\n      <a (click)=\"addNotation(eq)\" style=\"font-size: 16px\">\n          <ng-katex style=\"cursor: pointer;\" class=\"{{ eq.slice(1) }}\" title=\"{{ eq }}\" [equation]=\"eq\" [options]=\"options\">\n        </ng-katex>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<div class=\"container text-size mt-5\">\n  <h2>Equation:</h2>\n  <p>Type here your equation:</p>\n  <div class=\"form-group\">\n    <textarea class=\"form-control\" style=\"font-size: 16px;\" [(ngModel)]=\"equation\" rows=\"4\"></textarea>\n  </div>\n  <p><ng-katex [equation]=\"equation\" [options]=\"options\"></ng-katex></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/formulas/formulas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/formulas/formulas.component.ts ***!
  \***********************************************************/
/*! exports provided: FormulasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulasComponent", function() { return FormulasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormulasComponent = /** @class */ (function () {
    function FormulasComponent() {
        this.equations = ['\\times', '\\div', '\\pm', '\\mp', '\\cdot', '\\star', '\\sqrt{}', '\\sqrt[n]{}', '\\log_{}{}',
            '\\lg{}', '\\_{}^{}', '\\overleftarrow{}', '\\overrightarrow{}', '\\overbrace{}', '\\underbrace{}'];
        this.equation = "c = \\pm\\sqrt{a^2 + b^2}";
        this.options = {
            displayMode: true,
        };
    }
    FormulasComponent.prototype.ngOnInit = function () {
    };
    FormulasComponent.prototype.addNotation = function (notation) {
        console.log(notation);
        this.equation += notation;
    };
    FormulasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulas',
            // template: `<ng-katex [equation]="equation">`,
            template: __webpack_require__(/*! ./formulas.component.html */ "./src/app/components/formulas/formulas.component.html"),
            styles: [__webpack_require__(/*! ./formulas.component.css */ "./src/app/components/formulas/formulas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormulasComponent);
    return FormulasComponent;
}());



/***/ }),

/***/ "./src/app/components/graph-coloring/graph-coloring.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/graph-coloring/graph-coloring.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGgtY29sb3JpbmcvZ3JhcGgtY29sb3JpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/graph-coloring/graph-coloring.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/graph-coloring/graph-coloring.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <h3>Vertex Coloring: Welsh-Powell Algorithm</h3>\n    <h4>\n      Source:\n      <a\n        href=\"http://mrsleblancsmath.pbworks.com/w/file/fetch/46119304/vertex%20coloring%20algorithm.pdf\"\n        >http://mrsleblancsmath.pbworks.com/w/file/fetch/46119304/vertex%20coloring%20algorithm.pdf</a\n      >\n    </h4>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network style=\"width: 100%; height: 100%;\"></div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <h5>Test Graph:</h5>\n    <div *ngFor=\"let node of adj; let i = index\">\n      <li>{{ i }} -> {{ node }}</li>\n    </div>\n  </div>\n  <div class=\"col\">\n    <h5>Result Coloring:</h5>\n    <div *ngFor=\"let node of result; let i = index\">\n      <li>{{ i }} -> {{ result[i] }}</li>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/graph-coloring/graph-coloring.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/graph-coloring/graph-coloring.component.ts ***!
  \***********************************************************************/
/*! exports provided: GraphColoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphColoringComponent", function() { return GraphColoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_2__);



var GraphColoringComponent = /** @class */ (function () {
    function GraphColoringComponent() {
        var _this = this;
        this.edges = [0, 2, 0, 3, 0, 4, 0, 5, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 0, 2, 1, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7, 3, 0, 3, 1, 3, 2, 3, 4, 3, 6, 3, 7, 4, 0, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 0, 5, 1, 5, 2, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 7, 7, 2, 7, 3, 7, 4, 7, 5, 7, 6];
        // addEdgesToGraph() {
        //   for (let c = 0 ; c < this.edges.length ; c++) {
        //     if (c != this.edges.length - 1){
        //     // setTimeout(() => {
        //       this.networkInstance.body.data.edges.add([{ from: this.edges[c], to: this.edges[c+1] }]);
        //     // },
        //     // 10000);
        //   }
        // }
        // }
        this.timeout = function (time, firstNode, secondNode) {
            setTimeout(function () {
                _this.networkInstance.body.data.edges.add([{ from: firstNode, to: secondNode }]);
            }, time);
        };
        this.mapColoring = function () {
            var colors = ["red", "blue", "yellow", "green", "aqua", "brown"];
            // let nodes = new DataSet<any>([]);
            var counter = 1000;
            for (var c = 0; c < _this.result.length; c++) {
                // nodes = new DataSet<any>([
                //   { id: 0, label: 'Node 0' },
                //   { id: 1, label: 'Node 1' },
                //   { id: 2, label: 'Node 2' },
                //   { id: 3, label: 'Node 3' },
                //   { id: 4, label: 'Node 4' }
                // ]);
                // this.networkInstance.body.data.nodes.add([{ id: c, label: 'Node ' + c }]);
                // setTimeout(() => {
                // this.networkInstance.body.data.nodes.update([{ id: c, label: 'Node ' + c, color: colors[this.result[c]] }]);
                _this.networkInstance.body.data.nodes.add([{ id: c, label: 'Node ' + c, color: colors[_this.result[c]] }]);
                // },
                // counter);
                //  counter += 1000;
            }
        };
    }
    GraphColoringComponent.prototype.ngOnInit = function () {
        this.V = 8;
        this.adj = new Array();
        this.result = new Array(this.V);
        var container = this.el.nativeElement;
        this.networkInstance = new vis__WEBPACK_IMPORTED_MODULE_2__["Network"](container, {}, {});
        for (var i = 0; i < this.V; i++) {
            this.adj.push(new Array());
        }
        // this.addEdge(0, 1);
        // this.addEdge(0, 2);
        // this.addEdge(1, 2);
        // this.addEdge(1, 4);
        // this.addEdge(2, 4);
        // this.addEdge(4, 3);
        this.addEdge(0, 2);
        this.addEdge(0, 3);
        this.addEdge(0, 4);
        this.addEdge(0, 5);
        this.addEdge(1, 2);
        this.addEdge(1, 3);
        this.addEdge(1, 4);
        this.addEdge(1, 5);
        this.addEdge(1, 6);
        this.addEdge(2, 0);
        this.addEdge(2, 1);
        this.addEdge(2, 3);
        this.addEdge(2, 4);
        this.addEdge(2, 5);
        this.addEdge(2, 6);
        this.addEdge(2, 7);
        this.addEdge(3, 0);
        this.addEdge(3, 1);
        this.addEdge(3, 2);
        this.addEdge(3, 4);
        this.addEdge(3, 6);
        this.addEdge(3, 7);
        this.addEdge(4, 0);
        this.addEdge(4, 1);
        this.addEdge(4, 2);
        this.addEdge(4, 3);
        this.addEdge(4, 6);
        this.addEdge(4, 7);
        this.addEdge(5, 0);
        this.addEdge(5, 1);
        this.addEdge(5, 2);
        this.addEdge(5, 7);
        this.addEdge(6, 1);
        this.addEdge(6, 2);
        this.addEdge(6, 3);
        this.addEdge(6, 4);
        this.addEdge(6, 7);
        this.addEdge(7, 2);
        this.addEdge(7, 3);
        this.addEdge(7, 4);
        this.addEdge(7, 5);
        this.addEdge(7, 6);
        this.greedyColoring();
        // const data = { nodes };
        this.mapColoring();
        // { from: 0, to: 1 },
        this.timeout(1000, 0, 2);
        this.timeout(2000, 0, 3);
        this.timeout(3000, 0, 4);
        this.timeout(4000, 0, 5);
        this.timeout(5000, 1, 2);
        this.timeout(6000, 1, 3);
        this.timeout(7000, 1, 4);
        this.timeout(8000, 1, 5);
        this.timeout(9000, 1, 6);
        this.timeout(10000, 2, 0);
        this.timeout(11000, 2, 1);
        this.timeout(12000, 2, 3);
        this.timeout(13000, 2, 4);
        this.timeout(14000, 2, 5);
        this.timeout(150000, 2, 6);
        this.timeout(16000, 2, 7);
        this.timeout(17000, 3, 0);
        this.timeout(180000, 3, 1);
        this.timeout(19000, 3, 2);
        this.timeout(20000, 3, 4);
        this.timeout(21000, 3, 6);
        this.timeout(22000, 3, 7);
        this.timeout(23000, 4, 0);
        this.timeout(24000, 4, 1);
        this.timeout(24000, 4, 2);
        this.timeout(25000, 4, 3);
        this.timeout(26000, 4, 6);
        this.timeout(27000, 4, 7);
        this.timeout(28000, 5, 0);
        this.timeout(29000, 5, 1);
        this.timeout(30000, 5, 2);
        this.timeout(31000, 5, 7);
        this.timeout(32000, 6, 1);
        this.timeout(33000, 6, 2);
        this.timeout(34000, 6, 3);
        this.timeout(35000, 6, 4);
        this.timeout(36000, 6, 7);
        this.timeout(37000, 7, 2);
        this.timeout(38000, 7, 3);
        this.timeout(39000, 7, 4);
        this.timeout(40000, 7, 5);
        this.timeout(41000, 7, 6);
        // { from: 1, to: 2},
        // { from: 1, to: 3},
        // { from: 1, to: 4},
        // { from: 1, to: 5},
        // { from: 1, to: 6},
        // { from: 2, to: 0},
        // { from: 2, to: 1},
        // { from: 2, to: 3},
        // { from: 2, to: 4},
        // { from: 2, to: 5},
        // { from: 2, to: 6},
        // { from: 2, to: 7},
        // { from: 3, to: 0},
        // { from: 3, to: 1},
        // { from: 3, to: 2},
        // { from: 3, to: 4},
        // { from: 3, to: 6},
        // { from: 3, to: 7},
        // { from: 4, to: 0},
        // { from: 4, to: 1},
        // { from: 4, to: 2},
        // { from: 4, to: 3},
        // { from: 4, to: 6},
        // { from: 4, to: 7},
        // { from: 5, to: 0},
        // { from: 5, to: 1},
        // { from: 5, to: 2},
        // { from: 5, to: 7},
        // { from: 6, to: 1},
        // { from: 6, to: 2},
        // { from: 6, to: 3},
        // { from: 6, to: 4},
        // { from: 6, to: 7},
        // { from: 7, to: 2},
        // { from: 7, to: 3},
        // { from: 7, to: 4},
        // { from: 7, to: 5},
        // { from: 7, to: 10},
        // this.networkInstance.body.data.nodes.add([{ id: 11, label: 'Node ' + 11, color: 'green' }])
        // this.networkInstance.body.data.nodes.add([{ id: 12, label: 'Node ' + 12, color: 'yello' }])
        // setTimeout(() => {
        //     this.networkInstance.body.data.edges.add([{ from: '10', to: '11' }])
        // },
        //   5000);
        // this.networkInstance.body.data.edges.add([{ from: '5', to: '6' }])
        // this.networkInstance.body.data.nodes.add([{ id: 10, label: 'Node ' + 10, color: 'pink' }])
        var edges = new vis__WEBPACK_IMPORTED_MODULE_2__["DataSet"]([
            // { from: 0, to: 1 },
            // { from: 0, to: 2 },
            // { from: 1, to: 2 },
            // { from: 1, to: 4 },
            // { from: 2, to: 4 },
            // { from: 4, to: 3 }
            { from: 0, to: 2 },
        ]);
    };
    GraphColoringComponent.prototype.addEdge = function (u, v) {
        this.adj[u].push(v);
        this.adj[v].push(u);
    };
    GraphColoringComponent.prototype.greedyColoring = function () {
        // Assign the first color to first vertex 
        this.result[0] = 0;
        // Initialize remaining V-1 vertices as unassigned 
        for (var u = 1; u < this.V; u++) {
            this.result[u] = -1; // no color is assigned to u 
        }
        // A temporary array to store the available colors. True 
        // value of available[cr] would mean that the color cr is 
        // assigned to one of its adjacent vertices 
        var available = new Array(this.V);
        for (var cr = 0; cr < this.V; cr++) {
            available[cr] = false;
        }
        // Assign colors to remaining V-1 vertices 
        for (var u = 1; u < this.V; u++) {
            // Process all adjacent vertices and flag their colors 
            // as unavailable 
            for (var i in this.adj[u]) {
                // console.log("second: " + this.result[this.adj[u][i]]);
                if (this.result[this.result[this.adj[u][i]]] != -1) {
                    available[this.result[this.adj[u][i]]] = true;
                }
            }
            // Find the first available color 
            var cr = void 0;
            for (cr = 0; cr < this.V; cr++) {
                if (available[cr] == false) {
                    break;
                }
            }
            this.result[u] = cr; // Assign the found color 
            // Reset the values back to false for the next iteration 
            for (var i in this.adj[u]) {
                // console.log("Last: " + this.result[this.adj[u][i]]);
                if (this.result[this.result[i]] != -1) {
                    available[this.result[i]] = false;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringComponent.prototype, "el", void 0);
    GraphColoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-coloring',
            template: __webpack_require__(/*! ./graph-coloring.component.html */ "./src/app/components/graph-coloring/graph-coloring.component.html"),
            styles: [__webpack_require__(/*! ./graph-coloring.component.css */ "./src/app/components/graph-coloring/graph-coloring.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphColoringComponent);
    return GraphColoringComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" style=\"font-size: 15px; position: absolute\">\n  <a class=\"navbar-brand\" routerLink=\"/\" style=\"font-size: 19px\">Algorithms Runner</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Algorithms\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/bisection\" style=\"font-size: 13px;\">Bisection</a>\n          <a class=\"dropdown-item\" routerLink=\"/false-position\" style=\"font-size: 13px;\">False-Position</a>\n          <a class=\"dropdown-item\" routerLink=\"/secant-method\" style=\"font-size: 13px;\">Secant</a>\n          <a class=\"dropdown-item\" routerLink=\"/newton-method\" style=\"font-size: 13px;\">Newton's Raphson</a>\n          <a class=\"dropdown-item\" routerLink=\"/graph-coloring\" style=\"font-size: 13px;\">Graph Coloring</a>\n          <a class=\"dropdown-item\" routerLink=\"/prim\" style=\"font-size: 13px;\">Prim Algorithm</a>\n          <a class=\"dropdown-item\" routerLink=\"/kruskal\" style=\"font-size: 13px;\">Kruskal's Algorithm</a>\n          <a class=\"dropdown-item\" routerLink=\"/dijkstra\" style=\"font-size: 13px;\">Dijkstra Algorithm</a>\n          <!-- <a class=\"dropdown-item\" routerLink=\"/graph-coloring-steps\" style=\"font-size: 13px;\">Graph Coloring Steps</a> -->\n          <!-- <a class=\"dropdown-item\" routerLink=\"/kruskal\" style=\"font-size: 13px;\">Kruskal Algorithm</a> -->\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".with-margins {\n    margin: 2em;\n    padding: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXRoLW1hcmdpbnMge1xuICAgIG1hcmdpbjogMmVtO1xuICAgIHBhZGRpbmc6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main with-margins\">\n  \n  <div class=\"row text-center with-margins\">\n    <div class=\"col\">\n      <h2>\n        Design & Analysis of Algorithms - Fall 2019.\n      </h2>\n      <p>\n        Assignments & Yearwork Landing Page.\n      </p>\n      <p>\n        Tab on Algorithms Menu for Demo.\n      </p>\n    </div>\n  </div>\n\n      <!-- Marketing messaging and featurettes\n      ================================================== -->\n      <!-- Wrap the rest of the page in another container to center all the content. -->\n\n      <div class=\"container marketing\">\n        \n        <div class=\"row with-margins\">\n          <div class=\"col\">\n            <h3 class=\"text-center\" style=\"font-weight: bold;\">Team</h3>\n          </div>\n        </div>\n        \n        <!-- Three columns of text below the carousel -->\n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n            <img class=\"rounded-circle\" src=\"https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://d1qb2nb5cznatu.cloudfront.net/users/3546948-original?1563715062\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2>Mustafa Hesham Qamar-ud-Din</h2>\n            <p>Coursera Mentor & Machine Learning Engineer with over 10 years of experience in software application development. Speaks German, Korean, and Spanish.</p>\n            <p><a target=\"_blank\" class=\"btn btn-secondary\" href=\"https://www.linkedin.com/in/mustafaqamaruddin\" role=\"button\">View details &raquo;</a></p>\n          </div><!-- /.col-lg-4 -->\n          <div class=\"col-lg-3\">\n            <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2 style=\"margin-left: 33px;\">Fathy</h2>\n            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n            <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n          </div><!-- /.col-lg-4 -->\n          <div class=\"col-lg-3\">\n            <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2 style=\"\">Mohamed Ibrahim Abdelhamid</h2>\n            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n            <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n          </div><!-- /.col-lg-4 -->\n             <div class=\"col-lg-3\">\n            <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2 style=\"margin-left: 25px\">Eman</h2>\n            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n            <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n          </div><!-- /.col-lg-4 -->\n        </div><!-- /.row -->\n\n\n\n      </div><!-- /.container -->\n\n\n      <!-- FOOTER -->\n      <footer class=\"container\">\n        <!-- <p class=\"float-right\"><a href=\"#\">Back to top</a></p> -->\n        <p>&copy; 2019-2020 Faculty of Computers & Artificial Intelligence.</p>\n      </footer>\n    </main>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/secant/secant.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/secant/secant.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjYW50L3NlY2FudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/secant/secant.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/secant/secant.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n<div class=\"row with-margins\">\n  <div class=\"col\">\n    <div class=\"text-center\">\n      <h2 style=\"font-weight: bold;\">Secant Algorithm</h2>\n    </div>\n    <form class=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Formula</label>\n        <input\n          type=\"text\"\n          name=\"formula\"\n          [(ngModel)]=\"formula\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Lower Bound</label>\n        <input\n          type=\"number\"\n          name=\"xl\"\n          [(ngModel)]=\"xl\"\n          value=\"-10\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Upper Bound</label>\n        type=\"number\"\n        <input\n          name=\"xu\"\n          [(ngModel)]=\"xu\"\n          class=\"form-control\"\n          value=\"+10\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n\n      <!-- <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Stopping Criterion</label>\n        <input\n          type=\"number\"\n          name=\"es\"\n          [(ngModel)]=\"model.es\"\n          class=\"form-control\"\n          placeholder=\"0.01\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n      <div class=\"form-group\">\n          <label style=\"font-size: 15px\">Maximum Iterations</label>\n          <input\n            type=\"number\"\n            name=\"imax\"\n            [(ngModel)]=\"model.imax\"\n            class=\"form-control\"\n            placeholder=\"100\"\n            required\n            style=\"font-size: 16px\"\n          /> -->\n        <!-- </div> -->\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Submit\" style=\"font-size: 15px;\"  class=\"btn btn-primary\"/>\n      </div>\n    </form>\n  </div>\n</div>\n<div *ngIf=\"xr\" class=\"row\">\n  <div class=\"col\" style=\"font-size: 15px;\">\n      <p> The Root is {{ xr }} </p>\n      <!-- <p> Verification Test F({{xr}})</p> -->\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/secant/secant.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/secant/secant.component.ts ***!
  \*******************************************************/
/*! exports provided: SecantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecantComponent", function() { return SecantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _numerical_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../numerical-methods */ "./src/app/numerical-methods.ts");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");




var SecantComponent = /** @class */ (function () {
    function SecantComponent() {
        this.model = new _numerical_methods__WEBPACK_IMPORTED_MODULE_2__["NumericalMethods"](-10, +10, 0.01, 100, 'x^3-2x-5');
    }
    SecantComponent.prototype.ngOnInit = function () {
    };
    // absolute(value:number) {             //to find magnitude of value
    //   if (value < 0)
    //     return (-value);
    //   return value;
    // }
    // TODO To be implemented
    // checkIfAngleExists(formula) {
    // let arrOfAngles = [];
    // }
    SecantComponent.prototype.f = function (number, formula) {
        // return ((x * x) - (4 * x) - 10);
        var scope = { x: number };
        // console.log(math.evaluate('cos(x/2/3.141592653589793*360 deg)', scope));
        // console.log("MAth.h " + number + " " +  Math.cos(number));
        // scope = { x: number / 2 / 3.141592653589793 * 360 };
        // console.log("Eval " + number + " " + math.evaluate(formula, scope) / (3.141592653589793*360));
        // console.log(formula.indexOf('cos'));
        // if (formula.indexOf('cos') == -1 && formula.indexOf('sin') == -1 && formula.indexOf('tan') == -1 && formula.indexOf('sec') == -1) {
        // console.log(number + " " + math.evaluate(formula, scope));  
        return mathjs__WEBPACK_IMPORTED_MODULE_3__["evaluate"](formula, scope);
        // } 
        // let pos = formula.indexOf('deg');
        // pos = pos - 1;
        // const newString = '/2/3.141592653589793*360 ';
        // const out = [formula.slice(0, pos), newString, formula.slice(pos)].join('');
        // // console.log("hello " +out);
        // console.log("Eval " + number + " " + math.evaluate(out, scope));
        // return math.evaluate(out, scope);
        // // const pos = formula.lastIndexOf('x')+1;
        // const newString = '3.141592653589793*360 ';
        // const out = [formula.slice(0, pos),newString, formula.slice(pos)].join('');
        // console.log("hello " +out);
        // return math.evaluate('cos(x/2/3.141592653589793*360 deg)', scope)
    };
    SecantComponent.prototype.secant = function (x1, x2, formula) {
        var maxIteration = 100;
        var i = 0;
        var xNew = 0;
        while (i < maxIteration) {
            if (Number.isFinite(x2 - (x2 - x1) / (this.f(x2, formula) - this.f(x1, formula)) * this.f(x2, formula))) {
                xNew = x2 - (x2 - x1) / (this.f(x2, formula) - this.f(x1, formula)) * this.f(x2, formula);
            }
            else {
                alert("You're trying to divide by zero watch out");
            }
            if (Math.abs(xNew - x2) < 0.000001) {
                break;
            }
            else {
                x1 = x2;
                x2 = xNew;
            }
            i++;
        }
        return xNew;
    };
    // TODO do a table which contains the itr and x0 , x1 , function(x_new)
    // secant(x1:number, x2:number, formula: String) {
    //   let x3, root;
    //   let  f1, f2;
    //   f1 = this.f(x1, formula);
    //   f2 = this.f(x2, formula);
    //   x3 = (f2 * x1 - f1 * x2) / (f2 - f1);
    //   while (this.absolute((x3 - x2) / x3) > 0.00001) {         //test accuracy of x3
    //     x1 = x2;           //shift x values
    //     f1 = f2;
    //     x2 = x3;
    //     f2 = this.f(x2, formula);                 //find new x2
    //     x3 = (f2 * x1 - f1 * x2) / (f2 - f1);          //calculate x3
    //   }
    //   root = x3;
    //   return root;              //root of the equation
    // }
    // performEquation(number: number, formula: String) {
    //   const scope = { x: number }; 
    //   return math.evaluate(formula, scope);
    // }
    // modFalsePos(x0: number, x1: number, es: number, imax: number, formula: String) {
    //   let iter = 0;
    //   let f0 = this.performEquation(x0, formula);
    //   let f1 = this.performEquation(x1, formula);
    //   let il = 0;
    //   let iu = 0;
    //   let xr = null;  /** */
    //   let ea = 0;
    //   let x2 =0;
    //   while ( ea >= es || iter < imax) {
    //     if (iter == 10) {
    //       break;
    //     }
    //     let x2 = x1 - (x1-x0) * f1 / (f1 - f0);
    //     x0 = x1;
    //     x1 = x2;
    //     ea = this.performEquation(x2, formula);
    //     iter += 1;
    //   }
    // return x2;
    // }
    // algorithm for false position yet to be implemented .....
    SecantComponent.prototype.onSubmit = function () {
        // console.log(this.xl); 
        // console.log(this.xu);
        // const scope = { x: 45 };
        // console.log('after eval' + math.evaluate('cos(x/2/3.141592653589793*360 deg)', scope));
        // console.log(Math.cos(45));
        this.xr = this.secant(this.xl, this.xu, this.formula);
        // console.log(this.xr);
        // this.fxr = this.performEquation(this.xr, this.model.formula);
    };
    SecantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secant',
            template: __webpack_require__(/*! ./secant.component.html */ "./src/app/components/secant/secant.component.html"),
            styles: [__webpack_require__(/*! ./secant.component.css */ "./src/app/components/secant/secant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecantComponent);
    return SecantComponent;
}());



/***/ }),

/***/ "./src/app/dijkstra/Vertex.ts":
/*!************************************!*\
  !*** ./src/app/dijkstra/Vertex.ts ***!
  \************************************/
/*! exports provided: Vertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return Vertex; });
var Vertex = /** @class */ (function () {
    function Vertex(theName, theNodes, theWeight) {
        this.name = theName;
        this.nodes = theNodes;
        this.weight = theWeight;
    }
    return Vertex;
}());



/***/ }),

/***/ "./src/app/dijkstra/dijkstra.component.css":
/*!*************************************************!*\
  !*** ./src/app/dijkstra/dijkstra.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpamtzdHJhL2RpamtzdHJhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dijkstra/dijkstra.component.html":
/*!**************************************************!*\
  !*** ./src/app/dijkstra/dijkstra.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; text-align: center;\">Dijkstra Algorithm</h1>\n      <h4 style=\"font-weight: bold; text-align: center;\">Starting from node A to node F</h4>\n    </div>\n  </div>\n  <br />\n  <br />\n  <br />\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Original Graph</h3>\n      <div\n        #original\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Shortest Path</h3>\n      <div\n        #network\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dijkstra/dijkstra.component.ts":
/*!************************************************!*\
  !*** ./src/app/dijkstra/dijkstra.component.ts ***!
  \************************************************/
/*! exports provided: DijkstraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DijkstraComponent", function() { return DijkstraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dijkstraAlgorithm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dijkstraAlgorithm */ "./src/app/dijkstra/dijkstraAlgorithm.ts");
/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vertex */ "./src/app/dijkstra/Vertex.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_4__);





var DijkstraComponent = /** @class */ (function () {
    // Algorithm in  a decent way 
    // 1) add node 0 to minPQ then remove it and add it to the visited(lowest cost) with total 0 and prev itself 
    // 2) get neighbor of the start node look for the min and add it to the visited list and remove it from minPQ
    // 3) check the neighbors of the current visited node seattle as ex if it has been visited before ignore it else let's it's in minPQ but not in visited now that means that there could be a shorter way to the Idoho so let's measure it if it's shorted update weight and parent and check other neighbors if not in minPQ add it chicago from seattle is 3+2 = 5  
    // 4) shortest is idaho so add it the visited then expand it sf, seattle visited before ignore, something still in minPQ check if the current less than prev    
    // 5) after putting it in visited we expand
    function DijkstraComponent() {
        var _this = this;
        this.timeout = function (time, firstNode, secondNode, weight) {
            setTimeout(function () {
                _this.networkInstance.body.data.edges.add([{ from: firstNode, to: secondNode, label: weight }]);
            }, time);
        };
        this.update = function (time, firstNode, secondNode, weight) {
            setTimeout(function () {
                _this.networkInstance.body.data.edges.update([{ from: firstNode, to: secondNode, label: weight, value: 5, color: { color: '#ff383f' } }]);
            }, time);
        };
    }
    DijkstraComponent.prototype.ngOnInit = function () {
        var originalContainer = this.original.nativeElement;
        var container = this.el.nativeElement;
        var nodes = new vis__WEBPACK_IMPORTED_MODULE_4__["DataSet"]([
            { id: 'A', label: 'A' },
            { id: 'B', label: 'B' },
            { id: 'C', label: 'C' },
            { id: 'D', label: 'D' },
            { id: 'E', label: 'E' },
            { id: 'F', label: 'F' },
            { id: 'G', label: 'G' },
        ]);
        this.originalInstance = new vis__WEBPACK_IMPORTED_MODULE_4__["Network"](originalContainer, { nodes: nodes }, {});
        this.networkInstance = new vis__WEBPACK_IMPORTED_MODULE_4__["Network"](container, { nodes: nodes }, {});
        var dijkstra = new _dijkstraAlgorithm__WEBPACK_IMPORTED_MODULE_2__["Dijkstra"]();
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("A", [{ nameOfVertex: "C", weight: 3 }, { nameOfVertex: "E", weight: 7 }, { nameOfVertex: "B", weight: 4 }], 1));
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'C', label: '3' }]);
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("B", [{ nameOfVertex: "A", weight: 4 }, { nameOfVertex: "C", weight: 6 }, { nameOfVertex: "D", weight: 5 }], 1));
        this.originalInstance.body.data.edges.add([{ from: "B", to: "A", label: "4" }, { from: "B", to: "C", label: "6" }, { from: "B", to: "D", label: "5" }]);
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("C", [{ nameOfVertex: "A", weight: 3 }, { nameOfVertex: "B", weight: 6 }, { nameOfVertex: "E", weight: 8 }, { nameOfVertex: "D", weight: 11 }], 1));
        this.originalInstance.body.data.edges.add([{ from: "C", to: "E", label: "8" }, { from: "C", to: "D", label: "11" }]);
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("D", [{ nameOfVertex: "B", weight: 5 }, { nameOfVertex: "C", weight: 11 }, { nameOfVertex: "E", weight: 2 }, { nameOfVertex: "F", weight: 2 }], 1));
        this.originalInstance.body.data.edges.add([{ from: "D", to: "E", label: "2" }, { from: "D", to: "F", label: "2" }]);
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("E", [{ nameOfVertex: "A", weight: 7 }, { nameOfVertex: "C", weight: 8 }, { nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 5 }], 1));
        this.originalInstance.body.data.edges.add([{ from: "E", to: "A", label: "7" }]);
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("F", [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }], 1));
        dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_3__["Vertex"]("G", [{ nameOfVertex: "D", weight: 10 }, { nameOfVertex: "E", weight: 5 }, { nameOfVertex: "F", weight: 3 }], 1));
        this.originalInstance.body.data.edges.add([{ from: "G", to: "D", label: "10" }, { from: "G", to: "E", label: "5" }, { from: "G", to: "F", label: "3 " }]);
        // this.networkInstance.body.data.edges.add([{ from: 'A', to: 'C', label: '3' }]);
        this.timeout(1000, "A", "C", "3");
        // this.networkInstance.body.data.edges.add([{ from: "B", to: "A", label: "4", value: 5, color: { color: '#ff383f' } }, { from: "B", to: "C", label: "6" }, { from: "B", to: "D", label: "5", value: 5, color: { color: '#ff383f' } }]);
        this.timeout(2000, "B", "A", "4");
        this.timeout(3000, "B", "C", "6");
        this.timeout(4000, "B", "D", "5");
        // this.networkInstance.body.data.edges.add([{ from: "C", to: "E", label: "8" }, { from: "C", to: "D", label: "11" }]);
        this.timeout(5000, "C", "E", "8");
        this.timeout(6000, "C", "D", "11");
        // this.networkInstance.body.data.edges.add([{ from: "D", to: "E", label: "2" }, { from: "D", to: "F", label: "2", value: 5, color: { color: '#ff383f' } }]);
        this.timeout(7000, "D", "E", "2");
        this.timeout(8000, "D", "F", "2");
        // this.networkInstance.body.data.edges.add([{ from: "E", to: "A", label: "7" }]);
        this.timeout(9000, "E", "A", "7");
        // this.networkInstance.body.data.edges.add([{ from: "G", to: "D", label: "10" }, { from: "G", to: "E", label: "5" }, { from: "G", to: "F", label: "3" }]);
        this.timeout(10000, "G", "D", "10");
        this.timeout(11000, "G", "E", "5");
        this.timeout(12000, "G", "F", "3");
        this.update(13000, "B", "A", "4");
        this.update(15000, "B", "D", "5");
        this.update(17000, "D", "F", "2");
        console.log(dijkstra.findShortestWay("A", "F"));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DijkstraComponent.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('original'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DijkstraComponent.prototype, "original", void 0);
    DijkstraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dijkstra',
            template: __webpack_require__(/*! ./dijkstra.component.html */ "./src/app/dijkstra/dijkstra.component.html"),
            styles: [__webpack_require__(/*! ./dijkstra.component.css */ "./src/app/dijkstra/dijkstra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DijkstraComponent);
    return DijkstraComponent;
}());



/***/ }),

/***/ "./src/app/dijkstra/dijkstraAlgorithm.ts":
/*!***********************************************!*\
  !*** ./src/app/dijkstra/dijkstraAlgorithm.ts ***!
  \***********************************************/
/*! exports provided: Dijkstra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dijkstra", function() { return Dijkstra; });
/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vertex */ "./src/app/dijkstra/Vertex.ts");

var Dijkstra = /** @class */ (function () {
    function Dijkstra() {
        this.vertices = {};
    }
    Dijkstra.prototype.addVertex = function (vertex) {
        this.vertices[vertex.name] = vertex;
    };
    Dijkstra.prototype.findPointsOfShortestWay = function (start, finish, weight) {
        var nextVertex = finish;
        var arrayWithVertex = [];
        while (nextVertex !== start) {
            var minWeigth = Number.MAX_VALUE;
            var minVertex = "";
            for (var _i = 0, _a = this.vertices[nextVertex].nodes; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                    minWeigth = this.vertices[i.nameOfVertex].weight;
                    minVertex = i.nameOfVertex;
                }
            }
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return arrayWithVertex;
    };
    Dijkstra.prototype.findShortestWay = function (start, finish) {
        var _this = this;
        var nodes = {};
        var visitedVertex = [];
        for (var i in this.vertices) {
            if (this.vertices[i].name === start) {
                this.vertices[i].weight = 0;
            }
            else {
                this.vertices[i].weight = Number.MAX_VALUE;
            }
            nodes[this.vertices[i].name] = this.vertices[i].weight;
        }
        while (Object.keys(nodes).length !== 0) {
            var sortedVisitedByWeight = Object.keys(nodes).sort(function (a, b) { return _this.vertices[a].weight - _this.vertices[b].weight; });
            var currentVertex = this.vertices[sortedVisitedByWeight[0]];
            for (var _i = 0, _a = currentVertex.nodes; _i < _a.length; _i++) {
                var j = _a[_i];
                var calculateWeight = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                    this.vertices[j.nameOfVertex].weight = calculateWeight;
                }
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        var finishWeight = this.vertices[finish].weight;
        var arrayWithVertex = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
        arrayWithVertex.push(finish, finishWeight.toString());
        return arrayWithVertex;
    };
    return Dijkstra;
}());

var dijkstra = new Dijkstra();
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("A", [{ nameOfVertex: "C", weight: 3 }, { nameOfVertex: "E", weight: 7 }, { nameOfVertex: "B", weight: 4 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("B", [{ nameOfVertex: "A", weight: 4 }, { nameOfVertex: "C", weight: 6 }, { nameOfVertex: "D", weight: 5 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("C", [{ nameOfVertex: "A", weight: 3 }, { nameOfVertex: "B", weight: 6 }, { nameOfVertex: "E", weight: 8 }, { nameOfVertex: "D", weight: 11 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("D", [{ nameOfVertex: "B", weight: 5 }, { nameOfVertex: "C", weight: 11 }, { nameOfVertex: "E", weight: 2 }, { nameOfVertex: "F", weight: 2 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("E", [{ nameOfVertex: "A", weight: 7 }, { nameOfVertex: "C", weight: 8 }, { nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 5 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("F", [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }], 1));
dijkstra.addVertex(new _Vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]("G", [{ nameOfVertex: "D", weight: 10 }, { nameOfVertex: "E", weight: 5 }, { nameOfVertex: "F", weight: 3 }], 1));
console.log(dijkstra.findShortestWay("A", "F"));


/***/ }),

/***/ "./src/app/graph-coloring-steps/graph-coloring-steps.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/graph-coloring-steps/graph-coloring-steps.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoLWNvbG9yaW5nLXN0ZXBzL2dyYXBoLWNvbG9yaW5nLXN0ZXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/graph-coloring-steps/graph-coloring-steps.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/graph-coloring-steps/graph-coloring-steps.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <h3>Vertex Coloring: Welsh-Powell Algorithm</h3>\n    <h4>\n      Source:\n      <a\n        href=\"http://mrsleblancsmath.pbworks.com/w/file/fetch/46119304/vertex%20coloring%20algorithm.pdf\"\n        >http://mrsleblancsmath.pbworks.com/w/file/fetch/46119304/vertex%20coloring%20algorithm.pdf</a\n      >\n    </h4>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network1></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network2></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network3></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network4></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network5></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div #network6></div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <h5>Test Graph:</h5>\n    <div *ngFor=\"let node of adj; let i = index\">\n      <li>{{ i }} -> {{ node }}</li>\n    </div>\n  </div>\n  <div class=\"col\">\n    <h5>Result Coloring:</h5>\n    <div *ngFor=\"let node of result; let i = index\">\n      <li>{{ i }} -> {{ result[i] }}</li>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/graph-coloring-steps/graph-coloring-steps.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/graph-coloring-steps/graph-coloring-steps.component.ts ***!
  \************************************************************************/
/*! exports provided: GraphColoringStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphColoringStepsComponent", function() { return GraphColoringStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_2__);



var GraphColoringStepsComponent = /** @class */ (function () {
    function GraphColoringStepsComponent() {
    }
    GraphColoringStepsComponent.prototype.ngOnInit = function () {
        this.V = 5;
        this.adj = new Array();
        this.result = new Array(this.V);
        var container1 = this.el1.nativeElement;
        var container2 = this.el2.nativeElement;
        var container3 = this.el3.nativeElement;
        var container4 = this.el4.nativeElement;
        var container5 = this.el5.nativeElement;
        var container6 = this.el6.nativeElement;
        for (var i = 0; i < this.V; i++) {
            this.adj.push(new Array());
        }
        // first one 
        this.addEdge(0, 1);
        this.addEdge(0, 2);
        this.addEdge(1, 2);
        this.addEdge(1, 3);
        this.addEdge(2, 3);
        this.addEdge(3, 4);
        // Second one 
        // this.addEdge(0, 1);
        // this.addEdge(0, 2);
        // this.addEdge(1, 2);
        // this.addEdge(1, 4);
        // this.addEdge(2, 4);
        // this.addEdge(4, 3);
        // End of Second one 
        this.greedyColoring();
        var colors = ["red", "blue", "yellow", "green", "aqua", "brown"];
        this.networkInstance1 = new vis__WEBPACK_IMPORTED_MODULE_2__["Network"](container1, {}, {});
        this.networkInstance1.body.data.nodes.add([{ id: 0, label: 'Node ' + 0, color: colors[this.result[0]] }]);
        this.networkInstance2 = new vis__WEBPACK_IMPORTED_MODULE_2__["Network"](container2, {}, {});
        this.networkInstance2.body.data.nodes.add([{ id: 0, label: 'Node ' + 0, color: colors[this.result[0]] }, { id: 1, label: 'Node ' + 1, color: colors[this.result[1]] }]);
        this.networkInstance2.body.data.edges.add([{ from: '0', to: '1' }]);
        // const data = { nodes };
        // this.mapColoring();
    };
    // timeout = (time, firstNode, secondNode) => {
    //   setTimeout(() => {
    //     this.networkInstance.body.data.edges.add([{ from: firstNode, to: secondNode }]);
    //   },
    //     time);
    // }
    // mapColoring = () => {
    //   const colors = ["red", "blue", "yellow", "green", "aqua", "brown"];
    //   // let nodes = new DataSet<any>([]);
    //   let counter = 1000;
    //   for (let c = 0; c < this.result.length; c++) {
    //     this.networkInstance.body.data.nodes.add([{ id: c, label: 'Node ' + c, color: colors[this.result[c]] }]);
    //   }
    // }
    GraphColoringStepsComponent.prototype.addEdge = function (u, v) {
        this.adj[u].push(v);
        this.adj[v].push(u);
    };
    GraphColoringStepsComponent.prototype.greedyColoring = function () {
        // Assign the first color to first vertex 
        this.result[0] = 0;
        // Initialize remaining V-1 vertices as unassigned 
        for (var u = 1; u < this.V; u++) {
            this.result[u] = -1; // no color is assigned to u 
        }
        // A temporary array to store the available colors. True 
        // value of available[cr] would mean that the color cr is 
        // assigned to one of its adjacent vertices 
        var available = new Array(this.V);
        for (var cr = 0; cr < this.V; cr++) {
            available[cr] = false;
        }
        // Assign colors to remaining V-1 vertices 
        for (var u = 1; u < this.V; u++) {
            // Process all adjacent vertices and flag their colors 
            // as unavailable 
            for (var i in this.adj[u]) {
                // console.log("second: " + this.result[this.adj[u][i]]);
                if (this.result[this.result[this.adj[u][i]]] != -1) {
                    available[this.result[this.adj[u][i]]] = true;
                }
            }
            // Find the first available color 
            var cr = void 0;
            for (cr = 0; cr < this.V; cr++) {
                if (available[cr] == false) {
                    break;
                }
            }
            this.result[u] = cr; // Assign the found color 
            // Reset the values back to false for the next iteration 
            for (var i in this.adj[u]) {
                // console.log("Last: " + this.result[this.adj[u][i]]);
                if (this.result[this.result[i]] != -1) {
                    available[this.result[i]] = false;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network5'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network6'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GraphColoringStepsComponent.prototype, "el6", void 0);
    GraphColoringStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-coloring-steps',
            template: __webpack_require__(/*! ./graph-coloring-steps.component.html */ "./src/app/graph-coloring-steps/graph-coloring-steps.component.html"),
            styles: [__webpack_require__(/*! ./graph-coloring-steps.component.css */ "./src/app/graph-coloring-steps/graph-coloring-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphColoringStepsComponent);
    return GraphColoringStepsComponent;
}());



/***/ }),

/***/ "./src/app/kruskal/Comparator.ts":
/*!***************************************!*\
  !*** ./src/app/kruskal/Comparator.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Comparator = /** @class */ (function () {
    /**
     * @param {function(a: *, b: *)} [compareFunction]
     */
    function Comparator(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }
    /**
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    Comparator.defaultCompareFunction = function (a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    };
    Comparator.prototype.equal = function (a, b) {
        return this.compare(a, b) === 0;
    };
    Comparator.prototype.lessThan = function (a, b) {
        return this.compare(a, b) < 0;
    };
    Comparator.prototype.greaterThan = function (a, b) {
        return this.compare(a, b) > 0;
    };
    Comparator.prototype.lessThanOrEqual = function (a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    };
    Comparator.prototype.greaterThanOrEqual = function (a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    };
    Comparator.prototype.reverse = function () {
        var compareOriginal = this.compare;
        this.compare = function (a, b) { return compareOriginal(b, a); };
    };
    return Comparator;
}());
/* harmony default export */ __webpack_exports__["default"] = (Comparator);


/***/ }),

/***/ "./src/app/kruskal/DisjointSet.ts":
/*!****************************************!*\
  !*** ./src/app/kruskal/DisjointSet.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisjointSetItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisjointSetItem */ "./src/app/kruskal/DisjointSetItem.ts");

var DisjointSet = /** @class */ (function () {
    /**
     * @param {function(value: *)} [keyCallback]
     */
    function DisjointSet(keyCallback) {
        this.keyCallback = keyCallback;
        this.items = {};
    }
    /**
     * @param {*} itemValue
     * @return {DisjointSet}
     */
    DisjointSet.prototype.makeSet = function (itemValue) {
        var disjointSetItem = new _DisjointSetItem__WEBPACK_IMPORTED_MODULE_0__["default"](itemValue, this.keyCallback);
        if (!this.items[disjointSetItem.getKey()]) {
            // Add new item only in case if it not presented yet.
            this.items[disjointSetItem.getKey()] = disjointSetItem;
        }
        return this;
    };
    /**
     * Find set representation node.
     *
     * @param {*} itemValue
     * @return {(string|null)}
     */
    DisjointSet.prototype.find = function (itemValue) {
        var templateDisjointItem = new _DisjointSetItem__WEBPACK_IMPORTED_MODULE_0__["default"](itemValue, this.keyCallback);
        // Try to find item itself;
        var requiredDisjointItem = this.items[templateDisjointItem.getKey()];
        if (!requiredDisjointItem) {
            return null;
        }
        return requiredDisjointItem.getRoot().getKey();
    };
    /**
     * Union by rank.
     *
     * @param {*} valueA
     * @param {*} valueB
     * @return {DisjointSet}
     */
    DisjointSet.prototype.union = function (valueA, valueB) {
        var rootKeyA = this.find(valueA);
        var rootKeyB = this.find(valueB);
        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }
        if (rootKeyA === rootKeyB) {
            // In case if both elements are already in the same set then just return its key.
            return this;
        }
        var rootA = this.items[rootKeyA];
        var rootB = this.items[rootKeyB];
        if (rootA.getRank() < rootB.getRank()) {
            // If rootB's tree is bigger then make rootB to be a new root.
            rootB.addChild(rootA);
            return this;
        }
        // If rootA's tree is bigger then make rootA to be a new root.
        rootA.addChild(rootB);
        return this;
    };
    /**
     * @param {*} valueA
     * @param {*} valueB
     * @return {boolean}
     */
    DisjointSet.prototype.inSameSet = function (valueA, valueB) {
        var rootKeyA = this.find(valueA);
        var rootKeyB = this.find(valueB);
        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }
        return rootKeyA === rootKeyB;
    };
    return DisjointSet;
}());
/* harmony default export */ __webpack_exports__["default"] = (DisjointSet);


/***/ }),

/***/ "./src/app/kruskal/DisjointSetItem.ts":
/*!********************************************!*\
  !*** ./src/app/kruskal/DisjointSetItem.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DisjointSetItem = /** @class */ (function () {
    /**
     * @param {*} value
     * @param {function(value: *)} [keyCallback]
     */
    function DisjointSetItem(value, keyCallback) {
        this.value = value;
        this.keyCallback = keyCallback;
        /** @var {DisjointSetItem} this.parent */
        this.parent = null;
        this.children = {};
    }
    /**
     * @return {*}
     */
    DisjointSetItem.prototype.getKey = function () {
        // Allow user to define custom key generator.
        if (this.keyCallback) {
            return this.keyCallback(this.value);
        }
        // Otherwise use value as a key by default.
        return this.value;
    };
    /**
     * @return {DisjointSetItem}
     */
    DisjointSetItem.prototype.getRoot = function () {
        return this.isRoot() ? this : this.parent.getRoot();
    };
    /**
     * @return {boolean}
     */
    DisjointSetItem.prototype.isRoot = function () {
        return this.parent === null;
    };
    /**
     * Rank basically means the number of all ancestors.
     *
     * @return {number}
     */
    DisjointSetItem.prototype.getRank = function () {
        if (this.getChildren().length === 0) {
            return 0;
        }
        var rank = 0;
        /** @var {DisjointSetItem} child */
        this.getChildren().forEach(function (child) {
            // Count child itself.
            rank += 1;
            // Also add all children of current child.
            rank += child.getRank();
        });
        return rank;
    };
    /**
     * @return {DisjointSetItem[]}
     */
    DisjointSetItem.prototype.getChildren = function () {
        return Object.values(this.children);
    };
    /**
     * @param {DisjointSetItem} parentItem
     * @param {boolean} forceSettingParentChild
     * @return {DisjointSetItem}
     */
    DisjointSetItem.prototype.setParent = function (parentItem, forceSettingParentChild) {
        if (forceSettingParentChild === void 0) { forceSettingParentChild = true; }
        this.parent = parentItem;
        if (forceSettingParentChild) {
            parentItem.addChild(this);
        }
        return this;
    };
    /**
     * @param {DisjointSetItem} childItem
     * @return {DisjointSetItem}
     */
    DisjointSetItem.prototype.addChild = function (childItem) {
        this.children[childItem.getKey()] = childItem;
        childItem.setParent(this, false);
        return this;
    };
    return DisjointSetItem;
}());
/* harmony default export */ __webpack_exports__["default"] = (DisjointSetItem);


/***/ }),

/***/ "./src/app/kruskal/Graph.ts":
/*!**********************************!*\
  !*** ./src/app/kruskal/Graph.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Graph = /** @class */ (function () {
    /**
     * @param {boolean} isDirected
     */
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }
    /**
     * @param {GraphVertex} newVertex
     * @returns {Graph}
     */
    Graph.prototype.addVertex = function (newVertex) {
        this.vertices[newVertex.getKey()] = newVertex;
        return this;
    };
    /**
     * @param {string} vertexKey
     * @returns GraphVertex
     */
    Graph.prototype.getVertexByKey = function (vertexKey) {
        return this.vertices[vertexKey];
    };
    /**
     * @param {GraphVertex} vertex
     * @returns {GraphVertex[]}
     */
    Graph.prototype.getNeighbors = function (vertex) {
        return vertex.getNeighbors();
    };
    /**
     * @return {GraphVertex[]}
     */
    Graph.prototype.getAllVertices = function () {
        return Object.values(this.vertices);
    };
    /**
     * @return {GraphEdge[]}
     */
    Graph.prototype.getAllEdges = function () {
        return Object.values(this.edges);
    };
    /**
     * @param {GraphEdge} edge
     * @returns {Graph}
     */
    Graph.prototype.addEdge = function (edge) {
        // Try to find and end start vertices.
        var startVertex = this.getVertexByKey(edge.startVertex.getKey());
        var endVertex = this.getVertexByKey(edge.endVertex.getKey());
        // Insert start vertex if it wasn't inserted.
        if (!startVertex) {
            this.addVertex(edge.startVertex);
            startVertex = this.getVertexByKey(edge.startVertex.getKey());
        }
        // Insert end vertex if it wasn't inserted.
        if (!endVertex) {
            this.addVertex(edge.endVertex);
            endVertex = this.getVertexByKey(edge.endVertex.getKey());
        }
        // Check if edge has been already added.
        if (this.edges[edge.getKey()]) {
            throw new Error('Edge has already been added before');
        }
        else {
            this.edges[edge.getKey()] = edge;
        }
        // Add edge to the vertices.
        if (this.isDirected) {
            // If graph IS directed then add the edge only to start vertex.
            startVertex.addEdge(edge);
        }
        else {
            // If graph ISN'T directed then add the edge to both vertices.
            startVertex.addEdge(edge);
            endVertex.addEdge(edge);
        }
        return this;
    };
    /**
     * @param {GraphEdge} edge
     */
    Graph.prototype.deleteEdge = function (edge) {
        // Delete edge from the list of edges.
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        }
        else {
            throw new Error('Edge not found in graph');
        }
        // Try to find and end start vertices and delete edge from them.
        var startVertex = this.getVertexByKey(edge.startVertex.getKey());
        var endVertex = this.getVertexByKey(edge.endVertex.getKey());
        startVertex.deleteEdge(edge);
        endVertex.deleteEdge(edge);
    };
    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @return {(GraphEdge|null)}
     */
    Graph.prototype.findEdge = function (startVertex, endVertex) {
        var vertex = this.getVertexByKey(startVertex.getKey());
        if (!vertex) {
            return null;
        }
        return vertex.findEdge(endVertex);
    };
    /**
     * @param {string} vertexKey
     * @returns {GraphVertex}
     */
    Graph.prototype.findVertexByKey = function (vertexKey) {
        if (this.vertices[vertexKey]) {
            return this.vertices[vertexKey];
        }
        return null;
    };
    /**
     * @return {number}
     */
    Graph.prototype.getWeight = function () {
        return this.getAllEdges().reduce(function (weight, graphEdge) {
            return weight + graphEdge.weight;
        }, 0);
    };
    /**
     * Reverse all the edges in directed graph.
     * @return {Graph}
     */
    Graph.prototype.reverse = function () {
        var _this = this;
        /** @param {GraphEdge} edge */
        this.getAllEdges().forEach(function (edge) {
            // Delete straight edge from graph and from vertices.
            _this.deleteEdge(edge);
            // Reverse the edge.
            edge.reverse();
            // Add reversed edge back to the graph and its vertices.
            _this.addEdge(edge);
        });
        return this;
    };
    /**
     * @return {object}
     */
    Graph.prototype.getVerticesIndices = function () {
        var verticesIndices = {};
        this.getAllVertices().forEach(function (vertex, index) {
            verticesIndices[vertex.getKey()] = index;
        });
        return verticesIndices;
    };
    /**
     * @return {*[][]}
     */
    Graph.prototype.getAdjacencyMatrix = function () {
        var _this = this;
        var vertices = this.getAllVertices();
        var verticesIndices = this.getVerticesIndices();
        // Init matrix with infinities meaning that there is no ways of
        // getting from one vertex to another yet.
        var adjacencyMatrix = Array(vertices.length).fill(null).map(function () {
            return Array(vertices.length).fill(Infinity);
        });
        // Fill the columns.
        vertices.forEach(function (vertex, vertexIndex) {
            vertex.getNeighbors().forEach(function (neighbor) {
                var neighborIndex = verticesIndices[neighbor.getKey()];
                adjacencyMatrix[vertexIndex][neighborIndex] = _this.findEdge(vertex, neighbor).weight;
            });
        });
        return adjacencyMatrix;
    };
    /**
     * @return {string}
     */
    Graph.prototype.toString = function () {
        return Object.keys(this.vertices).toString();
    };
    return Graph;
}());
/* harmony default export */ __webpack_exports__["default"] = (Graph);


/***/ }),

/***/ "./src/app/kruskal/GraphEdge.ts":
/*!**************************************!*\
  !*** ./src/app/kruskal/GraphEdge.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GraphEdge = /** @class */ (function () {
    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @param {number} [weight=1]
     */
    function GraphEdge(startVertex, endVertex, weight) {
        if (weight === void 0) { weight = 0; }
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }
    /**
     * @return {string}
     */
    GraphEdge.prototype.getKey = function () {
        var startVertexKey = this.startVertex.getKey();
        var endVertexKey = this.endVertex.getKey();
        return startVertexKey + "_" + endVertexKey;
    };
    /**
     * @return {GraphEdge}
     */
    GraphEdge.prototype.reverse = function () {
        var tmp = this.startVertex;
        this.startVertex = this.endVertex;
        this.endVertex = tmp;
        return this;
    };
    /**
     * @return {string}
     */
    GraphEdge.prototype.toString = function () {
        return this.getKey();
    };
    return GraphEdge;
}());
/* harmony default export */ __webpack_exports__["default"] = (GraphEdge);


/***/ }),

/***/ "./src/app/kruskal/GraphVertex.ts":
/*!****************************************!*\
  !*** ./src/app/kruskal/GraphVertex.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ "./src/app/kruskal/LinkedList.ts");

var GraphVertex = /** @class */ (function () {
    /**
     * @param {*} value
     */
    function GraphVertex(value) {
        if (value === undefined) {
            throw new Error('Graph vertex must have a value');
        }
        /**
         * @param {GraphEdge} edgeA
         * @param {GraphEdge} edgeB
         */
        var edgeComparator = function (edgeA, edgeB) {
            if (edgeA.getKey() === edgeB.getKey()) {
                return 0;
            }
            return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
        };
        // Normally you would store string value like vertex name.
        // But generally it may be any object as well
        this.value = value;
        this.edges = new _LinkedList__WEBPACK_IMPORTED_MODULE_0__["default"](edgeComparator);
    }
    /**
     * @param {GraphEdge} edge
     * @returns {GraphVertex}
     */
    GraphVertex.prototype.addEdge = function (edge) {
        this.edges.append(edge);
        return this;
    };
    /**
     * @param {GraphEdge} edge
     */
    GraphVertex.prototype.deleteEdge = function (edge) {
        this.edges.delete(edge);
    };
    /**
     * @returns {GraphVertex[]}
     */
    GraphVertex.prototype.getNeighbors = function () {
        var _this = this;
        var edges = this.edges.toArray();
        /** @param {LinkedListNode} node */
        var neighborsConverter = function (node) {
            return node.value.startVertex === _this ? node.value.endVertex : node.value.startVertex;
        };
        // Return either start or end vertex.
        // For undirected graphs it is possible that current vertex will be the end one.
        return edges.map(neighborsConverter);
    };
    /**
     * @return {GraphEdge[]}
     */
    GraphVertex.prototype.getEdges = function () {
        return this.edges.toArray().map(function (linkedListNode) { return linkedListNode.value; });
    };
    /**
     * @return {number}
     */
    GraphVertex.prototype.getDegree = function () {
        return this.edges.toArray().length;
    };
    /**
     * @param {GraphEdge} requiredEdge
     * @returns {boolean}
     */
    GraphVertex.prototype.hasEdge = function (requiredEdge) {
        var edgeNode = this.edges.find({
            callback: function (edge) { return edge === requiredEdge; },
        });
        return !!edgeNode;
    };
    /**
     * @param {GraphVertex} vertex
     * @returns {boolean}
     */
    GraphVertex.prototype.hasNeighbor = function (vertex) {
        var vertexNode = this.edges.find({
            callback: function (edge) { return edge.startVertex === vertex || edge.endVertex === vertex; },
        });
        return !!vertexNode;
    };
    /**
     * @param {GraphVertex} vertex
     * @returns {(GraphEdge|null)}
     */
    GraphVertex.prototype.findEdge = function (vertex) {
        var edgeFinder = function (edge) {
            return edge.startVertex === vertex || edge.endVertex === vertex;
        };
        var edge = this.edges.find({ callback: edgeFinder });
        return edge ? edge.value : null;
    };
    /**
     * @returns {string}
     */
    GraphVertex.prototype.getKey = function () {
        return this.value;
    };
    /**
     * @return {GraphVertex}
     */
    GraphVertex.prototype.deleteAllEdges = function () {
        var _this = this;
        this.getEdges().forEach(function (edge) { return _this.deleteEdge(edge); });
        return this;
    };
    /**
     * @param {function} [callback]
     * @returns {string}
     */
    GraphVertex.prototype.toString = function (callback) {
        return callback ? callback(this.value) : "" + this.value;
    };
    return GraphVertex;
}());
/* harmony default export */ __webpack_exports__["default"] = (GraphVertex);


/***/ }),

/***/ "./src/app/kruskal/LinkedList.ts":
/*!***************************************!*\
  !*** ./src/app/kruskal/LinkedList.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkedListNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedListNode */ "./src/app/kruskal/LinkedListNode.ts");
/* harmony import */ var _Comparator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comparator */ "./src/app/kruskal/Comparator.ts");


var LinkedList = /** @class */ (function () {
    /**
     * @param {Function} [comparatorFunction]
     */
    function LinkedList(comparatorFunction) {
        /** @var LinkedListNode */
        this.head = null;
        /** @var LinkedListNode */
        this.tail = null;
        this.compare = new _Comparator__WEBPACK_IMPORTED_MODULE_1__["default"](comparatorFunction);
    }
    /**
     * @param {*} value
     * @return {LinkedList}
     */
    LinkedList.prototype.prepend = function (value) {
        // Make new node to be a head.
        var newNode = new _LinkedListNode__WEBPACK_IMPORTED_MODULE_0__["default"](value, this.head);
        this.head = newNode;
        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    /**
     * @param {*} value
     * @return {LinkedList}
     */
    LinkedList.prototype.append = function (value) {
        var newNode = new _LinkedListNode__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    /**
     * @param {*} value
     * @return {LinkedListNode}
     */
    LinkedList.prototype.delete = function (value) {
        if (!this.head) {
            return null;
        }
        var deletedNode = null;
        // If the head must be deleted then make 2nd node to be a head.
        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        var currentNode = this.head;
        if (currentNode !== null) {
            // If next node must be deleted then make next node to be a next next one.
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        // Check if tail must be deleted.
        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }
        return deletedNode;
    };
    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */
    LinkedList.prototype.find = function (_a) {
        var _b = _a.value, value = _b === void 0 ? undefined : _b, _c = _a.callback, callback = _c === void 0 ? undefined : _c;
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            // If callback is specified then try to find node by callback.
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            // If value is specified then try to compare by value..
            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    /**
     * @return {LinkedListNode}
     */
    LinkedList.prototype.deleteTail = function () {
        if (this.head === this.tail) {
            // There is only one node in linked list.
            var deletedTail_1 = this.tail;
            this.head = null;
            this.tail = null;
            return deletedTail_1;
        }
        // If there are many nodes in linked list...
        var deletedTail = this.tail;
        // Rewind to the last node and delete "next" link for the node before the last one.
        var currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    };
    /**
     * @return {LinkedListNode}
     */
    LinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        var deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    };
    /**
     * @return {LinkedListNode[]}
     */
    LinkedList.prototype.toArray = function () {
        var nodes = [];
        var currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    };
    /**
     * @param {function} [callback]
     * @return {string}
     */
    LinkedList.prototype.toString = function (callback) {
        return this.toArray().map(function (node) { return node.toString(callback); }).toString();
    };
    return LinkedList;
}());
/* harmony default export */ __webpack_exports__["default"] = (LinkedList);


/***/ }),

/***/ "./src/app/kruskal/LinkedListNode.ts":
/*!*******************************************!*\
  !*** ./src/app/kruskal/LinkedListNode.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    LinkedListNode.prototype.toString = function (callback) {
        return callback ? callback(this.value) : "" + this.value;
    };
    return LinkedListNode;
}());
/* harmony default export */ __webpack_exports__["default"] = (LinkedListNode);


/***/ }),

/***/ "./src/app/kruskal/QuickSort.ts":
/*!**************************************!*\
  !*** ./src/app/kruskal/QuickSort.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort */ "./src/app/kruskal/Sort.ts");


var QuickSort = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuickSort, _super);
    function QuickSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {*[]} originalArray
     * @return {*[]}
     */
    QuickSort.prototype.sort = function (originalArray) {
        // Clone original array to prevent it from modification.
        var array = originalArray.slice();
        // If array has less than or equal to one elements then it is already sorted.
        if (array.length <= 1) {
            return array;
        }
        // Init left and right arrays.
        var leftArray = [];
        var rightArray = [];
        // Take the first element of array as a pivot.
        var pivotElement = array.shift();
        var centerArray = [pivotElement];
        // Split all array elements between left, center and right arrays.
        while (array.length) {
            var currentElement = array.shift();
            // Call visiting callback.
            this.callbacks.visitingCallback(currentElement);
            if (this.comparator.equal(currentElement, pivotElement)) {
                centerArray.push(currentElement);
            }
            else if (this.comparator.lessThan(currentElement, pivotElement)) {
                leftArray.push(currentElement);
            }
            else {
                rightArray.push(currentElement);
            }
        }
        // Sort left and right arrays.
        var leftArraySorted = this.sort(leftArray);
        var rightArraySorted = this.sort(rightArray);
        // Let's now join sorted left array with center array and with sorted right array.
        return leftArraySorted.concat(centerArray, rightArraySorted);
    };
    return QuickSort;
}(_Sort__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (QuickSort);


/***/ }),

/***/ "./src/app/kruskal/Sort.ts":
/*!*********************************!*\
  !*** ./src/app/kruskal/Sort.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comparator */ "./src/app/kruskal/Comparator.ts");

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */
var Sort = /** @class */ (function () {
    function Sort(originalCallbacks) {
        this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
        this.comparator = new _Comparator__WEBPACK_IMPORTED_MODULE_0__["default"](this.callbacks.compareCallback);
    }
    /**
     * @param {SorterCallbacks} originalCallbacks
     * @returns {SorterCallbacks}
     */
    Sort.initSortingCallbacks = function (originalCallbacks) {
        var callbacks = originalCallbacks || {};
        var stubCallback = function () { };
        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;
        return callbacks;
    };
    Sort.prototype.sort = function () {
        throw new Error('sort method must be implemented');
    };
    return Sort;
}());
/* harmony default export */ __webpack_exports__["default"] = (Sort);


/***/ }),

/***/ "./src/app/kruskal/kruskal.component.css":
/*!***********************************************!*\
  !*** ./src/app/kruskal/kruskal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tydXNrYWwva3J1c2thbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/kruskal/kruskal.component.html":
/*!************************************************!*\
  !*** ./src/app/kruskal/kruskal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; text-align: center;\">Kruskal Algorithm</h1>\n      <h4 style=\"font-weight: bold; text-align: center;\">Starting from node E to node G</h4>\n    </div>\n  </div>\n  <br />\n  <br />\n  <br />\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Original Graph</h3>\n      <div\n        #original\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Graph after applying kruskal</h3>\n      <div\n        #network\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/kruskal/kruskal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kruskal/kruskal.component.ts ***!
  \**********************************************/
/*! exports provided: KruskalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KruskalComponent", function() { return KruskalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph */ "./src/app/kruskal/Graph.ts");
/* harmony import */ var _QuickSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuickSort */ "./src/app/kruskal/QuickSort.ts");
/* harmony import */ var _DisjointSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisjointSet */ "./src/app/kruskal/DisjointSet.ts");
/* harmony import */ var _GraphVertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphVertex */ "./src/app/kruskal/GraphVertex.ts");
/* harmony import */ var _GraphEdge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphEdge */ "./src/app/kruskal/GraphEdge.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_7__);








var KruskalComponent = /** @class */ (function () {
    function KruskalComponent() {
        var _this = this;
        this.timeout = function (time, firstNode, secondNode, weight) {
            setTimeout(function () {
                _this.networkInstance.body.data.edges.add([{ from: firstNode, to: secondNode, label: weight }]);
            }, time);
        };
        this.update = function (time, firstNode, secondNode, weight) {
            setTimeout(function () {
                _this.networkInstance.body.data.edges.update([{ from: firstNode, to: secondNode, label: weight, value: 5, color: { color: '#ff383f' } }]);
            }, time);
        };
    }
    KruskalComponent.prototype.ngOnInit = function () {
        var vertexA = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('A');
        var vertexB = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('B');
        var vertexC = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('C');
        var vertexD = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('D');
        var vertexE = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('E');
        var vertexF = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('F');
        var vertexG = new _GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('G');
        var edgeAB = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexA, vertexB, 2);
        var edgeAD = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexA, vertexD, 3);
        var edgeAC = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexA, vertexC, 3);
        var edgeBC = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexB, vertexC, 4);
        var edgeBE = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexB, vertexE, 3);
        var edgeDF = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexD, vertexF, 7);
        var edgeEC = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexE, vertexC, 1);
        var edgeEF = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexE, vertexF, 8);
        var edgeFG = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexF, vertexG, 9);
        var edgeFC = new _GraphEdge__WEBPACK_IMPORTED_MODULE_6__["default"](vertexF, vertexC, 6);
        var graph = new _Graph__WEBPACK_IMPORTED_MODULE_2__["default"]();
        graph
            .addEdge(edgeAB)
            .addEdge(edgeAD)
            .addEdge(edgeAC)
            .addEdge(edgeBC)
            .addEdge(edgeBE)
            .addEdge(edgeDF)
            .addEdge(edgeEC)
            .addEdge(edgeEF)
            .addEdge(edgeFC)
            .addEdge(edgeFG);
        // expect(graph.getWeight()).toEqual(46);
        var minimumSpanningTree = this.kruskal(graph);
        console.log(minimumSpanningTree.toString());
        var originalContainer = this.original.nativeElement;
        var container = this.el.nativeElement;
        var nodes = new vis__WEBPACK_IMPORTED_MODULE_7__["DataSet"]([
            { id: 'A', label: 'A' },
            { id: 'B', label: 'B' },
            { id: 'C', label: 'C' },
            { id: 'D', label: 'D' },
            { id: 'E', label: 'E' },
            { id: 'F', label: 'F' },
            { id: 'G', label: 'G' },
        ]);
        this.originalInstance = new vis__WEBPACK_IMPORTED_MODULE_7__["Network"](originalContainer, { nodes: nodes }, {});
        this.networkInstance = new vis__WEBPACK_IMPORTED_MODULE_7__["Network"](container, { nodes: nodes }, {});
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'B', label: '2' }]);
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'D', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'C', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'B', to: 'C', label: '4' }]);
        this.originalInstance.body.data.edges.add([{ from: 'B', to: 'E', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'D', to: 'F', label: '7' }]);
        this.originalInstance.body.data.edges.add([{ from: 'E', to: 'C', label: '1' }]);
        this.originalInstance.body.data.edges.add([{ from: 'E', to: 'F', label: '8' }]);
        this.originalInstance.body.data.edges.add([{ from: 'F', to: 'G', label: '9' }]);
        this.originalInstance.body.data.edges.add([{ from: 'F', to: 'C', label: '6' }]);
        this.timeout(1000, 'A', 'B', '2');
        this.timeout(2000, 'A', 'D', '3');
        this.timeout(3000, 'A', 'C', '3');
        this.timeout(4000, 'B', 'C', '4');
        this.timeout(5000, 'B', 'E', '3');
        this.timeout(6000, 'D', 'F', '7');
        this.timeout(7000, 'E', 'C', '1');
        this.timeout(8000, 'E', 'F', '8');
        this.timeout(9000, 'F', 'G', '9');
        this.timeout(10000, 'F', 'C', '6');
        this.update(11000, 'E', 'C', '1');
        this.update(13000, 'A', 'C', '3');
        this.update(15000, 'A', 'B', '2');
        this.update(17000, "D", "F", "7");
        this.update(18000, 'F', 'G', '9');
        // expect(minimumSpanningTree.getWeight()).toBe(24);
        // expect(minimumSpanningTree.getAllVertices().length).toBe(graph.getAllVertices().length);
        // expect(minimumSpanningTree.getAllEdges().length).toBe(graph.getAllVertices().length - 1);
        // expect(minimumSpanningTree.toString()).toBe('E,C,A,B,D,F,G');
    };
    KruskalComponent.prototype.kruskal = function (graph) {
        // It should fire error if graph is directed since the algorithm works only
        // for undirected graphs.
        if (graph.isDirected) {
            throw new Error('Prim\'s algorithms works only for undirected graphs');
        }
        // Init new graph that will contain minimum spanning tree of original graph.
        var minimumSpanningTree = new _Graph__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // Sort all graph edges in increasing order.
        var sortingCallbacks = {
            /**
             * @param {GraphEdge} graphEdgeA
             * @param {GraphEdge} graphEdgeB
             */
            compareCallback: function (graphEdgeA, graphEdgeB) {
                if (graphEdgeA.weight === graphEdgeB.weight) {
                    return 1;
                }
                return graphEdgeA.weight <= graphEdgeB.weight ? -1 : 1;
            },
        };
        var sortedEdges = new _QuickSort__WEBPACK_IMPORTED_MODULE_3__["default"](sortingCallbacks).sort(graph.getAllEdges());
        // Create disjoint sets for all graph vertices.
        var keyCallback = function (graphVertex) { return graphVertex.getKey(); };
        var disjointSet = new _DisjointSet__WEBPACK_IMPORTED_MODULE_4__["default"](keyCallback);
        graph.getAllVertices().forEach(function (graphVertex) {
            disjointSet.makeSet(graphVertex);
        });
        // Go through all edges started from the minimum one and try to add them
        // to minimum spanning tree. The criteria of adding the edge would be whether
        // it is forms the cycle or not (if it connects two vertices from one disjoint
        // set or not).
        for (var edgeIndex = 0; edgeIndex < sortedEdges.length; edgeIndex += 1) {
            /** @var {GraphEdge} currentEdge */
            var currentEdge = sortedEdges[edgeIndex];
            // Check if edge forms the cycle. If it does then skip it.
            if (!disjointSet.inSameSet(currentEdge.startVertex, currentEdge.endVertex)) {
                // Unite two subsets into one.
                disjointSet.union(currentEdge.startVertex, currentEdge.endVertex);
                // Add this edge to spanning tree.
                minimumSpanningTree.addEdge(currentEdge);
            }
        }
        return minimumSpanningTree;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], KruskalComponent.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('original'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], KruskalComponent.prototype, "original", void 0);
    KruskalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kruskal',
            template: __webpack_require__(/*! ./kruskal.component.html */ "./src/app/kruskal/kruskal.component.html"),
            styles: [__webpack_require__(/*! ./kruskal.component.css */ "./src/app/kruskal/kruskal.component.css")]
        })
    ], KruskalComponent);
    return KruskalComponent;
}());



/***/ }),

/***/ "./src/app/newton-raphson/newton-raphson.component.css":
/*!*************************************************************!*\
  !*** ./src/app/newton-raphson/newton-raphson.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Rvbi1yYXBoc29uL25ld3Rvbi1yYXBoc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/newton-raphson/newton-raphson.component.html":
/*!**************************************************************!*\
  !*** ./src/app/newton-raphson/newton-raphson.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container-fluid\">\n<div class=\"row with-margins\">\n  <div class=\"col\">\n    <div class=\"text-center\">\n      <h2 style=\"font-weight: bold;\">Newton Raphson's Algorithm</h2>\n    </div>\n    <form class=\"form\"  (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Formula</label>\n        <input\n          type=\"text\"\n          name=\"formula\"\n          [(ngModel)]=\"formula\"\n          value=\"x^3-2x-5\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label style=\"font-size: 15px\">Lower Bound</label>\n        <input\n          type=\"number\"\n          name=\"xl\"\n          [(ngModel)]=\"xl\"\n          value=\"-10\"\n          class=\"form-control\"\n          required\n          style=\"font-size: 16px\"\n        />  \n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Submit\" style=\"font-size: 15px;\"  class=\"btn btn-primary\"/>\n      </div>\n    </form>\n  </div>\n</div>\n<div *ngIf=\"xr\" class=\"row\">\n  <div class=\"col\" style=\"font-size: 15px;\">\n      <p> The Root is {{ xr }} </p>\n      <!-- <p> Verification Test F({{xr}})</p> -->\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/newton-raphson/newton-raphson.component.ts":
/*!************************************************************!*\
  !*** ./src/app/newton-raphson/newton-raphson.component.ts ***!
  \************************************************************/
/*! exports provided: NewtonRaphsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtonRaphsonComponent", function() { return NewtonRaphsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);




var NewtonRaphsonComponent = /** @class */ (function () {
    function NewtonRaphsonComponent() {
        this.xl = -5;
        this.formula = "x^3+3*x^2+12*x+10";
    }
    NewtonRaphsonComponent.prototype.ngAfterViewInit = function () {
        var container = this.el.nativeElement;
        var nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"]([
            { id: 1, label: 'Node 1', color: '#eee' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
            { id: 4, label: 'Node 4' },
            { id: 5, label: 'Node 5' }
        ]);
        var edges = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"]([
            { from: 1, to: 3 },
            { from: 1, to: 2 },
            { from: 2, to: 4 },
            { from: 2, to: 5 },
            { from: 3, to: 5 }
        ]);
        var data = { nodes: nodes, edges: edges };
        this.networkInstance = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, data, {});
    };
    NewtonRaphsonComponent.prototype.ngOnInit = function () {
    };
    NewtonRaphsonComponent.prototype.f = function (number, formula) {
        var scope = { x: number };
        if (formula.indexOf('cos') == -1 || formula.indexOf('sin') == -1 || formula.indexOf('tan') == -1) {
            return mathjs__WEBPACK_IMPORTED_MODULE_2__["evaluate"](formula, scope);
        }
        var pos = formula.lastIndexOf('x') + 1;
        var newString = '3.141592653589793*360 ';
        var out = [formula.slice(0, pos), newString, formula.slice(pos)].join('');
        return mathjs__WEBPACK_IMPORTED_MODULE_2__["evaluate"]('cos(x/2/3.141592653589793*360 deg)', scope);
    };
    NewtonRaphsonComponent.prototype.getDerivative = function (number, formula) {
        return mathjs__WEBPACK_IMPORTED_MODULE_2__["derivative"](formula, 'x').evaluate({ x: number });
    };
    NewtonRaphsonComponent.prototype.newton = function (x1, formula) {
        var maxIteration = 100;
        var i = 0;
        var xNew = 0;
        // console.log("World" + math.derivative('x^2-5x+6', 'x').evaluate({ x: 1 }));
        while (i < maxIteration) {
            if (Number.isFinite(x1 - (this.f(x1, formula) / this.getDerivative(x1, formula)))) {
                xNew = x1 - (this.f(x1, formula) / this.getDerivative(x1, formula));
            }
            else {
                alert("You're trying to divide by zero watch out");
            }
            if (Math.abs(xNew - x1) < 0.000001) {
                break;
            }
            else {
                x1 = xNew;
            }
            i++;
        }
        return xNew;
    };
    // TODO do a table which contains the itr and x0 , x1 , function(x_new)
    NewtonRaphsonComponent.prototype.onSubmit = function () {
        this.xr = this.newton(this.xl, this.formula);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewtonRaphsonComponent.prototype, "el", void 0);
    NewtonRaphsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newton-raphson',
            template: __webpack_require__(/*! ./newton-raphson.component.html */ "./src/app/newton-raphson/newton-raphson.component.html"),
            styles: [__webpack_require__(/*! ./newton-raphson.component.css */ "./src/app/newton-raphson/newton-raphson.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewtonRaphsonComponent);
    return NewtonRaphsonComponent;
}());



/***/ }),

/***/ "./src/app/numerical-methods.ts":
/*!**************************************!*\
  !*** ./src/app/numerical-methods.ts ***!
  \**************************************/
/*! exports provided: NumericalMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericalMethods", function() { return NumericalMethods; });
var NumericalMethods = /** @class */ (function () {
    function NumericalMethods(xl, xu, es, imax, formula) {
        this.xl = xl;
        this.xu = xu;
        this.es = es;
        this.imax = imax;
        this.formula = formula;
        this.ops = [
            'X^1/2',
            'X^2',
            'X^3',
            '+',
            '-',
            '*',
            '(',
            ')'
        ];
    }
    /* Stack & Parse Tree */
    /* x^3-2x-5 */
    NumericalMethods.prototype.performEqn = function (x, formula) {
        var flag = false;
        var op = null;
        for (var ch in formula) {
            if (ch == 'x') {
                flag = true;
            }
            else if (ch == '^') {
            }
        }
    };
    return NumericalMethods;
}());



/***/ }),

/***/ "./src/app/prim/Comparator.ts":
/*!************************************!*\
  !*** ./src/app/prim/Comparator.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Comparator = /** @class */ (function () {
    /**
     * @param {function(a: *, b: *)} [compareFunction]
     */
    function Comparator(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }
    /**
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    Comparator.defaultCompareFunction = function (a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    };
    Comparator.prototype.equal = function (a, b) {
        return this.compare(a, b) === 0;
    };
    Comparator.prototype.lessThan = function (a, b) {
        return this.compare(a, b) < 0;
    };
    Comparator.prototype.greaterThan = function (a, b) {
        return this.compare(a, b) > 0;
    };
    Comparator.prototype.lessThanOrEqual = function (a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    };
    Comparator.prototype.greaterThanOrEqual = function (a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    };
    Comparator.prototype.reverse = function () {
        var compareOriginal = this.compare;
        this.compare = function (a, b) { return compareOriginal(b, a); };
    };
    return Comparator;
}());
/* harmony default export */ __webpack_exports__["default"] = (Comparator);


/***/ }),

/***/ "./src/app/prim/MinHeap.ts":
/*!*********************************!*\
  !*** ./src/app/prim/MinHeap.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comparator */ "./src/app/prim/Comparator.ts");

var MinHeap = /** @class */ (function () {
    /**
     * @param {Function} [comparatorFunction]
     */
    function MinHeap(comparatorFunction) {
        // Array representation of the heap.
        this.heapContainer = [];
        this.compare = new _Comparator__WEBPACK_IMPORTED_MODULE_0__["default"](comparatorFunction);
    }
    /**
     * @param {number} parentIndex
     * @return {number}
     */
    MinHeap.prototype.getLeftChildIndex = function (parentIndex) {
        return (2 * parentIndex) + 1;
    };
    /**
     * @param {number} parentIndex
     * @return {number}
     */
    MinHeap.prototype.getRightChildIndex = function (parentIndex) {
        return (2 * parentIndex) + 2;
    };
    /**
     * @param {number} childIndex
     * @return {number}
     */
    MinHeap.prototype.getParentIndex = function (childIndex) {
        return Math.floor((childIndex - 1) / 2);
    };
    /**
     * @param {number} childIndex
     * @return {boolean}
     */
    MinHeap.prototype.hasParent = function (childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    };
    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    MinHeap.prototype.hasLeftChild = function (parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    };
    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    MinHeap.prototype.hasRightChild = function (parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    };
    /**
     * @param {number} parentIndex
     * @return {*}
     */
    MinHeap.prototype.leftChild = function (parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    };
    /**
     * @param {number} parentIndex
     * @return {*}
     */
    MinHeap.prototype.rightChild = function (parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    };
    /**
     * @param {number} childIndex
     * @return {*}
     */
    MinHeap.prototype.parent = function (childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    };
    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */
    MinHeap.prototype.swap = function (indexOne, indexTwo) {
        var tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    };
    /**
     * @return {*}
     */
    MinHeap.prototype.peek = function () {
        if (this.heapContainer.length === 0) {
            return null;
        }
        return this.heapContainer[0];
    };
    /**
     * @return {*}
     */
    MinHeap.prototype.poll = function () {
        if (this.heapContainer.length === 0) {
            return null;
        }
        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }
        var item = this.heapContainer[0];
        // Move the last element from the end to the head.
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        return item;
    };
    /**
     * @param {*} item
     * @return {MinHeap}
     */
    MinHeap.prototype.add = function (item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    };
    /**
     * @param {*} item
     * @param {Comparator} [customFindingComparator]
     * @return {MinHeap}
     */
    MinHeap.prototype.remove = function (item, customFindingComparator) {
        // Find number of items to remove.
        var customComparator = customFindingComparator || this.compare;
        var numberOfItemsToRemove = this.find(item, customComparator).length;
        for (var iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
            // We need to find item index to remove each time after removal since
            // indices are being change after each heapify process.
            var indexToRemove = this.find(item, customComparator).pop();
            // If we need to remove last child in the heap then just remove it.
            // There is no need to heapify the heap afterwards.
            if (indexToRemove === (this.heapContainer.length - 1)) {
                this.heapContainer.pop();
            }
            else {
                // Move last element in heap to the vacant (removed) position.
                this.heapContainer[indexToRemove] = this.heapContainer.pop();
                // Get parent.
                var parentItem = this.hasParent(indexToRemove) ? this.parent(indexToRemove) : null;
                var leftChild = this.hasLeftChild(indexToRemove) ? this.leftChild(indexToRemove) : null;
                // If there is no parent or parent is less then node to delete then heapify down.
                // Otherwise heapify up.
                if (leftChild !== null
                    && (parentItem === null
                        || this.compare.lessThan(parentItem, this.heapContainer[indexToRemove]))) {
                    this.heapifyDown(indexToRemove);
                }
                else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }
        return this;
    };
    /**
     * @param {*} item
     * @param {Comparator} [customComparator]
     * @return {Number[]}
     */
    MinHeap.prototype.find = function (item, customComparator) {
        var foundItemIndices = [];
        var comparator = customComparator || this.compare;
        for (var itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }
        return foundItemIndices;
    };
    /**
     * @param {number} [customStartIndex]
     */
    MinHeap.prototype.heapifyUp = function (customStartIndex) {
        // Take last element (last in array or the bottom left in a tree) in
        // a heap container and lift him up until we find the parent element
        // that is less then the current new one.
        var currentIndex = customStartIndex || this.heapContainer.length - 1;
        while (this.hasParent(currentIndex)
            && this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex))) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    };
    /**
     * @param {number} [customStartIndex]
     */
    MinHeap.prototype.heapifyDown = function (customStartIndex) {
        // Compare the root element to its children and swap root with the smallest
        // of children. Do the same for next children after swap.
        var currentIndex = customStartIndex || 0;
        var nextIndex = null;
        while (this.hasLeftChild(currentIndex)) {
            if (this.hasRightChild(currentIndex)
                && this.compare.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
                nextIndex = this.getRightChildIndex(currentIndex);
            }
            else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }
            if (this.compare.lessThan(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
                break;
            }
            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    };
    /**
     * @return {boolean}
     */
    MinHeap.prototype.isEmpty = function () {
        return !this.heapContainer.length;
    };
    /**
     * @return {string}
     */
    MinHeap.prototype.toString = function () {
        return this.heapContainer.toString();
    };
    return MinHeap;
}());
/* harmony default export */ __webpack_exports__["default"] = (MinHeap);


/***/ }),

/***/ "./src/app/prim/PriorityQueue.ts":
/*!***************************************!*\
  !*** ./src/app/prim/PriorityQueue.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _MinHeap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinHeap */ "./src/app/prim/MinHeap.ts");
/* harmony import */ var _Comparator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comparator */ "./src/app/prim/Comparator.ts");



// It is the same as min heap except that when comparing to elements
// we take into account not element's value but rather its priority.
var PriorityQueue = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PriorityQueue, _super);
    function PriorityQueue() {
        var _this = _super.call(this) || this;
        _this.priorities = {};
        _this.compare = new _Comparator__WEBPACK_IMPORTED_MODULE_2__["default"](_this.comparePriority.bind(_this));
        return _this;
    }
    /**
     * @param {*} item
     * @param {number} [priority]
     * @return {PriorityQueue}
     */
    PriorityQueue.prototype.add = function (item, priority) {
        if (priority === void 0) { priority = 0; }
        this.priorities[item] = priority;
        _super.prototype.add.call(this, item);
        return this;
    };
    /**
     * @param {*} item
     * @param {Comparator} [customFindingComparator]
     * @return {PriorityQueue}
     */
    PriorityQueue.prototype.remove = function (item, customFindingComparator) {
        _super.prototype.remove.call(this, item, customFindingComparator);
        delete this.priorities[item];
        return this;
    };
    /**
     * @param {*} item
     * @param {number} priority
     * @return {PriorityQueue}
     */
    PriorityQueue.prototype.changePriority = function (item, priority) {
        this.remove(item, new _Comparator__WEBPACK_IMPORTED_MODULE_2__["default"](this.compareValue));
        this.add(item, priority);
        return this;
    };
    /**
     * @param {*} item
     * @return {Number[]}
     */
    PriorityQueue.prototype.findByValue = function (item) {
        return this.find(item, new _Comparator__WEBPACK_IMPORTED_MODULE_2__["default"](this.compareValue));
    };
    /**
     * @param {*} item
     * @return {boolean}
     */
    PriorityQueue.prototype.hasValue = function (item) {
        return this.findByValue(item).length > 0;
    };
    /**
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    PriorityQueue.prototype.comparePriority = function (a, b) {
        if (this.priorities[a] === this.priorities[b]) {
            return 0;
        }
        return this.priorities[a] < this.priorities[b] ? -1 : 1;
    };
    /**
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    PriorityQueue.prototype.compareValue = function (a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    };
    return PriorityQueue;
}(_MinHeap__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PriorityQueue);


/***/ }),

/***/ "./src/app/prim/prim.component.css":
/*!*****************************************!*\
  !*** ./src/app/prim/prim.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW0vcHJpbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/prim/prim.component.html":
/*!******************************************!*\
  !*** ./src/app/prim/prim.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 style=\"font-weight: bold; text-align: center;\">Prim Algorithm</h1>\n      <h4 style=\"font-weight: bold; text-align: center;\">Starting from node E to node G</h4>\n    </div>\n  </div>\n  <br />\n  <br />\n  <br />\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Original Graph</h3>\n      <div\n        #original\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n    <div class=\"col-sm-6\">\n      <h3 style=\"font-weight: bold; text-align: center;\">Graph after applying prim</h3>\n      <div\n        #network\n        style=\"width: 500px;height: 400px;box-sizing: content-box;border: 1px solid lightgray;\"\n      ></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/prim/prim.component.ts":
/*!****************************************!*\
  !*** ./src/app/prim/prim.component.ts ***!
  \****************************************/
/*! exports provided: PrimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimComponent", function() { return PrimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kruskal_Graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kruskal/Graph */ "./src/app/kruskal/Graph.ts");
/* harmony import */ var _PriorityQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriorityQueue */ "./src/app/prim/PriorityQueue.ts");
/* harmony import */ var _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kruskal/GraphEdge */ "./src/app/kruskal/GraphEdge.ts");
/* harmony import */ var _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kruskal/GraphVertex */ "./src/app/kruskal/GraphVertex.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_6__);







var PrimComponent = /** @class */ (function () {
    function PrimComponent() {
    }
    PrimComponent.prototype.ngOnInit = function () {
        var vertexA = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('A');
        var vertexB = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('B');
        var vertexC = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('C');
        var vertexD = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('D');
        var vertexE = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('E');
        var vertexF = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('F');
        var vertexG = new _kruskal_GraphVertex__WEBPACK_IMPORTED_MODULE_5__["default"]('G');
        var edgeAB = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexA, vertexB, 2);
        var edgeAD = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexA, vertexD, 3);
        var edgeAC = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexA, vertexC, 3);
        var edgeBC = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexB, vertexC, 4);
        var edgeBE = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexB, vertexE, 3);
        var edgeDF = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexD, vertexF, 7);
        var edgeEC = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexE, vertexC, 1);
        var edgeEF = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexE, vertexF, 8);
        var edgeFG = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexF, vertexG, 9);
        var edgeFC = new _kruskal_GraphEdge__WEBPACK_IMPORTED_MODULE_4__["default"](vertexF, vertexC, 6);
        var graph = new _kruskal_Graph__WEBPACK_IMPORTED_MODULE_2__["default"]();
        graph
            .addEdge(edgeAB)
            .addEdge(edgeAD)
            .addEdge(edgeAC)
            .addEdge(edgeBC)
            .addEdge(edgeBE)
            .addEdge(edgeDF)
            .addEdge(edgeEC)
            .addEdge(edgeEF)
            .addEdge(edgeFC)
            .addEdge(edgeFG);
        // expect(graph.getWeight()).toEqual(46);
        var minimumSpanningTree = this.prim(graph);
        // expect(minimumSpanningTree.getWeight()).toBe(24);
        // expect(minimumSpanningTree.getAllVertices().length).toBe(graph.getAllVertices().length);
        // expect(minimumSpanningTree.getAllEdges().length).toBe(graph.getAllVertices().length - 1);
        console.log(minimumSpanningTree.toString());
        var originalContainer = this.original.nativeElement;
        var container = this.el.nativeElement;
        var nodes = new vis__WEBPACK_IMPORTED_MODULE_6__["DataSet"]([
            { id: 'A', label: 'A' },
            { id: 'B', label: 'B' },
            { id: 'C', label: 'C' },
            { id: 'D', label: 'D' },
            { id: 'E', label: 'E' },
            { id: 'F', label: 'F' },
            { id: 'G', label: 'G' },
        ]);
        this.originalInstance = new vis__WEBPACK_IMPORTED_MODULE_6__["Network"](originalContainer, { nodes: nodes }, {});
        this.networkInstance = new vis__WEBPACK_IMPORTED_MODULE_6__["Network"](container, { nodes: nodes }, {});
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'B', label: '2' }]);
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'D', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'A', to: 'C', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'B', to: 'C', label: '4' }]);
        this.originalInstance.body.data.edges.add([{ from: 'B', to: 'E', label: '3' }]);
        this.originalInstance.body.data.edges.add([{ from: 'D', to: 'F', label: '7' }]);
        this.originalInstance.body.data.edges.add([{ from: 'E', to: 'C', label: '1' }]);
        this.originalInstance.body.data.edges.add([{ from: 'E', to: 'F', label: '8' }]);
        this.originalInstance.body.data.edges.add([{ from: 'F', to: 'G', label: '9' }]);
        this.originalInstance.body.data.edges.add([{ from: 'F', to: 'C', label: '6' }]);
    };
    PrimComponent.prototype.prim = function (graph) {
        // It should fire error if graph is directed since the algorithm works only
        // for undirected graphs.
        if (graph.isDirected) {
            throw new Error('Prim\'s algorithms works only for undirected graphs');
        }
        // Init new graph that will contain minimum spanning tree of original graph.
        var minimumSpanningTree = new _kruskal_Graph__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // This priority queue will contain all the edges that are starting from
        // visited nodes and they will be ranked by edge weight - so that on each step
        // we would always pick the edge with minimal edge weight.
        var edgesQueue = new _PriorityQueue__WEBPACK_IMPORTED_MODULE_3__["default"]();
        // Set of vertices that has been already visited.
        var visitedVertices = {};
        // Vertex from which we will start graph traversal.
        var startVertex = graph.getAllVertices()[0];
        // Add start vertex to the set of visited ones.
        visitedVertices[startVertex.getKey()] = startVertex;
        // Add all edges of start vertex to the queue.
        startVertex.getEdges().forEach(function (graphEdge) {
            edgesQueue.add(graphEdge, graphEdge.weight);
        });
        // Now let's explore all queued edges.
        while (!edgesQueue.isEmpty()) {
            // Fetch next queued edge with minimal weight.
            /** @var {GraphEdge} currentEdge */
            var currentMinEdge = edgesQueue.poll();
            // Find out the next unvisited minimal vertex to traverse.
            var nextMinVertex = null;
            if (!visitedVertices[currentMinEdge.startVertex.getKey()]) {
                nextMinVertex = currentMinEdge.startVertex;
            }
            else if (!visitedVertices[currentMinEdge.endVertex.getKey()]) {
                nextMinVertex = currentMinEdge.endVertex;
            }
            // If all vertices of current edge has been already visited then skip this round.
            if (nextMinVertex) {
                // Add current min edge to MST.
                minimumSpanningTree.addEdge(currentMinEdge);
                // Add vertex to the set of visited ones.
                visitedVertices[nextMinVertex.getKey()] = nextMinVertex;
                // Add all current vertex's edges to the queue.
                nextMinVertex.getEdges().forEach(function (graphEdge) {
                    // Add only vertices that link to unvisited nodes.
                    if (!visitedVertices[graphEdge.startVertex.getKey()]
                        || !visitedVertices[graphEdge.endVertex.getKey()]) {
                        edgesQueue.add(graphEdge, graphEdge.weight);
                    }
                });
            }
        }
        return minimumSpanningTree;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('network'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PrimComponent.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('original'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PrimComponent.prototype, "original", void 0);
    PrimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prim',
            template: __webpack_require__(/*! ./prim.component.html */ "./src/app/prim/prim.component.html"),
            styles: [__webpack_require__(/*! ./prim.component.css */ "./src/app/prim/prim.component.css")]
        })
    ], PrimComponent);
    return PrimComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mohamed/myPrograms/angular/Algorithms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map