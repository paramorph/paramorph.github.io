(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./_includes/TableOfContents/index.tsx":
/*!*********************************************!*\
  !*** ./_includes/TableOfContents/index.tsx ***!
  \*********************************************/
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
;
var TableOfContents = /** @class */ (function (_super) {
    __extends(TableOfContents, _super);
    function TableOfContents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableOfContents.prototype.render = function () {
        var _a = this.props.respectLimit, respectLimit = _a === void 0 ? false : _a;
        var paramorph = this.context.paramorph;
        var topLevel = Object.keys(paramorph.posts)
            .map(function (key) { return paramorph.posts[key]; })
            .filter(function (post) { return post.categories.length == 0; })
            .filter(function (post) { return post.url != '/'; })
            .filter(function (post) { return !(post instanceof paramorph_1.Tag); });
        var tags = Object.keys(paramorph.tags)
            .map(function (key) { return paramorph.tags[key]; });
        return (React.createElement("ul", null,
            React.createElement("li", { key: '/' },
                React.createElement(paramorph_1.Link, { to: '/' }, paramorph.posts['/'].title),
                React.createElement(Branch, { posts: topLevel, shallow: respectLimit, ellipsis: respectLimit })),
            !respectLimit
                ? tags.map(function (_a) {
                    var title = _a.title, url = _a.url, posts = _a.posts;
                    return (React.createElement("li", { key: url },
                        React.createElement(paramorph_1.Link, { to: url }, title),
                        React.createElement(Branch, { posts: posts, shallow: true })));
                })
                : null));
    };
    return TableOfContents;
}(paramorph_1.PureComponent));
exports.TableOfContents = TableOfContents;
exports.default = TableOfContents;
function Branch(_a) {
    var posts = _a.posts, _b = _a.shallow, shallow = _b === void 0 ? false : _b, _c = _a.ellipsis, ellipsis = _c === void 0 ? false : _c;
    var output = posts.filter(function (post) { return post.output; });
    var categories = output.filter(function (post) { return post instanceof paramorph_1.Category; });
    var notCategories = output.filter(function (post) { return !(post instanceof paramorph_1.Category); });
    return (React.createElement("ul", null,
        categories.map(function (_a) {
            var url = _a.url, title = _a.title, posts = _a.posts;
            return (React.createElement("li", { key: url },
                React.createElement(paramorph_1.Link, { to: url }, title),
                !shallow ? React.createElement(Branch, { posts: posts }) : null));
        }),
        notCategories.map(function (_a) {
            var title = _a.title, url = _a.url;
            return (React.createElement("li", { key: url },
                React.createElement(paramorph_1.Link, { to: url }, title)));
        }),
        ellipsis ? React.createElement("li", { key: 'ellipsis' }, "\u2026") : null));
}
exports.Branch = Branch;


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
//# sourceMappingURL=8-bdd00872c5777d60b954.bundle.js.map