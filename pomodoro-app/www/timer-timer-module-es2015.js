(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timer-timer-module"],{

/***/ "./node_modules/angular-svg-round-progressbar/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_component_1 = __webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule = __decorate([
        core_1.NgModule({
            declarations: [round_progress_component_1.RoundProgressComponent],
            exports: [round_progress_component_1.RoundProgressComponent],
            providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
        })
    ], RoundProgressModule);
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
__export(__webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js"));
__export(__webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js"));
__export(__webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js"));
__export(__webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var RoundProgressComponent = /** @class */ (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        /** Radius of the circle. */
        this.radius = this._defaults.radius;
        /** Name of the easing function to use when animating. */
        this.animation = this._defaults.animation;
        /** Time in millisconds by which to delay the animation. */
        this.animationDelay = this._defaults.animationDelay;
        /** Duration of the animation. */
        this.duration = this._defaults.duration;
        /** Width of the circle's stroke. */
        this.stroke = this._defaults.stroke;
        /** Color of the circle. */
        this.color = this._defaults.color;
        /** Background color of the circle. */
        this.background = this._defaults.background;
        /** Whether the circle should take up the width of its parent. */
        this.responsive = this._defaults.responsive;
        /** Whether the circle is filling up clockwise. */
        this.clockwise = this._defaults.clockwise;
        /** Whether to render a semicircle. */
        this.semicircle = this._defaults.semicircle;
        /** Whether the tip of the progress should be rounded off. */
        this.rounded = this._defaults.rounded;
        /** Emits when a new value has been rendered. */
        this.onRender = new core_1.EventEmitter();
        this._lastAnimationId = 0;
    }
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = function (value) {
        if (this._path) {
            var arc = this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle);
            this._path.nativeElement.setAttribute('d', arc);
        }
    };
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = function () {
        var diameter = this._getDiameter();
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    /** Diameter of the circle. */
    RoundProgressComponent.prototype._getDiameter = function () {
        return this.radius * 2;
    };
    /** The CSS height of the wrapper element. */
    RoundProgressComponent.prototype._getElementHeight = function () {
        if (!this.responsive) {
            return (this.semicircle ? this.radius : this._getDiameter()) + 'px';
        }
    };
    /** Viewbox for the SVG element. */
    RoundProgressComponent.prototype._getViewBox = function () {
        var diameter = this._getDiameter();
        return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
    };
    /** Bottom padding for the wrapper element. */
    RoundProgressComponent.prototype._getPaddingBottom = function () {
        if (this.responsive) {
            return this.semicircle ? '50%' : '100%';
        }
    };
    __decorate([
        core_1.ViewChild('path', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], RoundProgressComponent.prototype, "_path", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "current", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "animationDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "stroke", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "background", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "semicircle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "rounded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RoundProgressComponent.prototype, "onRender", void 0);
    RoundProgressComponent = __decorate([
        core_1.Component({
            selector: 'round-progress',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_getViewBox()\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
            host: {
                'role': 'progressbar',
                '[attr.aria-valuemin]': 'current',
                '[attr.aria-valuemax]': 'max',
                '[style.width]': "responsive ? '' : _getDiameter() + 'px'",
                '[style.height]': '_getElementHeight()',
                '[style.padding-bottom]': '_getPaddingBottom()',
                '[class.responsive]': 'responsive'
            },
            styles: ["\n    :host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    :host(.responsive) {\n      width: 100%;\n      padding-bottom: 100%;\n    }\n    :host(.responsive) > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n  "]
        }),
        __param(2, core_1.Inject(round_progress_config_1.ROUND_PROGRESS_DEFAULTS)),
        __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
            round_progress_ease_1.RoundProgressEase, Object, core_1.NgZone])
    ], RoundProgressComponent);
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
var ɵ0 = {
    radius: 125,
    animation: 'easeOutCubic',
    animationDelay: null,
    duration: 500,
    stroke: 15,
    color: '#45CCCE',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false
};
exports.ɵ0 = ɵ0;
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
    useValue: ɵ0
};
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var RoundProgressEase = /** @class */ (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    RoundProgressEase = __decorate([
        core_1.Injectable()
    ], RoundProgressEase);
    return RoundProgressEase;
}());
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = /** @class */ (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    RoundProgressService.prototype.resolveColor = function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    RoundProgressService.prototype.getTimestamp = function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    RoundProgressService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], RoundProgressService);
    return RoundProgressService;
}());
exports.RoundProgressService = RoundProgressService;
//# sourceMappingURL=round-progress.service.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timer/timer.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timer/timer.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Pomodoro\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"progress-wrapper\">\n        <div class=\"current\" [ngStyle]=\"getOverlayStyle()\">{{ current }}/{{ max }}</div>\n        <div class=\"current\" [ngStyle]=\"getOverlayStyleMinute()\">{{ second }}</div>\n        <round-progress\n          [current]=\"current\"\n          [max]=\"max\"\n          [stroke]=\"stroke\"\n          [radius]=\"radius\"\n          [semicircle]=\"semicircle\"\n          [rounded]=\"rounded\"\n          [responsive]=\"responsive\"\n          [clockwise]=\"clockwise\"\n          [color]=\"gradient ? 'url(#gradient)' : color\"\n          [background]=\"background\"\n          [duration]=\"duration\"\n          [animation]=\"animation\"\n          [animationDelay]=\"animationDelay\"></round-progress>\n        <round-progress\n          [current]=\"second\"\n          [max]=\"max2\"\n          [stroke]=\"stroke\"\n          [radius]=\"radius2\"\n          [semicircle]=\"semicircle\"\n          [rounded]=\"rounded\"\n          [responsive]=\"responsive\"\n          [clockwise]=\"clockwise\"\n          [color]=\"gradient ? 'url(#gradient)' : color2\"\n          [background]=\"background\"\n          [duration]=\"duration\"\n          [animation]=\"animation\"\n          [animationDelay]=\"animationDelay\" class=\"current\" [ngStyle]=\"middle()\">></round-progress>\n      </div>\n      <ion-card>\n        <ion-card-content class=\"center\">\n            <ion-button (click)=\"start()\" style=\"--background: #218380\"><ion-icon name=\"play\"></ion-icon></ion-button>\n            <ion-button (click)=\"pause()\" style=\"--background: #218380\"><ion-icon name=\"pause\"></ion-icon></ion-button>\n            <ion-button (click)=\"restart()\" style=\"--background: #218380\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n        </ion-card-content>\n      </ion-card>\n      <ion-item style=\"--background: #218380; --color: white\">\n          <ion-label >Feladatok</ion-label>\n      </ion-item>\n      <ion-list>\n          <ion-item *ngFor=\"let task of sortedTasks;let i = index\">\n              <ion-card [style.background-color]=\"task.color\" class=\"card\" (click)=changeColor(i)>\n                  <ion-card-header>\n                    <ion-card-subtitle [ngStyle]=\"{'color': task.color == 'green' || task.color == '#D81159' ? 'white' : ''}\">{{task.location}}</ion-card-subtitle>\n                    <ion-card-title [ngStyle]=\"{'color': task.color == 'green' || task.color == '#D81159' ? 'white' : ''}\">{{task.task}}</ion-card-title>\n                  </ion-card-header>\n              </ion-card>          \n          </ion-item>\n        </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/timer/timer.module.ts":
/*!***************************************!*\
  !*** ./src/app/timer/timer.module.ts ***!
  \***************************************/
