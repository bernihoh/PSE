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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }*/\r\n\r\n  #container{\r\n      width:100%;\r\n      height:100%;\r\n      \r\n  }\r\n\r\n  #left {\r\n    \r\n      float:left;\r\n      height:500px; \r\n      width:100%;  \r\n     /* border: black; \r\n      border-style: solid;  \r\n      box-shadow: 5px 7px 7px;*/\r\n     /* box-shadow: 0.3em 0.3em 0.9em black; ;*/\r\n  }\r\n\r\n  #right {\r\n    \r\n    float:right;\r\n    height:30%;\r\n    width:25%;\r\n    }\r\n\r\n  #bottom {\r\n        overflow-y: scroll;\r\n        padding-top: 20px;\r\n        float:left;\r\n        padding-left: 20px;\r\n        height:150px;\r\n        width:70%;\r\n        \r\n        \r\n      \r\n      box-shadow: inset  0.2em 0.2em 0.8em black; ;\r\n        }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <h1>\n    {{ title }}\n    \n  </h1>\n  <div id=\"container\"> \n  <div id=\"left\">          \n    <app-graph-controll></app-graph-controll>\n    <!--<cy-graph></cy-graph>-->\n      \n</div>\n\n<div id=\"bottom\">\n  \n  <app-message></app-message>\n  \n</div>\n\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Graph Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _ng_cyto_ng_cyto_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-cyto/ng-cyto.directive */ "./src/app/ng-cyto/ng-cyto.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _graph_controll_graph_controll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graph-controll/graph-controll.component */ "./src/app/graph-controll/graph-controll.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _ng_cyto_ng_cyto_directive__WEBPACK_IMPORTED_MODULE_5__["NgCyto"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["HeroesComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_4__["GraphComponent"],
                _graph_controll_graph_controll_component__WEBPACK_IMPORTED_MODULE_8__["GraphControllComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graph-controll/graph-controll.component.css":
/*!*************************************************************!*\
  !*** ./src/app/graph-controll/graph-controll.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainForm {    \r\n    float:left;\r\n    padding-left: 10px;    \r\n    width:70%;   \r\n    \r\n}\r\n\r\n#left {\r\n    \r\n    float:left;\r\n    height:500px; \r\n    width:70%;  \r\n    background-color: brown;\r\n   /* border: black; \r\n    border-style: solid;  \r\n    box-shadow: 5px 7px 7px;*/\r\n   /* box-shadow: 0.3em 0.3em 0.9em black; ;*/\r\n}\r\n\r\n#right {\r\n  \r\n  float:right;\r\n  height:100%;\r\n  width:30%;\r\n  \r\n  }\r\n\r\nlabel {\r\n    \r\n    /*font-style: normal;\r\n    font-variant: none;\r\n    font-family: sans-serif;\r\n    font-weight: normal;\r\n    opacity: 1;\r\n    color :text*/\r\n}\r\n\r\n/*form {\r\n    max-width: 330px;\r\n    align:left;\r\n\r\n}*/"

/***/ }),

