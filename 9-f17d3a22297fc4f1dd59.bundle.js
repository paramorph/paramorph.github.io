(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./_includes/Tile/index.tsx":
/*!**********************************!*\
  !*** ./_includes/Tile/index.tsx ***!
  \**********************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var paramorph_1 = __webpack_require__(/*! paramorph */ "./node_modules/paramorph/index.js");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.getChildContext = function () {
        var post = this.props.post;
        return __assign({}, this.context, { post: post });
    };
    Tile.prototype.render = function () {
        var _a = this.props, post = _a.post, Content = _a.Content, props = __rest(_a, ["post", "Content"]);
        return (React.createElement("article", null,
            React.createElement("h1", null,
                React.createElement(paramorph_1.Link, { to: post.url }, post.title)),
            React.createElement(Content, { respectLimit: true }),
            React.createElement("p", null,
                React.createElement(paramorph_1.Link, { to: post.url }, "Read More"))));
    };
    Tile.childContextTypes = paramorph_1.ContextTypes;
    return Tile;
}(paramorph_1.PureComponent));
exports.Tile = Tile;
exports.default = Tile;
function maybeRenderImage(post) {
    if (!post.image) {
        return null;
    }
    return (React.createElement("p", null,
        React.createElement(paramorph_1.Link, { to: post.url },
            React.createElement("img", { src: post.image, alt: post.title }))));
}


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
//# sourceMappingURL=9-f17d3a22297fc4f1dd59.bundle.js.map