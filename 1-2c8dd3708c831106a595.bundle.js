(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./_categories/blog.markdown":
/*!***********************************!*\
  !*** ./_categories/blog.markdown ***!
  \***********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var paramorph_1 = __webpack_require__(/*! paramorph */ "./node_modules/paramorph/index.js");
var index_tsx_1 = __webpack_require__(/*! @website/_includes/Feed/index.tsx */ "./_includes/Feed/index.tsx");
/**
 * @author Maciej Chałapuk (maciej@chalapuk.pl)
 */
var MarkdownPost = /** @class */ (function (_super) {
    __extends(MarkdownPost, _super);
    function MarkdownPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkdownPost.prototype.render = function () {
        var _a = this.context, paramorph = _a.paramorph, post = _a.post, history = _a.history;
        return (React.createElement(paramorph_1.Content, __assign({ limit: 5 }, this.props),
            React.createElement("div", null,
                React.createElement(index_tsx_1.default, { posts: paramorph.collections['Posts'].posts, batchSize: 2 }))));
    };
    return MarkdownPost;
}(paramorph_1.PureComponent));
exports.MarkdownPost = MarkdownPost;
exports.default = MarkdownPost;


/***/ }),

/***/ "./_includes/Feed/index.tsx":
/*!**********************************!*\
  !*** ./_includes/Feed/index.tsx ***!
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var paramorph_1 = __webpack_require__(/*! paramorph */ "./node_modules/paramorph/index.js");
var Tile_1 = __webpack_require__(/*! @website/_includes/Tile */ "./_includes/Tile/index.tsx");
var TableOfContents_1 = __webpack_require__(/*! @website/_includes/TableOfContents */ "./_includes/TableOfContents/index.tsx");
;
var DEFAULT_PRELOAD_SIZE = 20;
var DEFAULT_BATCH_SIZE = 5;
var PAGE_PATH_PARAM = 'pageNumber';
var PAGE_PARAM_FORMAT = '(-\\d+-)';
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed(props) {
        var _this = _super.call(this, props) || this;
        _this.loadTrigger = null;
        var preloadSize = Math.min(props.preloadSize || props.batchSize || DEFAULT_PRELOAD_SIZE, props.posts.length);
        _this.state = {
            loading: preloadSize,
            loaded: preloadSize,
        };
        _this.onContent = _this.onContent.bind(_this);
        _this.onScroll = _this.onScroll.bind(_this);
        return _this;
    }
    Feed.prototype.componentWillMount = function () {
        var _a;
        var _b = this.context, post = _b.post, requestParameterizedRender = _b.requestParameterizedRender;
        if (!this.hasPathParam()) {
            console.error("'" + PAGE_PATH_PARAM + PAGE_PARAM_FORMAT + "' path param not found in pathSpec: '" + post.pathSpec + "'");
            return;
        }
        // pages in url are numbered starting from 1
        var lastPageNumber = this.getLastPageNumber() + 1;
        // first page is already rendered
        for (var i = 2; i <= lastPageNumber + 1; ++i) {
            requestParameterizedRender((_a = {}, _a[PAGE_PATH_PARAM] = "-" + i + "-", _a));
        }
    };
    Feed.prototype.render = function () {
        var _this = this;
        var _a = this.context, paramorph = _a.paramorph, post = _a.post;
        var _b = this.props, posts = _b.posts, _c = _b.respectLimit, respectLimit = _c === void 0 ? false : _c, props = __rest(_b, ["posts", "respectLimit"]);
        var _d = this.state, loading = _d.loading, loaded = _d.loaded;
        if (respectLimit) {
            return React.createElement(TableOfContents_1.Branch, __assign({ posts: posts.slice(0, post.limit), shallow: true }, props));
        }
        var content = this.getContent();
        return (React.createElement("div", null,
            this.renderNextLink(),
            content.map(function (_a) {
                var post = _a.post, Content = _a.Content;
                return (React.createElement(Tile_1.default, { key: post.url, post: post, Content: Content }));
            }),
            React.createElement("div", { ref: function (e) { return _this.loadTrigger = e; } }, this.isLoading() ? 'Loading...' : null),
            this.renderPreviousLink()));
    };
    Feed.prototype.componentDidMount = function () {
        var _a = this.context, paramorph = _a.paramorph, post = _a.post;
        var _b = this.props.respectLimit, respectLimit = _b === void 0 ? false : _b;
        var loaded = this.state.loaded;
        if (!respectLimit) {
            paramorph.addContentListener(this.onContent);
        }
        window.addEventListener('scroll', this.onScroll);
        this.maybeLoadInitialBatch();
    };
    Feed.prototype.componentWillUnmount = function () {
        var paramorph = this.context.paramorph;
        var _a = this.props.respectLimit, respectLimit = _a === void 0 ? false : _a;
        if (!respectLimit) {
            paramorph.removeContentListener(this.onContent);
        }
        window.removeEventListener('scroll', this.onScroll);
    };
    Feed.prototype.renderPreviousLink = function () {
        if (this.isOnLastPage() || !this.hasPathParam()) {
            return null;
        }
        return (React.createElement("p", null,
            React.createElement(paramorph_1.Link, { to: this.getPreviousUrl() }, "Previous Posts ->")));
    };
    Feed.prototype.renderNextLink = function () {
        if (this.isOnFirstPage() || !this.hasPathParam()) {
            return null;
        }
        return (React.createElement("p", null,
            React.createElement(paramorph_1.Link, { to: this.getNextUrl() }, "<- Next Posts")));
    };
    Feed.prototype.getContent = function () {
        var e_1, _a;
        var paramorph = this.context.paramorph;
        var posts = this.props.posts;
        var loading = this.state.loading;
        var content = [];
        var pageOffset = this.getPageOffset();
        var pagePosts = posts.slice(pageOffset, pageOffset + loading);
        try {
            for (var pagePosts_1 = __values(pagePosts), pagePosts_1_1 = pagePosts_1.next(); !pagePosts_1_1.done; pagePosts_1_1 = pagePosts_1.next()) {
                var post = pagePosts_1_1.value;
                var Content = paramorph.content[post.url];
                if (Content === undefined) {
                    break;
                }
                content.push({ post: post, Content: Content });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pagePosts_1_1 && !pagePosts_1_1.done && (_a = pagePosts_1.return)) _a.call(pagePosts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return content;
    };
    Feed.prototype.onScroll = function () {
        if (this.needsMoreContent() && !this.isAtEnd() && !this.isLoading()) {
            this.loadNextBatch();
        }
    };
    Feed.prototype.onContent = function () {
        if (!this.isLoading()) {
            // not loaded by us
            return;
        }
        var loaded = this.state.loaded;
        var content = this.getContent();
        if (content.length > loaded) {
            this.setState(function (prev) { return (__assign({}, prev, { loaded: content.length })); });
        }
    };
    Feed.prototype.needsMoreContent = function () {
        var scrollY = window.scrollY, innerHeight = window.innerHeight;
        if (!this.loadTrigger) {
            return false;
        }
        var offsetTop = getOffsetTop(this.loadTrigger);
        return scrollY + innerHeight >= offsetTop;
    };
    Feed.prototype.isLoading = function () {
        var _a = this.state, loading = _a.loading, loaded = _a.loaded;
        return loading !== loaded;
    };
    Feed.prototype.maybeLoadInitialBatch = function () {
        var _this = this;
        var paramorph = this.context.paramorph;
        var loaded = this.state.loaded;
        var posts = this.props.posts;
        var content = this.getContent();
        if (content.length === loaded) {
            this.onScroll();
            return;
        }
        var pageOffset = this.getPageOffset();
        var loading = Math.min(posts.length - pageOffset, this.state.loading);
        this.setState(function (prev) { return (__assign({}, prev, { loading: loading, loaded: content.length })); }, function () {
            var pageOffset = _this.getPageOffset();
            var batch = posts.slice(pageOffset, pageOffset + loading);
            batch.map(function (post) { return paramorph.loadContent(post.url); });
        });
    };
    Feed.prototype.loadNextBatch = function () {
        var _this = this;
        var _a = this.context, paramorph = _a.paramorph, post = _a.post;
        var _b = this.props, posts = _b.posts, _c = _b.batchSize, batchSize = _c === void 0 ? DEFAULT_BATCH_SIZE : _c;
        var loading = this.state.loading;
        var nextLoading = Math.min(loading + batchSize, posts.length);
        this.setState(function (prev) { return (__assign({}, prev, { loading: nextLoading })); }, function () {
            var pageOffset = _this.getPageOffset();
            var batch = posts.slice(pageOffset + loading, pageOffset + nextLoading);
            batch.map(function (post) { return paramorph.loadContent(post.url); });
        });
    };
    Feed.prototype.isAtEnd = function () {
        var loading = this.state.loading;
        var posts = this.props.posts;
        return loading === posts.length;
    };
    Feed.prototype.isOnFirstPage = function () {
        return this.getPageNumber() === 0;
    };
    Feed.prototype.isOnLastPage = function () {
        return this.getPageNumber() === this.getLastPageNumber();
    };
    Feed.prototype.getPageNumber = function () {
        var pathParams = this.context.pathParams;
        // pages in url are numbered starting from 1
        var pageNumber = pathParams.get('pageNumber') || '-1-';
        return Number.parseInt(pageNumber.replace(/[^\d]+/g, '')) - 1;
    };
    Feed.prototype.getLastPageNumber = function () {
        var posts = this.props.posts;
        var pageSize = this.getPageSize();
        return Math.round(posts.length / pageSize);
    };
    Feed.prototype.getPageSize = function () {
        var _a = this.props.preloadSize, preloadSize = _a === void 0 ? DEFAULT_PRELOAD_SIZE : _a;
        return preloadSize;
    };
    Feed.prototype.getPageOffset = function () {
        var pageSize = this.getPageSize();
        var pageNumber = this.getPageNumber();
        var offset = pageSize * pageNumber;
        return offset;
    };
    Feed.prototype.getNextUrl = function () {
        var _a = this.context, pathParams = _a.pathParams, post = _a.post;
        // pages in url are numbered starting from 1
        var pageNumber = this.getPageNumber() + 1;
        if (pageNumber === 2) {
            return post.url;
        }
        else {
            return this.createUrl(pageNumber - 1);
        }
    };
    Feed.prototype.getPreviousUrl = function () {
        var pathParams = this.context.pathParams;
        // pages in url are numbered starting from 1
        var pageNumber = this.getPageNumber() + 1;
        return this.createUrl(pageNumber + 1);
    };
    Feed.prototype.createUrl = function (pageNumber) {
        var post = this.context.post;
        return post.pathSpec.replace(":" + PAGE_PATH_PARAM + PAGE_PARAM_FORMAT + "?", "-" + pageNumber + "-");
    };
    Feed.prototype.hasPathParam = function () {
        var post = this.context.post;
        return post.pathSpec.indexOf(":" + PAGE_PATH_PARAM + PAGE_PARAM_FORMAT + "?/") !== -1;
    };
    return Feed;
}(paramorph_1.PureComponent));
exports.Feed = Feed;
exports.default = Feed;
function getOffsetTop(elem) {
    var offsetParent = elem.offsetParent;
    var parentOffset = (offsetParent ? getOffsetTop(offsetParent) : 0);
    return elem.offsetTop + parentOffset;
}


/***/ }),

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
//# sourceMappingURL=1-2c8dd3708c831106a595.bundle.js.map