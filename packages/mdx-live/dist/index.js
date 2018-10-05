"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withMDXComponents", {
  enumerable: true,
  get: function get() {
    return _mdxProvider.withMDXComponents;
  }
});
exports.MDXLiveProvider = exports.withMDXLive = exports.LiveCode = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLive = require("react-live");

var _tag = require("@mdx-js/tag");

var _mdxProvider = require("@mdx-js/tag/dist/mdx-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LiveCode = (0, _mdxProvider.withMDXComponents)(function (_ref) {
  var _ref$previewStyle = _ref.previewStyle,
      previewStyle = _ref$previewStyle === void 0 ? {} : _ref$previewStyle,
      _ref$editorStyle = _ref.editorStyle,
      editorStyle = _ref$editorStyle === void 0 ? {} : _ref$editorStyle,
      _ref$errorStyle = _ref.errorStyle,
      errorStyle = _ref$errorStyle === void 0 ? {} : _ref$errorStyle,
      _ref$previewProps = _ref.previewProps,
      previewProps = _ref$previewProps === void 0 ? {} : _ref$previewProps,
      _ref$editorProps = _ref.editorProps,
      editorProps = _ref$editorProps === void 0 ? {} : _ref$editorProps,
      _ref$errorProps = _ref.errorProps,
      errorProps = _ref$errorProps === void 0 ? {} : _ref$errorProps,
      components = _ref.components,
      scope = _ref.scope,
      props = _objectWithoutProperties(_ref, ["previewStyle", "editorStyle", "errorStyle", "previewProps", "editorProps", "errorProps", "components", "scope"]);

  return _react.default.createElement(_reactLive.LiveProvider, _extends({
    scope: _objectSpread({}, components, scope),
    style: _objectSpread({
      border: '1px solid #f3f3f9',
      borderRadius: 2,
      marginTop: '1em',
      marginBottom: '1em'
    }, props.style)
  }, props), _react.default.createElement(_reactLive.LivePreview, _extends({}, previewProps, {
    style: _objectSpread({
      padding: '1em'
    }, previewStyle)
  })), _react.default.createElement(_reactLive.LiveEditor, _extends({}, editorProps, {
    style: _objectSpread({
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      padding: '1em',
      margin: 0,
      backgroundColor: '#f6f6ff',
      overflowX: 'auto',
      outline: 'none'
    }, editorStyle)
  })), _react.default.createElement(_reactLive.LiveError, _extends({}, errorProps, {
    style: _objectSpread({
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      padding: '1em',
      overflowX: 'auto',
      color: 'white',
      backgroundColor: 'red'
    }, errorStyle)
  })));
});
exports.LiveCode = LiveCode;
LiveCode.defaultProps = {
  mountStylesheet: false,
  transformCode: function transformCode(src) {
    return "<React.Fragment>".concat(src, "</React.Fragment>");
  }
};
var REG = /language\-\.jsx/;

var withMDXLive = function withMDXLive(Fallback) {
  return function (_ref2) {
    var _ref2$match = _ref2.match,
        match = _ref2$match === void 0 ? REG : _ref2$match,
        children = _ref2.children,
        metaString = _ref2.metaString,
        props = _objectWithoutProperties(_ref2, ["match", "children", "metaString"]);

    var isLive = match.test(props.className);
    if (!isLive) return _react.default.createElement(Fallback, _extends({}, props, {
      children: children
    }));

    var code = _react.default.Children.toArray(children).join('\n');

    return _react.default.createElement(LiveCode, _extends({}, props, {
      code: code
    }));
  };
};

exports.withMDXLive = withMDXLive;

var MDXLiveProvider = function MDXLiveProvider(_ref3) {
  var components = _ref3.components,
      props = _objectWithoutProperties(_ref3, ["components"]);

  return _react.default.createElement(_tag.MDXProvider, _extends({
    components: _objectSpread({}, components, {
      pre: function pre(props) {
        return props.children;
      },
      code: withMDXLive('pre')
    })
  }, props));
};

exports.MDXLiveProvider = MDXLiveProvider;