/*! exports provided: TimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageModule", function() { return TimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer.page */ "./src/app/timer/timer.page.ts");








const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_7__["TimerPage"]
    }
];
let TimerPageModule = class TimerPageModule {
};
TimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__["RoundProgressModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_7__["TimerPage"]]
    })
], TimerPageModule);



/***/ }),

/***/ "./src/app/timer/timer.page.scss":
/*!***************************************!*\
  !*** ./src/app/timer/timer.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-wrapper {\n  position: relative;\n  margin: 20px auto;\n  font-size: 40px;\n}\n\n.current {\n  position: absolute;\n  color: #bbb;\n  font-weight: 100;\n  line-height: 1;\n}\n\nround-progress {\n  margin: auto;\n}\n\n.center {\n  text-align: center;\n}\n\n.blue button {\n  background-color: #387ef5 !important;\n}\n\n.card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvRDpcXFByb2plY3RzXFxpb25pYy1wb21vZG9yby10aW1lLW1hbmFnZW1lbnRcXHBvbW9kb3JvL3NyY1xcYXBwXFx0aW1lclxcdGltZXIucGFnZS5zY3NzIiwic3JjL2FwcC90aW1lci90aW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNBLFdBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uY3VycmVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxucm91bmQtcHJvZ3Jlc3Mge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsdWUgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbndpZHRoOiAxMDAlO1xyXG59IiwiLnByb2dyZXNzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5jdXJyZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2JiYjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbnJvdW5kLXByb2dyZXNzIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmx1ZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/timer/timer.page.ts":
/*!*************************************!*\
  !*** ./src/app/timer/timer.page.ts ***!
  \*************************************/