/***/ "./src/app/graph-controll/graph-controll.component.html":
/*!**************************************************************!*\
  !*** ./src/app/graph-controll/graph-controll.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div align=\"left\" class=\"container\">-->\n  \n<!--<form id=\"mainForm\" >  -->\n\n    <div id=\"container\"> \n        <div id=\"left\">          \n            <cy-graph></cy-graph>\n          <!--<cy-graph></cy-graph>-->\n            \n      </div>\n      \n      <div id=\"right\">\n          <ul>\n              <li *ngFor=\"let e of elements\">\n                  {{e}}\n              </li>\n            </ul>\n        \n          <div class=\"form-group\" id=\"mainForm\">\n\n              <label for=\"1\" >Number of Vertices</label>\n              <input  id=\"1\" class=\"form-control\" [(ngModel)]=\"params.nOfVertices\" id =\"nOfVertices\" name=\"something\"  placeholder=\"number of vertices\">\n          \n          \n          <div class=\"form-group\">\n              <label>Max Degree</label>\n               <input class=\"form-control\" [(ngModel)]=\"params.maxDegree\" id=\"maxDegree\" name=\"something2\"  placeholder=\"max degree\">     \n          </div> \n          \n          \n          <div class=\"form-group\" id=\"sel1\">\n            \n              <label for=\"graphTypeSelect\">Graph Type</label>  \n              <select  [(ngModel)]=\"params.graphType\" (ngModelChange)=\"graphTypeChange()\"  class=\"form-control\" id=\"graphTypeSelect\">\n                  <option *ngFor=\"let type of graphTypes\">\n                      {{type}}\n                    </option>      \n              </select>\n          \n            </div>\n          \n            <div class=\"form-group\">\n                <label for=\"heuristicSelect\">Heuristic</label>\n                <select  [(ngModel)]=\"params.heuristic\" class=\"form-control\" id=\"heuristicSelect\">\n                    <option *ngFor=\"let h of heuristics\">\n                        {{h}}\n                      </option>      \n                </select>\n              </div>\n          \n          <div class=\"form-group\">\n          \n          \n          </div>\n            <div class=\"form-group\">\n            <div class=\"btn-group\" role=\"group\" >\n                \n          <!--<button (click)=\"onGenerate()\" type=\"button\" class=\"btn btn-lg btn-default\" [ngModelOptions]=\"{standalone: true}\">Submit</button>-->\n          <button  (click)=\"onGenerate()\" type=\"button\" class=\"btn btn-lg btn-default\">Generate Graph</button>\n          <button (click)=\"onRunHeuristic()\" type=\"button\" class=\"btn btn-lg btn-default\">Run Heuristic</button>\n          \n          </div>\n          <div class=\"btn-group\" role=\"group\" >\n                \n              <!--<button (click)=\"onGenerate()\" type=\"button\" class=\"btn btn-lg btn-default\" [ngModelOptions]=\"{standalone: true}\">Submit</button>-->\n              \n              <button type=\"button\"  [disabled]=\"!validBFS\" (click)=\"onBFS()\" class=\"btn btn-lg btn-default\">BFS</button>\n              <button type=\"button\" [disabled]=\"!validBFSNext\" (click)=\"onBFSNext()\" class=\"btn btn-lg btn-default\">BFS-Next</button>\n              </div>\n          </div>\n          </div>\n        \n        \n      </div>\n    </div>\n\n  \n<!--</form>-->\n\n<!--</div>-->"

/***/ }),

/***/ "./src/app/graph-controll/graph-controll.component.ts":
/*!************************************************************!*\
  !*** ./src/app/graph-controll/graph-controll.component.ts ***!
  \************************************************************/
