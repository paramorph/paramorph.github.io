(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./_layouts/default.tsx":
/*!******************************!*\
  !*** ./_layouts/default.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var paramorph_1 = __webpack_require__(/*! paramorph */ "./node_modules/paramorph/index.js");
var DefaultLayout = /** @class */ (function (_super) {
    __extends(DefaultLayout, _super);
    function DefaultLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultLayout.prototype.render = function () {
        var _a = this.context, paramorph = _a.paramorph, post = _a.post;
        var children = this.props.children;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'header' },
                React.createElement("nav", null,
                    React.createElement("ul", null, paramorph.config.menu.map(function (entry) { return (React.createElement("li", { key: entry.url },
                        React.createElement(paramorph_1.Link, { to: entry.url }, entry.short))); })))),
            React.createElement("div", { className: 'main' },
                React.createElement("main", null,
                    React.createElement("div", { className: 'title' },
                        React.createElement("h1", null,
                            React.createElement(paramorph_1.Link, { to: post.url }, post.title)),
                        React.createElement("ul", { className: 'tags' }, post.tags
                            .map(function (title) { return paramorph.tags[title]; })
                            .map(function (_a) {
                            var title = _a.title, url = _a.url;
                            return (React.createElement("li", { key: url },
                                React.createElement(paramorph_1.Link, { to: url }, title)));
                        }))),
                    children)),
            React.createElement("div", { className: 'footer' },
                React.createElement("nav", null,
                    React.createElement("ul", null,
                        paramorph.config.menu.map(function (entry) { return (React.createElement("li", { key: entry.url },
                            React.createElement(paramorph_1.Link, { to: entry.url }, entry.short))); }),
                        React.createElement("li", null,
                            React.createElement(paramorph_1.Link, { to: '/sitemap/' }, "Sitemap")))))));
    };
    return DefaultLayout;
}(paramorph_1.PureComponent));
exports.DefaultLayout = DefaultLayout;
exports.default = DefaultLayout;


/***/ }),

/***/ "./node_modules/paramorph/index.js":
/*!*****************************************!*\
  !*** ./node_modules/paramorph/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(/*! ./model */ "./node_modules/paramorph/model/index.js");
exports.Layout = model_1.Layout;
exports.Include = model_1.Include;
exports.Post = model_1.Post;
exports.Category = model_1.Category;
exports.Collection = model_1.Collection;
exports.Tag = model_1.Tag;
exports.Paramorph = model_1.Paramorph;
exports.PathParams = model_1.PathParams;
var react_1 = __webpack_require__(/*! ./react */ "./node_modules/paramorph/react/index.js");
exports.Content = react_1.Content;
exports.ContextTypes = react_1.ContextTypes;
exports.ContextContainer = react_1.ContextContainer;
exports.Component = react_1.Component;
exports.PureComponent = react_1.PureComponent;
exports.Link = react_1.Link;
exports.DeferredStyles = react_1.DeferredStyles;
exports.DeferredScripts = react_1.DeferredScripts;
exports.Root = react_1.Root;


/***/ })

}]);
//# sourceMappingURL=10-5602604feb56f21118f4.bundle.js.map