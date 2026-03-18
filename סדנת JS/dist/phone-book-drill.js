"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var addName = document.getElementById("add-name");
var phoneNumber = document.getElementById("add-number");
var addButton = document.getElementById("add-button");
var phoneBook = document.getElementById("phone-book");
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');
var searchResult = document.getElementById('search-result');
var sortButton = document.getElementById('sort-button');
var phoneBookList = new Map();
var isInOrder = true;
addButton.addEventListener('click', function () {
  var name = addName.value.toLowerCase();
  var number = phoneNumber.value;
  if (number.includes(' ')) {
    alert("the Phone Number can't contain space");
    return;
  }
  if (number.includes('-')) {
    number = number.replace("-", "");
  }
  var newSpot = document.createElement('div');
  newSpot.innerText = name.concat(": ", number);
  var reaseButton = document.createElement('button');
  reaseButton.innerHTML = "delete";
  reaseButton.addEventListener('click', function () {
    newSpot.remove();
    phoneBookList["delete"](name);
  });
  newSpot.appendChild(reaseButton);
  phoneBook.appendChild(newSpot);
  phoneBookList.set(name, number);
  addName.value = "";
  phoneNumber.value = "";
});
var updateSearchResult = function updateSearchResult() {
  searchResult.innerHTML = "";
  var list = _toConsumableArray(phoneBookList);
  var input = searchInput.value.toLowerCase();
  var searchList = list.filter(function (el) {
    return el[0].includes(input);
  }).sort(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
      a = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1),
      b = _ref4[0];
    if (isInOrder) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    } else {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    }
  });
  for (var i = 0; i < searchList.length; i++) {
    var newSpot = document.createElement('div');
    var name = searchList[i][0];
    var number = searchList[i][1];
    newSpot.innerText = name.concat(": ", number);
    searchResult.appendChild(newSpot);
  }
  searchInput.value = "";
};
searchButton.addEventListener('click', updateSearchResult);
sortButton.addEventListener('click', function () {
  isInOrder = !isInOrder;
  updateSearchResult();
});