/*! exports provided: GraphControllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphControllComponent", function() { return GraphControllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graph.service */ "./src/app/graph.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graph/graph.component */ "./src/app/graph/graph.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphControllComponent = /** @class */ (function () {
    function GraphControllComponent(graphService, messageService) {
        this.graphService = graphService;
        this.messageService = messageService;
        this.showNewGraph = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.params = {
            maxDegree: 3,
            nOfVertices: 5,
            graphType: "",
            heuristic: "",
        };
        this.currentBFS = 0;
        this.validBFS = false;
        this.validBFSNext = false;
        this.currentBFSColor = 'green';
        this.nodeColors = [];
    }
    GraphControllComponent.prototype.ngAfterViewInit = function () {
    };
    GraphControllComponent.prototype.log = function (message) {
        this.messageService.add('GraphControllComponent: ' + message);
    };
    GraphControllComponent.prototype.changeBFS = function (bfs) {
        this.bfs = bfs;
        this.currentBFS = 0;
        this.validBFSNext = true;
        if (this.currentBFSColor == 'green') {
            this.currentBFSColor = 'black';
        }
        else {
            this.currentBFSColor = 'green';
        }
        this.validBFS = false;
    };
    GraphControllComponent.prototype.graphTypeChange = function () {
        this.log("type changed");
    };
    GraphControllComponent.prototype.test = function (heuristic) {
        this.heuristics = heuristic;
    };
    GraphControllComponent.prototype.getGraphTypes = function () {
        var _this = this;
        this.graphService.getGraphTypes()
            .subscribe(function (graphTypes) { _this.graphTypes = graphTypes, _this.params.graphType = _this.graphTypes[0]; });
    };
    GraphControllComponent.prototype.getHeuristics = function () {
        var _this = this;
        this.graphService.getValidHeuristics("")
            .subscribe(function (heuristics) { _this.heuristics = heuristics, _this.params.heuristic = _this.heuristics[0], _this.test(heuristics); });
    };
    GraphControllComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    GraphControllComponent.prototype.colorNode = function (t) {
        var index;
        index = parseInt(t);
        //debugger;
        if (this.nodeColors[index] == null || this.nodeColors[index] == "-1") {
            var abort = false;
            var color;
            while (!abort) {
                abort = true;
                color = this.getRandomColor();
                for (var i = 0; i < this.nodeColors.length; i++) {
                    if (this.nodeColors[i] == color) {
                        abort = false;
                        break;
                    }
                }
            }
            if (index + 1 > this.nodeColors.length) {
                while (index + 1 > this.nodeColors.length) {
                    this.nodeColors.push("-1");
                }
            }
            this.nodeColors[index] = color;
            return color;
        }
        return this.nodeColors[index];
    };
    GraphControllComponent.prototype.ngOnInit = function () {
        this.getGraphTypes();
    };
    GraphControllComponent.prototype.elementsChanged2 = function (elements) {
        this.getHeuristics();
        this.elementsChanged(elements);
    };
    GraphControllComponent.prototype.elementsChanged = function (elements) {
        this.nodeColors = null;
        this.nodeColors = [];
        for (var i = 0; i < elements.nodes.length; i++) {
            var color = this.colorNode(elements.nodes[i].data.colorCode);
            //elements.nodes[i].data.color=color;
            elements.nodes[i].data.colorCode = color;
            //elements.nodes[i].data.colorCode='white';
        }
        for (var i = 0; i < elements.edges.length; i++) {
            var color = this.colorNode(elements.edges[i].data.colorCode);
            //elements.nodes[i].data.color=color;
            elements.edges[i].data.colorCode = color;
            //elements.nodes[i].data.colorCode='white';
        }
        this.graphComponent.onShowNewGraph(elements);
        this.validBFS = true;
        this.validBFSNext = false;
    };
    GraphControllComponent.prototype.onBFSNext = function () {
        if (this.currentBFS < this.bfs.length) {
        }
        else {
            if (this.currentBFSColor == 'green') {
                this.currentBFSColor = 'black';
            }
            else {
                this.currentBFSColor = 'green';
            }
            this.currentBFS = 0;
        }
        var id;
        id = '#'.concat(this.bfs[this.currentBFS].toString());
        this.graphComponent.changeNodeColor(id, this.currentBFSColor);
        this.currentBFS++;
    };
    GraphControllComponent.prototype.onBFS = function () {
        var _this = this;
        this.graphService.getBFS()
            .subscribe(function (bfs) { return _this.changeBFS(bfs); });
    };
    GraphControllComponent.prototype.onGenerate = function () {
        var _this = this;
        this.log("graph generated");
        /* let elements = {
           nodes: [
               { data: { id: 'a', name: 'Signup', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle' } },
               { data: { id: 'b', name: 'User Profile', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
     
           ],
           edges: [
               { data: { source: 'a', target: 'b', colorCode: 'blue', strength: 10 } },
               { data: { source: 'b', target: 'c', colorCode: 'blue', strength: 10 } },
               { data: { source: 'c', target: 'd', colorCode: 'blue', strength: 10 } },
               { data: { source: 'c', target: 'e', colorCode: 'blue', strength: 10 } },
               { data: { source: 'c', target: 'f', colorCode: 'blue', strength: 10 } },
               { data: { source: 'e', target: 'j', colorCode: 'red', strength: 10 } },
               { data: { source: 'e', target: 'k', colorCode: 'green', strength: 10 } }
           ]
         };*/
        var elements = {
            nodes: [
                { data: { id: 'a' } },
                { data: { id: 'b', name: 'User Profile', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
            ],
            edges: [
                { data: { id: 'a', source: 'a', target: 'b' } },
            ]
        };
        //this.elementsChanged(elements);
        this.graphService.generateGraph(this.params)
            .subscribe(function (elements) { return _this.elementsChanged2(elements); });
    };
    GraphControllComponent.prototype.onRunHeuristic = function () {
        var _this = this;
        this.log("graph generated");
        //this.elementsChanged(elements);
        this.graphService.runHeuristic(this.params)
            .subscribe(function (elements) { return _this.elementsChanged(elements); });
    };
    GraphControllComponent.prototype.onClick = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_graph_graph_component__WEBPACK_IMPORTED_MODULE_3__["GraphComponent"]),
        __metadata("design:type", _graph_graph_component__WEBPACK_IMPORTED_MODULE_3__["GraphComponent"])
    ], GraphControllComponent.prototype, "graphComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GraphControllComponent.prototype, "showNewGraph", void 0);
    GraphControllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph-controll',
            template: __webpack_require__(/*! ./graph-controll.component.html */ "./src/app/graph-controll/graph-controll.component.html"),
            styles: [__webpack_require__(/*! ./graph-controll.component.css */ "./src/app/graph-controll/graph-controll.component.css")]
        }),
        __metadata("design:paramtypes", [_graph_service__WEBPACK_IMPORTED_MODULE_1__["GraphService"], _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], GraphControllComponent);
    return GraphControllComponent;
}());