/*! exports provided: TimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPage", function() { return TimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/timer.service */ "./src/app/services/timer.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






let TimerPage = class TimerPage {
    constructor(tasksService, timerService, localNotifications) {
        this.tasksService = tasksService;
        this.timerService = timerService;
        this.localNotifications = localNotifications;
        this.current = 0;
        this.max = 25;
        this.max2 = 60;
        this.stroke = 15;
        this.radius = 125;
        this.radius2 = 105;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = false;
        this.clockwise = true;
        this.color = '#218380';
        this.color2 = '#FFBC42';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeInExpo';
        this.animationDelay = 0;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.TIME_IN_MS = 5000;
        this.tasks = [];
        this.sortedTasks = [];
        this.second = 0;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getTasks();
            if (this.tasks) {
                this.sortedTasks = this.tasks.sort((a, b) => a.start.toString().localeCompare(b.start.toString()));
            }
            this.sub = rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].interval(1000).subscribe(() => {
                this.current = this.timerService.getCurrent();
                this.second = this.timerService.getSecond();
                if (this.current === 25) {
                    this.localNotifications.schedule({
                        title: 'Pomodoro',
                        text: 'Ideje 5 prec szünetet tartani!'
                    });
                    this.restart();
                }
            });
        });
    }
    getTasks() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.tasksService.getTasks().then(tasks => {
                this.tasks = tasks;
            });
        });
    }
    start() {
        this.timerService.startTimer();
    }
    pause() {
        this.timerService.pauseTimer();
    }
    restart() {
        this.timerService.resetTimer();
    }
    changeColor(i) {
        if (this.tasks[i].color === 'white') {
            this.tasks[i].color = 'green';
            this.tasksService.updateTask(this.tasks[i]);
            return;
        }
        if (this.tasks[i].color === 'green') {
            this.tasks[i].color = '#D81159';
            this.tasksService.updateTask(this.tasks[i]);
            return;
        }
        if (this.tasks[i].color === '#D81159') {
            this.tasks[i].color = 'white';
            this.tasksService.updateTask(this.tasks[i]);
        }
    }
    ngOnInit() {
    }
    middle() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': '50%',
            'bottom': 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.5 + 'px'
        };
    }
    getOverlayStyle() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': isSemi ? 'auto' : '45%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.5 + 'px'
        };
    }
    getOverlayStyleMinute() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': isSemi ? 'auto' : '65%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.5 + 'px'
        };
    }
};
TimerPage.ctorParameters = () => [
    { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] },
    { type: _services_timer_service__WEBPACK_IMPORTED_MODULE_4__["TimerService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] }
];
TimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__(/*! raw-loader!./timer.page.html */ "./node_modules/raw-loader/index.js!./src/app/timer/timer.page.html"),
        styles: [__webpack_require__(/*! ./timer.page.scss */ "./src/app/timer/timer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"],
        _services_timer_service__WEBPACK_IMPORTED_MODULE_4__["TimerService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])
], TimerPage);



/***/ })

}]);
//# sourceMappingURL=timer-timer-module-es2015.js.map