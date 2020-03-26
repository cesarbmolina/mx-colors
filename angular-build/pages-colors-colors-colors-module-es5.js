function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-colors-colors-colors-module"], {
  /***/
  "./src/app/pages/colors/colors/colors.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/colors/colors/colors.component.ts ***!
    \*********************************************************/

  /*! exports provided: ColorsComponent */

  /***/
  function srcAppPagesColorsColorsColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () {
      return ColorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_colors_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/colors/colors.service */
    "./src/app/services/colors/colors.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/color-details/color-details.component */
    "./src/app/shared/color-details/color-details.component.ts");

    function ColorsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorsComponent_app_color_details_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-color-details", 14);
      }

      if (rf & 2) {
        var color_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", color_r2.name)("year", color_r2.year)("color", color_r2.color)("pantoneValue", color_r2.pantone_value);
      }
    }

    var ColorsComponent =
    /*#__PURE__*/
    function () {
      function ColorsComponent(colorsApi) {
        _classCallCheck(this, ColorsComponent);

        this.colorsApi = colorsApi;
      }

      _createClass(ColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDataColors();
        }
        /**
         * RETURN NEXT PAGE
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          if (this.page === this.totalPages) {
            return;
          }

          var nextTo = this.page + 1;
          this.getDataColors(nextTo);
        }
        /**
         * RETURN PREV PAGE
         */

      }, {
        key: "prevPage",
        value: function prevPage() {
          var prevTo = this.page - 1;
          this.getDataColors(prevTo);
        }
        /**
         * RETURN DATA [ColorServices]
         * @param page [number]
         */

      }, {
        key: "getDataColors",
        value: function getDataColors(page) {
          var _this = this;

          this.isLoading = true;
          this.getColors = this.colorsApi.getColors(page).subscribe(function (res) {
            _this.arrayColors = res.data;
            _this.totalPages = res.total_pages;
            _this.page = res.page;
            _this.isTotalPages = _this.page === _this.totalPages;
            _this.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getColors.unsubscribe();
        }
      }]);

      return ColorsComponent;
    }();

    ColorsComponent.ɵfac = function ColorsComponent_Factory(t) {
      return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colors_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorServices"]));
    };

    ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorsComponent,
      selectors: [["app-colors"]],
      decls: 14,
      vars: 6,
      consts: [[1, "container"], [1, "title-section", "d-flex", "justify-content-between"], [1, "title-3"], [1, "d-flex", "align-items-center"], ["class", "loading", 4, "ngIf"], ["tooltip", "ANTERIOR", 1, "btn", "btn-prev-next", 3, "disabled", "click"], [1, "icon-chevron-left"], [1, "num-page"], ["tooltip", "SIGUIENTE", 1, "btn", "btn-prev-next", 3, "disabled", "click"], [1, "icon-chevron-right"], [1, "d-flex", "flex-column", "flex-md-row", "flex-wrap", "justify-content-center", "mb-4"], ["class", "color-content", 3, "name", "year", "color", "pantoneValue", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "icon-loop2"], [1, "color-content", 3, "name", "year", "color", "pantoneValue"]],
      template: function ColorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Colores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorsComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_button_click_6_listener() {
            return ctx.prevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_button_click_10_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorsComponent_app_color_details_13_Template, 1, 4, "app-color-details", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.page === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.page, " / ", ctx.totalPages, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isTotalPages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayColors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_3__["ColorDetailsComponent"]],
      styles: ["[_nghost-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f1f1f1;\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n}\n[_nghost-%COMP%]   .color-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .color-content[_ngcontent-%COMP%] {\n    max-width: 33%;\n  }\n}\n[_nghost-%COMP%]   .btn-prev-next[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  background-color: #f1f1f1;\n  margin: 0 10px;\n  padding: 5px 8px;\n  line-height: 1;\n  position: relative;\n}\n[_nghost-%COMP%]   .btn-prev-next[disabled][_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n[_nghost-%COMP%]   .btn-prev-next[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\n[_nghost-%COMP%]   .btn-prev-next[_ngcontent-%COMP%]:hover::before {\n  content: attr(tooltip);\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  bottom: -20px;\n  color: #fff;\n  font-size: 8px;\n  letter-spacing: 1px;\n  left: 50%;\n  padding: 5px 8px;\n  position: absolute;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29sb3JzL2NvbG9ycy9DOlxcVXNlcnNcXE5vcnRlIEZyb250XFxEb2N1bWVudHNcXGNlc2FyXFxjb2RpZ29cXG14LWNvbG9ycy9zcmNcXGFwcFxccGFnZXNcXGNvbG9yc1xcY29sb3JzXFxjb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbG9ycy9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFKRjtJQUtJLGNBQUE7RUNESjtBQUNGO0FESUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSx5QkFBQTtBQ0ZOO0FESUk7RUFDRSxzQkFBQTtBQ0ZOO0FES0k7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbG9ycy9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC50aXRsZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cclxuICAgIC50aXRsZS0zIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb2xvci1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tcHJldi1uZXh0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJltkaXNhYmxlZF06aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogYXR0cih0b29sdGlwKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3R0b206IC0yMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC50aXRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuOmhvc3QgLnRpdGxlLXNlY3Rpb24gLnRpdGxlLTMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuOmhvc3QgLmNvbG9yLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC5jb2xvci1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDMzJTtcbiAgfVxufVxuOmhvc3QgLmJ0bi1wcmV2LW5leHQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmJ0bi1wcmV2LW5leHRbZGlzYWJsZWRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbjpob3N0IC5idG4tcHJldi1uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbjpob3N0IC5idG4tcHJldi1uZXh0OmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKHRvb2x0aXApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm90dG9tOiAtMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsZWZ0OiA1MCU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-colors',
          templateUrl: './colors.component.html',
          styleUrls: ['./colors.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_colors_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorServices"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/colors/colors/colors.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/colors/colors/colors.module.ts ***!
    \******************************************************/

  /*! exports provided: ColorsModule */

  /***/
  function srcAppPagesColorsColorsColorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsModule", function () {
      return ColorsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./colors.component */
    "./src/app/pages/colors/colors/colors.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts"); // COMPONENTS


    var routes = [{
      path: '',
      component: _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]
    }];
    /**
     * COLORS
     * LAZY LOADED FEATURE MODULE
     */

    var ColorsModule = function ColorsModule() {
      _classCallCheck(this, ColorsModule);
    };

    ColorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ColorsModule
    });
    ColorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ColorsModule_Factory(t) {
        return new (t || ColorsModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorsModule, {
        declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/colors/colors.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/colors/colors.service.ts ***!
    \***************************************************/

  /*! exports provided: ColorServices */

  /***/
  function srcAppServicesColorsColorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorServices", function () {
      return ColorServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resp_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../resp-api.service */
    "./src/app/services/resp-api.service.ts");

    var ColorServices =
    /*#__PURE__*/
    function () {
      function ColorServices(api) {
        _classCallCheck(this, ColorServices);

        this.api = api;
      }
      /** GET COLORS */


      _createClass(ColorServices, [{
        key: "getColors",
        value: function getColors(page) {
          var url = 'https://reqres.in/api/colors';
          return this.api.getApi(url + "?page=".concat(page) + "&per_page=9");
        }
      }]);

      return ColorServices;
    }();

    ColorServices.ɵfac = function ColorServices_Factory(t) {
      return new (t || ColorServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_resp_api_service__WEBPACK_IMPORTED_MODULE_1__["RespApiService"]));
    };

    ColorServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ColorServices,
      factory: ColorServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _resp_api_service__WEBPACK_IMPORTED_MODULE_1__["RespApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/resp-api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/resp-api.service.ts ***!
    \**********************************************/

  /*! exports provided: RespApiService */

  /***/
  function srcAppServicesRespApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RespApiService", function () {
      return RespApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // OPTIONS


    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var RespApiService =
    /*#__PURE__*/
    function () {
      /** HTTP WRAPPER  */
      function RespApiService(http) {
        _classCallCheck(this, RespApiService);

        this.http = http;
      }
      /** GET REQUEST BY API */


      _createClass(RespApiService, [{
        key: "getApi",
        value: function getApi(url) {
          return this.http.get(url, httpOptions);
        }
      }]);

      return RespApiService;
    }();

    RespApiService.ɵfac = function RespApiService_Factory(t) {
      return new (t || RespApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RespApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RespApiService,
      factory: RespApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RespApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/color-details/color-details.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/color-details/color-details.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ColorDetailsComponent */

  /***/
  function srcAppSharedColorDetailsColorDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorDetailsComponent", function () {
      return ColorDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "border-left": a0
      };
    };

    var ColorDetailsComponent =
    /*#__PURE__*/
    function () {
      function ColorDetailsComponent() {
        _classCallCheck(this, ColorDetailsComponent);
      }

      _createClass(ColorDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "copyColor",
        value: function copyColor(value) {
          this.selectcolor(value);
          document.execCommand('copy');
          var select = window.getSelection();
          select.removeAllRanges();
        }
      }, {
        key: "selectcolor",
        value: function selectcolor(node) {
          var _this2 = this;

          this.isCopied = true;
          var range = document.createRange();
          range.selectNodeContents(node);
          var select = window.getSelection();
          select.removeAllRanges();
          select.addRange(range);
          setTimeout(function () {
            _this2.isCopied = false;
          }, 2000);
        }
      }]);

      return ColorDetailsComponent;
    }();

    ColorDetailsComponent.ɵfac = function ColorDetailsComponent_Factory(t) {
      return new (t || ColorDetailsComponent)();
    };

    ColorDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorDetailsComponent,
      selectors: [["app-color-details"]],
      inputs: {
        name: "name",
        year: "year",
        color: "color",
        pantoneValue: "pantoneValue"
      },
      decls: 14,
      vars: 9,
      consts: [[1, "mr-3", "mb-3", "color-box", 3, "ngStyle", "click"], [1, "icon-hover"], [1, "icon-copy"], [1, "is-copied"], [1, ""], [1, "color-title", "text-center"], [1, "text-center"], ["colorValue", ""], [1, "text-right"]],
      template: function ColorDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorDetailsComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.copyColor(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA1Copiado! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "10px solid" + ctx.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-copied-active", ctx.isCopied);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year || "year", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name || "name", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.color || "color", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pantoneValue || "pantoneValue", " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s;\n  position: relative;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]   .icon-hover[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.5s;\n  background-color: #f1f1f1;\n  border-radius: 50%;\n  padding: 10px 12px;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  font-size: 16px !important;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]:hover   .icon-hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]   .color-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: capitalize;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]   .is-copied[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  opacity: 0;\n  transition: all 1s;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]   .is-copied-active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbG9yLWRldGFpbHMvQzpcXFVzZXJzXFxOb3J0ZSBGcm9udFxcRG9jdW1lbnRzXFxjZXNhclxcY29kaWdvXFxteC1jb2xvcnMvc3JjXFxhcHBcXHNoYXJlZFxcY29sb3ItZGV0YWlsc1xcY29sb3ItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbG9yLWRldGFpbHMvY29sb3ItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FDQU47QURHSTtFQUNFLHdDQUFBO0FDRE47QURHTTtFQUNFLFVBQUE7QUNEUjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FETUk7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0k7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNMTjtBRFFJO0VBQ0UsVUFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbG9yLWRldGFpbHMvY29sb3ItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29sb3ItYm94IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuaWNvbi1ob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogOHB4O1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XHJcblxyXG4gICAgICAuaWNvbi1ob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sb3ItdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1jb3BpZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuOCk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLWNvcGllZC1hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuY29sb3ItYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmNvbG9yLWJveCAuaWNvbi1ob3ZlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB0b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCAuY29sb3ItYm94OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbjpob3N0IC5jb2xvci1ib3g6aG92ZXIgLmljb24taG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgLmNvbG9yLWJveCBkaXYge1xuICBmb250LXNpemU6IDExcHg7XG59XG46aG9zdCAuY29sb3ItYm94IC5jb2xvci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY29sb3ItYm94IC5pcy1jb3BpZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG46aG9zdCAuY29sb3ItYm94IC5pcy1jb3BpZWQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-color-details',
          templateUrl: './color-details.component.html',
          styleUrls: ['./color-details.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        year: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pantoneValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _color_details_color_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./color-details/color-details.component */
    "./src/app/shared/color-details/color-details.component.ts"); // COMPONENT


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_2__["ColorDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_2__["ColorDetailsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_2__["ColorDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_color_details_color_details_component__WEBPACK_IMPORTED_MODULE_2__["ColorDetailsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-colors-colors-colors-module-es5.js.map