/***/ }),

/***/ "./src/app/graph.service.ts":
/*!**********************************!*\
  !*** ./src/app/graph.service.ts ***!
  \**********************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GraphService = /** @class */ (function () {
    function GraphService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'http://node159550-env-7559099.jelastic.dogado.eu:11022/getGraphTypeList';
        //private serverUrl = 'http://localhost:8090';
        this.serverUrl = 'http://node159550-env-7559099.jelastic.dogado.eu:11022';
    }
    GraphService.prototype.getGraphTypes = function () {
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getGraphTypes', [])));
        //var ret: string[] = ["1","2"];
        //return of(ret);    
    };
    GraphService.prototype.log = function (message) {
        this.messageService.add('GraphService: ' + message);
    };
    GraphService.prototype.generateGraph = function (params_) {
        /*var params: HttpParams;
        params = new HttpParams();
        params.set('nOfVertices','10');
        params.set('maxDegree','5');
        params.set('graphType','SimpleUndirectedGraph');
        const options = {params};*/
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('graphType', params_.graphType).set('nOfVertices', params_.nOfVertices.toString()).set('maxDegree', params_.maxDegree.toString()) };
        debugger; /* let elements = {
          nodes: [
              { data: { id: 'a', name: 'Signup', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle' } },
              { data: { id: 'b', name: 'User Profile', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
      
          ],
          edges: [
              { data: { source: 'a', target: 'b', colorCode: 'blue', strength: 10 } },
              { data: { source: 'b', target: 'c', colorCode: 'blue', strength: 10 } },
              { data: { source: 'c', target: 'd', colorCode: 'blue', strength: 10 } },
              { data: { source: 'c', target: 'e', colorCode: 'blue', strength: 10 } },
              { data: { source: 'c', target: 'f', colorCode: 'blue', strength: 10 } },
              { data: { source: 'e', target: 'j', colorCode: 'red', strength: 10 } },
              { data: { source: 'e', target: 'k', colorCode: 'green', strength: 10 } }
          ]
        };*/
        var elements = {
            nodes: [
                { data: { id: 'a' } },
                { data: { id: 'b', name: 'User Profile', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
            ],
            edges: [
                { data: { id: 'a', source: 'a', target: 'b' } },
            ]
        };
        var url = this.serverUrl.concat("/genGraph");
        var ret = this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('genGraph', [])));
        return ret;
    };
    GraphService.prototype.runHeuristic = function (params_) {
        /*var params: HttpParams;
        params = new HttpParams();
        params.set('nOfVertices','10');
        params.set('maxDegree','5');
        params.set('graphType','SimpleUndirectedGraph');
        const options = {params};*/
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', params_.heuristic) };
        var url = this.serverUrl.concat("/runHeuristic");
        var ret = this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('runHeuristic', [])));
        return ret;
    };
    GraphService.prototype.getValidHeuristics = function (graphType) {
        var url = this.serverUrl.concat("/getHeuristicList");
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeuristicList', [])));
    };
    GraphService.prototype.getBFS = function () {
        var url = this.serverUrl.concat("/bfs");
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeuristicList', [])));
    };
    GraphService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    GraphService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], GraphService);
    return GraphService;
}());



/***/ }),

