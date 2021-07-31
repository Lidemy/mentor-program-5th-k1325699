var commentPlugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "addComments": () => (/* binding */ addComments)
/* harmony export */ });
/* eslint-env jquery */
function getComments(apiUrl, siteKey, before, cb) {
  var url = "".concat(apiUrl, "api_comments.php?site_key=").concat(siteKey);

  if (before) {
    url = "".concat(url, "&before=").concat(before);
  }

  $.ajax({
    url: url
  }).always(function (data) {
    cb(data);
  });
}
function addComments(apiUrl, data, cb) {
  $.ajax({
    type: 'POST',
    url: "".concat(apiUrl, "api_add_comment.php"),
    data: data
  }).always(function (data) {
    cb(data);
  });
}

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForm": () => (/* binding */ getForm),
/* harmony export */   "cssTemplate": () => (/* binding */ cssTemplate)
/* harmony export */ });
function getForm(formClassName, commentsClassName, loadMoreClassName) {
  return "\n  <div>\n    <form action=\"api_add_comment.php\" method=\"POST\" class=\"".concat(formClassName, "\">\n    <div class=\"form-group\">\n      <label>\u66B1\u7A31</label>\n      <input type=\"text\" class=\"form-control\" name =\"nickname\">\n    </div>\n    <div class=\"form-group\">\n      <label>\u7559\u8A00\u5167\u5BB9</label>\n      <textarea class=\"form-control\" rows=\"3\" name=\"content\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">\u9001\u51FA</button>\n    </form>\n    <div class=\"").concat(commentsClassName, "\">\n    </div>\n    <div class=\"row button__row\">\n    <button type=\"button\" class=\"btn btn-primary col-2 offset-sm-5 ").concat(loadMoreClassName, "\">\u8F09\u5165\u66F4\u591A</button>\n  </div>");
}
var cssTemplate = "\n  .card,.data__bottom, .more-comment{\n    margin-top: 10px;\n  }\n";

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "appendCommentToDOM": () => (/* binding */ appendCommentToDOM),
/* harmony export */   "appendStyle": () => (/* binding */ appendStyle),
/* harmony export */   "nowDate": () => (/* binding */ nowDate)
/* harmony export */ });
function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function appendCommentToDOM(container, comment, isprepend) {
  var html = "\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">".concat(escape(comment.nickname), " <span class=\"text-secondary\">").concat(comment.created_at, "</span></h5>\n      <p class=\"card-text\">").concat(escape(comment.content), "</p>\n    </div>\n  </div>\n  ");

  if (isprepend) {
    container.prepend(html);
  } else {
    container.append(html);
  }
}
function appendStyle(cssTemplate) {
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(cssTemplate));
  document.head.appendChild(styleElement);
}
function nowDate() {
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-env jquery */

/* eslint-disable import/prefer-default-export */



function init(options) {
  var siteKey = '';
  var apiUrl = '';
  var containerElement = null;
  var before = null;
  var isClicked = false;
  siteKey = options.siteKey;
  apiUrl = options.apiUrl;
  var loadMoreClassName = "".concat(siteKey, "-load-more");
  var commentsClassName = "".concat(siteKey, "-comments");
  var loadMoreSelector = ".".concat(loadMoreClassName);
  var commentsSelector = ".".concat(commentsClassName);
  var formClassName = "".concat(siteKey, "-add-comment-form");
  var formSelector = ".".concat(formClassName);
  containerElement = $(options.containerSelector);
  containerElement.append((0,_templates__WEBPACK_IMPORTED_MODULE_2__.getForm)(formClassName, commentsClassName, loadMoreClassName));
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendStyle)(_templates__WEBPACK_IMPORTED_MODULE_2__.cssTemplate);
  $(formSelector).submit(function (e) {
    e.preventDefault();
    var nicknameDOM = $("".concat(formSelector, " input[name=nickname]"));
    var contentDOM = $("".concat(formSelector, " textarea[name=content]"));
    var newComment = {
      site_key: siteKey,
      nickname: nicknameDOM.val(),
      content: contentDOM.val(),
      created_at: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.nowDate)()
    };
    if (isClicked) return;
    isClicked = true;
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.addComments)(apiUrl, newComment, function (data) {
      if (!nicknameDOM.val() || !contentDOM.val()) {
        alert('資料不齊全');
        return;
      }

      if (!data.ok) {
        alert(data.message);
        return;
      }

      nicknameDOM.val('');
      contentDOM.val('');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendCommentToDOM)($(commentsSelector), newComment, true);
      isClicked = false;
    });
  }); // 拿到留言

  (0,_api__WEBPACK_IMPORTED_MODULE_0__.getComments)(apiUrl, siteKey, before, function (data) {
    if (!data.ok) {
      alert(data.message);
      return;
    }

    var comments = data.discussions;

    var _iterator = _createForOfIteratorHelper(comments),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var comment = _step.value;
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendCommentToDOM)($(commentsSelector), comment);
        before = comment.id;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }); // 查看更多

  $(loadMoreSelector).click(function (e) {
    e.preventDefault();
    if (isClicked) return;
    isClicked = true;
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.getComments)(apiUrl, siteKey, before, function (data) {
      if (!data.ok) {
        alert(data.message);
        return;
      }

      var comments = data.discussions;

      var _iterator2 = _createForOfIteratorHelper(comments),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var comment = _step2.value;
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendCommentToDOM)($(commentsSelector), comment);
          before = comment.id;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (comments.length < 5) {
        $(loadMoreSelector).parent().prop('outerHTML', '<p class="h5 text-center data__bottom">~已到底部~</p>');
      }

      isClicked = false;
    });
  });
}
})();

commentPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lbnRQbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tbWVudFBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29tbWVudFBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbW1lbnRQbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldENvbW1lbnRzIiwiYXBpVXJsIiwic2l0ZUtleSIsImJlZm9yZSIsImNiIiwidXJsIiwiJCIsImFqYXgiLCJhbHdheXMiLCJkYXRhIiwiYWRkQ29tbWVudHMiLCJ0eXBlIiwiZ2V0Rm9ybSIsImZvcm1DbGFzc05hbWUiLCJjb21tZW50c0NsYXNzTmFtZSIsImxvYWRNb3JlQ2xhc3NOYW1lIiwiY3NzVGVtcGxhdGUiLCJlc2NhcGUiLCJzdHIiLCJyZXBsYWNlIiwiYXBwZW5kQ29tbWVudFRvRE9NIiwiY29udGFpbmVyIiwiY29tbWVudCIsImlzcHJlcGVuZCIsImh0bWwiLCJuaWNrbmFtZSIsImNyZWF0ZWRfYXQiLCJjb250ZW50IiwicHJlcGVuZCIsImFwcGVuZCIsImFwcGVuZFN0eWxlIiwic3R5bGVFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJub3dEYXRlIiwidGltZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwiaW5pdCIsIm9wdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiaXNDbGlja2VkIiwibG9hZE1vcmVTZWxlY3RvciIsImNvbW1lbnRzU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJjb250YWluZXJTZWxlY3RvciIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5pY2tuYW1lRE9NIiwiY29udGVudERPTSIsIm5ld0NvbW1lbnQiLCJzaXRlX2tleSIsInZhbCIsImFsZXJ0Iiwib2siLCJtZXNzYWdlIiwiY29tbWVudHMiLCJkaXNjdXNzaW9ucyIsImlkIiwiY2xpY2siLCJsZW5ndGgiLCJwYXJlbnQiLCJwcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDQyxFQUE5QyxFQUFrRDtBQUN2RCxNQUFJQyxHQUFHLGFBQU1KLE1BQU4sdUNBQXlDQyxPQUF6QyxDQUFQOztBQUNBLE1BQUlDLE1BQUosRUFBWTtBQUNWRSxPQUFHLGFBQU1BLEdBQU4scUJBQW9CRixNQUFwQixDQUFIO0FBQ0Q7O0FBQ0RHLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQUVGLE9BQUcsRUFBSEE7QUFBRixHQUFQLEVBQ0dHLE1BREgsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDaEJMLE1BQUUsQ0FBQ0ssSUFBRCxDQUFGO0FBQ0QsR0FISDtBQUlEO0FBRU0sU0FBU0MsV0FBVCxDQUFxQlQsTUFBckIsRUFBNkJRLElBQTdCLEVBQW1DTCxFQUFuQyxFQUF1QztBQUM1Q0UsR0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEksUUFBSSxFQUFFLE1BREQ7QUFFTE4sT0FBRyxZQUFLSixNQUFMLHdCQUZFO0FBR0xRLFFBQUksRUFBSkE7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QjtBQUNEO0FBVDRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVOUMsR0FWVSxDQUFYLENBbEQ0QixDQTZENUI7O0FBQ0FuRSxHQUFDLENBQUNrRCxnQkFBRCxDQUFELENBQW9Ca0IsS0FBcEIsQ0FBMEIsVUFBQ2IsQ0FBRCxFQUFPO0FBQy9CQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJUCxTQUFKLEVBQWU7QUFDZkEsYUFBUyxHQUFFLElBQVg7QUFDQXZELHFEQUFXLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEIsVUFBQ00sSUFBRCxFQUFVO0FBQzdDLFVBQUksQ0FBQ0EsSUFBSSxDQUFDNEQsRUFBVixFQUFjO0FBQ1pELGFBQUssQ0FBQzNELElBQUksQ0FBQzZELE9BQU4sQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHOUQsSUFBSSxDQUFDK0QsV0FBdEI7O0FBTDZDLGtEQU12QkQsUUFOdUI7QUFBQTs7QUFBQTtBQU03QywrREFBZ0M7QUFBQSxjQUFyQmpELE9BQXFCO0FBQzlCRixvRUFBa0IsQ0FBQ2QsQ0FBQyxDQUFDbUQsZ0JBQUQsQ0FBRixFQUFzQm5DLE9BQXRCLENBQWxCO0FBQ0FuQixnQkFBTSxHQUFHbUIsT0FBTyxDQUFDbUQsRUFBakI7QUFDRDtBQVQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVU3QyxVQUFJRixRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJyRSxTQUFDLENBQUNrRCxnQkFBRCxDQUFELENBQW9Cb0IsTUFBcEIsR0FBNkJDLElBQTdCLENBQWtDLFdBQWxDLEVBQStDLG1EQUEvQztBQUNEOztBQUNEdEIsZUFBUyxHQUFHLEtBQVo7QUFDRCxLQWRVLENBQVg7QUFlRCxHQW5CRDtBQW9CRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGpxdWVyeSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWVudHMoYXBpVXJsLCBzaXRlS2V5LCBiZWZvcmUsIGNiKSB7XHJcbiAgbGV0IHVybCA9IGAke2FwaVVybH1hcGlfY29tbWVudHMucGhwP3NpdGVfa2V5PSR7c2l0ZUtleX1gXHJcbiAgaWYgKGJlZm9yZSkge1xyXG4gICAgdXJsID0gYCR7dXJsfSZiZWZvcmU9JHtiZWZvcmV9YFxyXG4gIH1cclxuICAkLmFqYXgoeyB1cmwgfSlcclxuICAgIC5hbHdheXMoKGRhdGEpID0+IHtcclxuICAgICAgY2IoZGF0YSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50cyhhcGlVcmwsIGRhdGEsIGNiKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogYCR7YXBpVXJsfWFwaV9hZGRfY29tbWVudC5waHBgLFxyXG4gICAgZGF0YVxyXG4gIH0pLmFsd2F5cygoZGF0YSkgPT4ge1xyXG4gICAgY2IoZGF0YSlcclxuICB9KVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtKGZvcm1DbGFzc05hbWUsIGNvbW1lbnRzQ2xhc3NOYW1lLCBsb2FkTW9yZUNsYXNzTmFtZSkge1xyXG4gIHJldHVybiBgXHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIGFjdGlvbj1cImFwaV9hZGRfY29tbWVudC5waHBcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3M9XCIke2Zvcm1DbGFzc05hbWV9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWw+5pqx56ixPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lID1cIm5pY2tuYW1lXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbD7nlZnoqIDlhaflrrk8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiM1wiIG5hbWU9XCJjb250ZW50XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj7pgIHlh7o8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCIke2NvbW1lbnRzQ2xhc3NOYW1lfVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGJ1dHRvbl9fcm93XCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBjb2wtMiBvZmZzZXQtc20tNSAke2xvYWRNb3JlQ2xhc3NOYW1lfVwiPui8ieWFpeabtOWkmjwvYnV0dG9uPlxyXG4gIDwvZGl2PmBcclxufVxyXG5leHBvcnQgY29uc3QgY3NzVGVtcGxhdGUgPSBgXHJcbiAgLmNhcmQsLmRhdGFfX2JvdHRvbSwgLm1vcmUtY29tbWVudHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBlc2NhcGUoc3RyKSB7XHJcbiAgcmV0dXJuIHN0clxyXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuICAgIC5yZXBsYWNlKC8nL2csICcmIzAzOTsnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29tbWVudFRvRE9NKGNvbnRhaW5lciwgY29tbWVudCwgaXNwcmVwZW5kKSB7XHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtlc2NhcGUoY29tbWVudC5uaWNrbmFtZSl9IDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj4ke2NvbW1lbnQuY3JlYXRlZF9hdH08L3NwYW4+PC9oNT5cclxuICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ke2VzY2FwZShjb21tZW50LmNvbnRlbnQpfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxuICBpZiAoaXNwcmVwZW5kKSB7XHJcbiAgICBjb250YWluZXIucHJlcGVuZChodG1sKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGh0bWwpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU3R5bGUoY3NzVGVtcGxhdGUpIHtcclxuICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXHJcbiAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1RlbXBsYXRlKSlcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vd0RhdGUoKSB7XHJcbiAgY29uc3QgdGltZSA9IG5ldyBEYXRlKClcclxuICBsZXQgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKVxyXG4gIGxldCBtb250aCA9IHRpbWUuZ2V0TW9udGgoKSArIDFcclxuICBsZXQgZGF5ID0gdGltZS5nZXREYXRlKClcclxuICBsZXQgaG91ciA9IHRpbWUuZ2V0SG91cnMoKVxyXG4gIGxldCBtaW51dGUgPSB0aW1lLmdldE1pbnV0ZXMoKVxyXG4gIGxldCBzZWNvbmQgPSB0aW1lLmdldFNlY29uZHMoKVxyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YFxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWVudiBqcXVlcnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgeyBnZXRDb21tZW50cywgYWRkQ29tbWVudHMgfSBmcm9tICcuL2FwaSdcclxuaW1wb3J0IHsgYXBwZW5kQ29tbWVudFRvRE9NLCBhcHBlbmRTdHlsZSwgbm93RGF0ZSB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IGdldEZvcm0sIGNzc1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XHJcbiAgbGV0IHNpdGVLZXkgPSAnJ1xyXG4gIGxldCBhcGlVcmwgPSAnJ1xyXG4gIGxldCBjb250YWluZXJFbGVtZW50ID0gbnVsbFxyXG4gIGxldCBiZWZvcmUgPSBudWxsXHJcbiAgbGV0IGlzQ2xpY2tlZCA9IGZhbHNlXHJcblxyXG4gIHNpdGVLZXkgPSBvcHRpb25zLnNpdGVLZXlcclxuICBhcGlVcmwgPSBvcHRpb25zLmFwaVVybFxyXG5cclxuICBjb25zdCBsb2FkTW9yZUNsYXNzTmFtZSA9IGAke3NpdGVLZXl9LWxvYWQtbW9yZWBcclxuICBjb25zdCBjb21tZW50c0NsYXNzTmFtZSA9IGAke3NpdGVLZXl9LWNvbW1lbnRzYFxyXG4gIGNvbnN0IGxvYWRNb3JlU2VsZWN0b3IgPSBgLiR7bG9hZE1vcmVDbGFzc05hbWV9YFxyXG4gIGNvbnN0IGNvbW1lbnRzU2VsZWN0b3IgPSBgLiR7Y29tbWVudHNDbGFzc05hbWV9YFxyXG4gIGNvbnN0IGZvcm1DbGFzc05hbWUgPSBgJHtzaXRlS2V5fS1hZGQtY29tbWVudC1mb3JtYFxyXG4gIGNvbnN0IGZvcm1TZWxlY3RvciA9IGAuJHtmb3JtQ2xhc3NOYW1lfWBcclxuXHJcbiAgY29udGFpbmVyRWxlbWVudCA9ICQob3B0aW9ucy5jb250YWluZXJTZWxlY3RvcilcclxuICBjb250YWluZXJFbGVtZW50LmFwcGVuZChnZXRGb3JtKGZvcm1DbGFzc05hbWUsIGNvbW1lbnRzQ2xhc3NOYW1lLCBsb2FkTW9yZUNsYXNzTmFtZSkpXHJcbiAgYXBwZW5kU3R5bGUoY3NzVGVtcGxhdGUpXHJcblxyXG4gICQoZm9ybVNlbGVjdG9yKS5zdWJtaXQoKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgbmlja25hbWVET00gPSAkKGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbbmFtZT1uaWNrbmFtZV1gKVxyXG4gICAgY29uc3QgY29udGVudERPTSA9ICQoYCR7Zm9ybVNlbGVjdG9yfSB0ZXh0YXJlYVtuYW1lPWNvbnRlbnRdYClcclxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgIHNpdGVfa2V5OiBzaXRlS2V5LFxyXG4gICAgICBuaWNrbmFtZTogbmlja25hbWVET00udmFsKCksXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRET00udmFsKCksXHJcbiAgICAgIGNyZWF0ZWRfYXQ6IG5vd0RhdGUoKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQ2xpY2tlZCkgcmV0dXJuXHJcbiAgICBpc0NsaWNrZWQgPXRydWVcclxuICAgIGFkZENvbW1lbnRzKGFwaVVybCwgbmV3Q29tbWVudCwgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKCFuaWNrbmFtZURPTS52YWwoKSB8fCFjb250ZW50RE9NLnZhbCgpKSB7XHJcbiAgICAgICAgYWxlcnQoJ+izh+aWmeS4jem9iuWFqCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIG5pY2tuYW1lRE9NLnZhbCgnJylcclxuICAgICAgY29udGVudERPTS52YWwoJycpXHJcbiAgICAgIGFwcGVuZENvbW1lbnRUb0RPTSgkKGNvbW1lbnRzU2VsZWN0b3IpLCBuZXdDb21tZW50LCB0cnVlKVxyXG4gICAgICBpc0NsaWNrZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAvLyDmi7/liLDnlZnoqIBcclxuICBnZXRDb21tZW50cyhhcGlVcmwsIHNpdGVLZXksIGJlZm9yZSwgKGRhdGEpID0+IHtcclxuICAgIGlmICghZGF0YS5vaykge1xyXG4gICAgICBhbGVydChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgY29tbWVudHMgPSBkYXRhLmRpc2N1c3Npb25zXHJcbiAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29tbWVudHMpIHtcclxuICAgICAgYXBwZW5kQ29tbWVudFRvRE9NKCQoY29tbWVudHNTZWxlY3RvciksIGNvbW1lbnQpXHJcbiAgICAgIGJlZm9yZSA9IGNvbW1lbnQuaWRcclxuICAgIH1cclxuICB9KVxyXG4gIC8vIOafpeeci+abtOWkmlxyXG4gICQobG9hZE1vcmVTZWxlY3RvcikuY2xpY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKGlzQ2xpY2tlZCkgcmV0dXJuXHJcbiAgICBpc0NsaWNrZWQgPXRydWVcclxuICAgIGdldENvbW1lbnRzKGFwaVVybCwgc2l0ZUtleSwgYmVmb3JlLCAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY29tbWVudHMgPSBkYXRhLmRpc2N1c3Npb25zXHJcbiAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBjb21tZW50cykge1xyXG4gICAgICAgIGFwcGVuZENvbW1lbnRUb0RPTSgkKGNvbW1lbnRzU2VsZWN0b3IpLCBjb21tZW50KVxyXG4gICAgICAgIGJlZm9yZSA9IGNvbW1lbnQuaWRcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tbWVudHMubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICQobG9hZE1vcmVTZWxlY3RvcikucGFyZW50KCkucHJvcCgnb3V0ZXJIVE1MJywgJzxwIGNsYXNzPVwiaDUgdGV4dC1jZW50ZXIgZGF0YV9fYm90dG9tXCI+fuW3suWIsOW6lemDqH48L3A+JylcclxuICAgICAgfVxyXG4gICAgICBpc0NsaWNrZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=