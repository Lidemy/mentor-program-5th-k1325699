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
  }).done(function (data) {
    cb(data);
  });
}
function addComments(apiUrl, data, cb) {
  $.ajax({
    type: 'POST',
    url: "".concat(apiUrl, "api_add_comment.php"),
    data: data
  }).done(function (data) {
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
/* harmony export */   "appendStyle": () => (/* binding */ appendStyle)
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
      content: contentDOM.val()
    };
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.addComments)(apiUrl, newComment, function (data) {
      if (!data.ok) {
        alert(data.message);
        return;
      }

      nicknameDOM.val('');
      contentDOM.val('');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendCommentToDOM)($(commentsSelector), newComment, true);
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
    });
  });
}
})();

commentPlugin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lbnRQbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tbWVudFBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29tbWVudFBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbW1lbnRQbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21tZW50UGx1Z2luLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldENvbW1lbnRzIiwiYXBpVXJsIiwic2l0ZUtleSIsImJlZm9yZSIsImNiIiwidXJsIiwiJCIsImFqYXgiLCJkb25lIiwiZGF0YSIsImFkZENvbW1lbnRzIiwidHlwZSIsImdldEZvcm0iLCJmb3JtQ2xhc3NOYW1lIiwiY29tbWVudHNDbGFzc05hbWUiLCJsb2FkTW9yZUNsYXNzTmFtZSIsImNzc1RlbXBsYXRlIiwiZXNjYXBlIiwic3RyIiwicmVwbGFjZSIsImFwcGVuZENvbW1lbnRUb0RPTSIsImNvbnRhaW5lciIsImNvbW1lbnQiLCJpc3ByZXBlbmQiLCJodG1sIiwibmlja25hbWUiLCJjcmVhdGVkX2F0IiwiY29udGVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJhcHBlbmRTdHlsZSIsInN0eWxlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiaW5pdCIsIm9wdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwibG9hZE1vcmVTZWxlY3RvciIsImNvbW1lbnRzU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJjb250YWluZXJTZWxlY3RvciIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5pY2tuYW1lRE9NIiwiY29udGVudERPTSIsIm5ld0NvbW1lbnQiLCJzaXRlX2tleSIsInZhbCIsIm9rIiwiYWxlcnQiLCJtZXNzYWdlIiwiY29tbWVudHMiLCJkaXNjdXNzaW9ucyIsImlkIiwiY2xpY2siLCJsZW5ndGgiLCJwYXJlbnQiLCJwcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDQyxFQUE5QyxFQUFrRDtBQUN2RCxNQUFJQyxHQUFHLGFBQU1KLE1BQU4sdUNBQXlDQyxPQUF6QyxDQUFQOztBQUNBLE1BQUlDLE1BQUosRUFBWTtBQUNWRSxPQUFHLGFBQU1BLEdBQU4scUJBQW9CRixNQUFwQixDQUFIO0FBQ0Q7O0FBQ0RHLEdBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQUVGLE9BQUcsRUFBSEE7QUFBRixHQUFQLEVBQ0dHLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZEwsTUFBRSxDQUFDSyxJQUFELENBQUY7QUFDRCxHQUhIO0FBSUQ7QUFFTSxTQUFTQyxXQUFULENBQXFCVCxNQUFyQixFQUE2QlEsSUFBN0IsRUFBbUNMLEVBQW5DLEVBQXVDO0FBQzVDRSxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMSSxRQUFJLEVBQUUsTUFERDtBQUVMTixPQUFHLFlBQUtKLE1BQUwsd0JBRkU7QUFHTFEsUUFBSSxFQUFKQTtBQUhLLEdBQVAsRUFJR0QsSUFKSCxDQUlRLFVBQUNDLElBQUQsRUFBVTtBQUNoQkwsTUFBRSxDQUFDSyxJQUFELENBQUY7QUFDRCxHQU5EO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJNLFNBQVNHLE9BQVQsQ0FBaUJDLGFBQWpCLEVBQWdDQyxpQkFBaEMsRUFBbURDLGlCQUFu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QWtCLENBQUNkLENBQUMsQ0FBQ21DLGdCQUFELENBQUYsRUFBc0JuQixPQUF0QixDQUFsQjtBQUNBbkIsY0FBTSxHQUFHbUIsT0FBTyxDQUFDbUMsRUFBakI7QUFDRDtBQVQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVTlDLEdBVlUsQ0FBWCxDQXpDNEIsQ0FvRDVCOztBQUNBbkQsR0FBQyxDQUFDa0MsZ0JBQUQsQ0FBRCxDQUFvQmtCLEtBQXBCLENBQTBCLFVBQUNiLENBQUQsRUFBTztBQUMvQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0E5QyxxREFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCLFVBQUNNLElBQUQsRUFBVTtBQUM3QyxVQUFJLENBQUNBLElBQUksQ0FBQzJDLEVBQVYsRUFBYztBQUNaQyxhQUFLLENBQUM1QyxJQUFJLENBQUM2QyxPQUFOLENBQUw7QUFDQTtBQUNEOztBQUNELFVBQU1DLFFBQVEsR0FBRzlDLElBQUksQ0FBQytDLFdBQXRCOztBQUw2QyxrREFNdkJELFFBTnVCO0FBQUE7O0FBQUE7QUFNN0MsK0RBQWdDO0FBQUEsY0FBckJqQyxPQUFxQjtBQUM5QkYsb0VBQWtCLENBQUNkLENBQUMsQ0FBQ21DLGdCQUFELENBQUYsRUFBc0JuQixPQUF0QixDQUFsQjtBQUNBbkIsZ0JBQU0sR0FBR21CLE9BQU8sQ0FBQ21DLEVBQWpCO0FBQ0Q7QUFUNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVN0MsVUFBSUYsUUFBUSxDQUFDSSxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCckQsU0FBQyxDQUFDa0MsZ0JBQUQsQ0FBRCxDQUFvQm9CLE1BQXBCLEdBQTZCQyxJQUE3QixDQUFrQyxXQUFsQyxFQUErQyxtREFBL0M7QUFDRDtBQUNGLEtBYlUsQ0FBWDtBQWNELEdBaEJEO0FBaUJELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYganF1ZXJ5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tZW50cyhhcGlVcmwsIHNpdGVLZXksIGJlZm9yZSwgY2IpIHtcclxuICBsZXQgdXJsID0gYCR7YXBpVXJsfWFwaV9jb21tZW50cy5waHA/c2l0ZV9rZXk9JHtzaXRlS2V5fWBcclxuICBpZiAoYmVmb3JlKSB7XHJcbiAgICB1cmwgPSBgJHt1cmx9JmJlZm9yZT0ke2JlZm9yZX1gXHJcbiAgfVxyXG4gICQuYWpheCh7IHVybCB9KVxyXG4gICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgY2IoZGF0YSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50cyhhcGlVcmwsIGRhdGEsIGNiKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogYCR7YXBpVXJsfWFwaV9hZGRfY29tbWVudC5waHBgLFxyXG4gICAgZGF0YVxyXG4gIH0pLmRvbmUoKGRhdGEpID0+IHtcclxuICAgIGNiKGRhdGEpXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybShmb3JtQ2xhc3NOYW1lLCBjb21tZW50c0NsYXNzTmFtZSwgbG9hZE1vcmVDbGFzc05hbWUpIHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSBhY3Rpb249XCJhcGlfYWRkX2NvbW1lbnQucGhwXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzPVwiJHtmb3JtQ2xhc3NOYW1lfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGxhYmVsPuaaseeosTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZSA9XCJuaWNrbmFtZVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWw+55WZ6KiA5YWn5a65PC9sYWJlbD5cclxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjNcIiBuYW1lPVwiY29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+6YCB5Ye6PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiJHtjb21tZW50c0NsYXNzTmFtZX1cIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBidXR0b25fX3Jvd1wiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgY29sLTIgb2Zmc2V0LXNtLTUgJHtsb2FkTW9yZUNsYXNzTmFtZX1cIj7ovInlhaXmm7TlpJo8L2J1dHRvbj5cclxuICA8L2Rpdj5gXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNzc1RlbXBsYXRlID0gYFxyXG4gIC5jYXJkLC5kYXRhX19ib3R0b20sIC5tb3JlLWNvbW1lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuYFxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZXNjYXBlKHN0cikge1xyXG4gIHJldHVybiBzdHJcclxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMwMzk7JylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbW1lbnRUb0RPTShjb250YWluZXIsIGNvbW1lbnQsIGlzcHJlcGVuZCkge1xyXG4gIGNvbnN0IGh0bWwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZXNjYXBlKGNvbW1lbnQubmlja25hbWUpfSA8c3BhbiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+JHtjb21tZW50LmNyZWF0ZWRfYXR9PC9zcGFuPjwvaDU+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHtlc2NhcGUoY29tbWVudC5jb250ZW50KX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgXHJcbiAgaWYgKGlzcHJlcGVuZCkge1xyXG4gICAgY29udGFpbmVyLnByZXBlbmQoaHRtbClcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChodG1sKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFN0eWxlKGNzc1RlbXBsYXRlKSB7XHJcbiAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xyXG4gIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZW1wbGF0ZSkpXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZW52IGpxdWVyeSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCB7IGdldENvbW1lbnRzLCBhZGRDb21tZW50cyB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgeyBhcHBlbmRDb21tZW50VG9ET00sIGFwcGVuZFN0eWxlIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgZ2V0Rm9ybSwgY3NzVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcclxuICBsZXQgc2l0ZUtleSA9ICcnXHJcbiAgbGV0IGFwaVVybCA9ICcnXHJcbiAgbGV0IGNvbnRhaW5lckVsZW1lbnQgPSBudWxsXHJcbiAgbGV0IGJlZm9yZSA9IG51bGxcclxuXHJcbiAgc2l0ZUtleSA9IG9wdGlvbnMuc2l0ZUtleVxyXG4gIGFwaVVybCA9IG9wdGlvbnMuYXBpVXJsXHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlQ2xhc3NOYW1lID0gYCR7c2l0ZUtleX0tbG9hZC1tb3JlYFxyXG4gIGNvbnN0IGNvbW1lbnRzQ2xhc3NOYW1lID0gYCR7c2l0ZUtleX0tY29tbWVudHNgXHJcbiAgY29uc3QgbG9hZE1vcmVTZWxlY3RvciA9IGAuJHtsb2FkTW9yZUNsYXNzTmFtZX1gXHJcbiAgY29uc3QgY29tbWVudHNTZWxlY3RvciA9IGAuJHtjb21tZW50c0NsYXNzTmFtZX1gXHJcbiAgY29uc3QgZm9ybUNsYXNzTmFtZSA9IGAke3NpdGVLZXl9LWFkZC1jb21tZW50LWZvcm1gXHJcbiAgY29uc3QgZm9ybVNlbGVjdG9yID0gYC4ke2Zvcm1DbGFzc05hbWV9YFxyXG5cclxuICBjb250YWluZXJFbGVtZW50ID0gJChvcHRpb25zLmNvbnRhaW5lclNlbGVjdG9yKVxyXG4gIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGdldEZvcm0oZm9ybUNsYXNzTmFtZSwgY29tbWVudHNDbGFzc05hbWUsIGxvYWRNb3JlQ2xhc3NOYW1lKSlcclxuICBhcHBlbmRTdHlsZShjc3NUZW1wbGF0ZSlcclxuXHJcbiAgJChmb3JtU2VsZWN0b3IpLnN1Ym1pdCgoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuaWNrbmFtZURPTSA9ICQoYCR7Zm9ybVNlbGVjdG9yfSBpbnB1dFtuYW1lPW5pY2tuYW1lXWApXHJcbiAgICBjb25zdCBjb250ZW50RE9NID0gJChgJHtmb3JtU2VsZWN0b3J9IHRleHRhcmVhW25hbWU9Y29udGVudF1gKVxyXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcclxuICAgICAgc2l0ZV9rZXk6IHNpdGVLZXksXHJcbiAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZURPTS52YWwoKSxcclxuICAgICAgY29udGVudDogY29udGVudERPTS52YWwoKVxyXG4gICAgfVxyXG4gICAgYWRkQ29tbWVudHMoYXBpVXJsLCBuZXdDb21tZW50LCAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbmlja25hbWVET00udmFsKCcnKVxyXG4gICAgICBjb250ZW50RE9NLnZhbCgnJylcclxuICAgICAgYXBwZW5kQ29tbWVudFRvRE9NKCQoY29tbWVudHNTZWxlY3RvciksIG5ld0NvbW1lbnQsIHRydWUpXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIC8vIOaLv+WIsOeVmeiogFxyXG4gIGdldENvbW1lbnRzKGFwaVVybCwgc2l0ZUtleSwgYmVmb3JlLCAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGRhdGEuZGlzY3Vzc2lvbnNcclxuICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBjb21tZW50cykge1xyXG4gICAgICBhcHBlbmRDb21tZW50VG9ET00oJChjb21tZW50c1NlbGVjdG9yKSwgY29tbWVudClcclxuICAgICAgYmVmb3JlID0gY29tbWVudC5pZFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgLy8g5p+l55yL5pu05aSaXHJcbiAgJChsb2FkTW9yZVNlbGVjdG9yKS5jbGljaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBnZXRDb21tZW50cyhhcGlVcmwsIHNpdGVLZXksIGJlZm9yZSwgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZGF0YS5kaXNjdXNzaW9uc1xyXG4gICAgICBmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29tbWVudHMpIHtcclxuICAgICAgICBhcHBlbmRDb21tZW50VG9ET00oJChjb21tZW50c1NlbGVjdG9yKSwgY29tbWVudClcclxuICAgICAgICBiZWZvcmUgPSBjb21tZW50LmlkXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAkKGxvYWRNb3JlU2VsZWN0b3IpLnBhcmVudCgpLnByb3AoJ291dGVySFRNTCcsICc8cCBjbGFzcz1cImg1IHRleHQtY2VudGVyIGRhdGFfX2JvdHRvbVwiPn7lt7LliLDlupXpg6h+PC9wPicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9