/***/ "./src/app/graph/graph.component.html":
/*!********************************************!*\
  !*** ./src/app/graph/graph.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"left\">\n\n    <!--<ng2-cytoscape [elements]=\"graphData\" [layout]=\"layout\" (select)=\"nodeChange($event)\"></ng2-cytoscape>-->\n    <ng2-cytoscape id=\"graph\" [elements]=\"graphData\" [layout]=\"layout\" (select)=\"nodeChange($event)\"></ng2-cytoscape>\n</div>\n\n<!--<div style=\"height: 90%; width: 20%; float: left; overflow: auto; overflow-x: hidden\">\n    <h1>Selected Node Name</h1>\n    <h2>{{node_name}}</h2>\n</div>-->"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _ng_cyto_ng_cyto_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ng-cyto/ng-cyto.directive */ "./src/app/ng-cyto/ng-cyto.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = /** @class */ (function () {
    function GraphComponent(messageService) {
        this.messageService = messageService;
        this.layout = {
            //name: 'dagre',
            name: 'circle',
            rows: 1
            //rankDir: 'LR',
            //directed: true,
            //padding: 0
        };
        this.graphData = {
            nodes: [
                { data: { id: 'a', name: 'Signup', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle' } },
                { data: { id: 'b', name: 'User Profile', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
                { data: { id: 'c', name: 'Billing', weight: 100, colorCode: 'magenta', shapeType: 'roundrectangle' } },
                { data: { id: 'd', name: 'Sales', weight: 100, colorCode: 'blue', shapeType: 'roundrectangle' } },
                { data: { id: 'e', name: 'Referral', weight: 100, colorCode: 'orange', shapeType: 'roundrectangle' } },
                { data: { id: 'f', name: 'Loan', parent: 'd', weight: 100, colorCode: 'orange', shapeType: 'roundrectangle' } },
                { data: { id: 'j', name: 'Support', weight: 100, colorCode: 'red', shapeType: 'ellipse' } },
                { data: { id: 'k', name: 'Sink Event', weight: 100, colorCode: 'green', shapeType: 'ellipse' } }
            ],
            edges: [
                { data: { source: 'a', target: 'b', colorCode: 'blue', strength: 10 } },
                { data: { source: 'b', target: 'c', colorCode: 'blue', strength: 10 } },
                { data: { source: 'c', target: 'd', colorCode: 'blue', strength: 10 } },
                { data: { source: 'c', target: 'e', colorCode: 'blue', strength: 10 } },
                { data: { source: 'c', target: 'f', colorCode: 'blue', strength: 10 } },
                { data: { source: 'e', target: 'j', colorCode: 'red', strength: 10 } },
                { data: { source: 'e', target: 'k', colorCode: 'green', strength: 10 } }
            ]
        };
    }
    GraphComponent.prototype.ngAfterViewInit = function () {
    };
    GraphComponent.prototype.log = function (message) {
        this.messageService.add('GraphComponent: ' + message);
    };
    GraphComponent.prototype.onShowNewGraph = function (elements) {
        this.log("onShowNewGraph");
        this.graphData = null;
        this.graphData = elements;
        //this.graph.onShowNewGraph(elements);
    };
    GraphComponent.prototype.changeNodeColor = function (nodeId, nodeColor) {
        this.graph.changeNodeColor(nodeId, nodeColor);
    };
    GraphComponent.prototype.changeEdgeColor = function (edgeId, edgeColor) {
        this.graph.changeEdgeColor(edgeId, edgeColor);
    };
    GraphComponent.prototype.nodeChange = function (event) {
        this.node_name = event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ng_cyto_ng_cyto_directive__WEBPACK_IMPORTED_MODULE_2__["NgCyto"]),
        __metadata("design:type", _ng_cyto_ng_cyto_directive__WEBPACK_IMPORTED_MODULE_2__["NgCyto"])
    ], GraphComponent.prototype, "graph", void 0);
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cy-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/graph/graph.component.html"),
            styles: ["\n      ng2-cytoscape {\n        height: 100vh;\n        height: 70vh;\n        float: left;\n        width: 100%;\n        position: relative;\n    }"],
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>{{hero.name | uppercase}} Details</h2>\n<div><span>id: </span>{{hero.id}}</div>\nasdas\nasdasasd\n\n  \n\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n<div  *ngIf=\"messageService.messages.length\">\n\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/ng-cyto/ng-cyto.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/ng-cyto/ng-cyto.directive.ts ***!
  \**********************************************/
/*! exports provided: NgCyto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCyto", function() { return NgCyto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgCyto = /** @class */ (function () {
    function NgCyto(renderer, el, messageService) {
        this.renderer = renderer;
        this.el = el;
        this.messageService = messageService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edgeColors = [];
        this.layout = this.layout || {
            name: 'circle',
            directed: true,
            padding: 0
        };
        this.zoom = this.zoom || {
            min: 0.1,
            max: 1.5
        };
        this.style = this.style || cytoscape.stylesheet()
            .selector('node')
            .css({
            //'background-color': this.test('#000000'),
            'background-color': 'data(colorCode)',
            //'background-color': 'white',
            'color': 'black',
            'content': 'data(id)',
            'shapeType': 'roundrectangle',
        })
            .selector(':selected')
            .css({
            'border-width': 1,
            'border-color': 'black'
        })
            .selector('edge')
            .css({
            'width': 0.7,
            'line-color': 'data(colorCode)',
            //'line-color': 'black',
            'content': 'data(label)',
        })
            .selector(':parent')
            .css({
            'background-opacity': 0.333
        })
            .selector('edge.questionable')
            .css({
            'line-style': 'dotted',
            'target-arrow-shape': 'diamond'
        })
            .selector('.faded')
            .css({
            'opacity': 0.25,
            'text-opacity': 0
        });
    }
    NgCyto.prototype.log = function (message) {
        this.messageService.add('GraphDirective: ' + message);
    };
    NgCyto.prototype.onShowNewGraph = function (elements) {
        this.edgeColors = [];
        this.log("onShowNewGraph");
        //this.cy.destroy();
        this.elements = elements;
        //this.render();
    };
    /*  public colorEdge(t:string):string {
          var index:number;
          index = parseInt(t);
          if (this.edgeColors[index]==null) {
              var abort=false;
              var color;
              while(!abort) {
                  abort=true;
                  color = this.getRandomColor();
                  for (var i=0;i<this.edgeColors.length;i++) {
                      if(this.edgeColors[i]==color) {
                          abort=false;
                          break;
                      }
                  }
              }
              this.edgeColors[index]==color;
              return color;
  
          }
          return 'white';
          
      }*/
    NgCyto.prototype.changeNodeColor = function (edgeId, edgeColor) {
        this.cy.nodes(edgeId).style({
            'background-color': edgeColor
        });
    };
    NgCyto.prototype.changeEdgeColor = function (edgeId, edgeColor) {
        this.cy.edges(edgeId).style({
            'background-color': edgeColor,
            'line-color': edgeColor
        });
    };
    NgCyto.prototype.ngOnChanges = function () {
        this.render();
        console.log(this.el.nativeElement);
    };
    NgCyto.prototype.render = function () {
        var cy_contianer = this.renderer.selectRootElement("#cy");
        var localselect = this.select;
        this.cy = cytoscape({
            container: cy_contianer,
            layout: this.layout,
            minZoom: this.zoom.min,
            maxZoom: this.zoom.max,
            style: this.style,
            elements: this.elements,
            wheelSensitivity: 0.3,
            styleEnabled: true,
        });
        this.cy.on('tap', 'node', function (e) {
            var node = e.cyTarget;
            var neighborhood = node.neighborhood().add(node);
            this.cy.elements().addClass('faded');
            neighborhood.removeClass('faded');
            localselect.emit(node.data("name"));
        });
        this.cy.on('tap', function (e) {
            if (e.cyTarget === this.cy) {
                this.cy.elements().removeClass('faded');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgCyto.prototype, "elements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgCyto.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgCyto.prototype, "layout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgCyto.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgCyto.prototype, "select", void 0);
    NgCyto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-cytoscape',
            template: '<div id="cy"></div>',
            styles: ["#cy {\n        height: 500px;\n        width: 100%;\n        position: absolute;\n        left: 20;\n        top: 20;\n        background-color: lightblue;              \n    }"]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], NgCyto);
    return NgCyto;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\PSE\Implementierung\angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map