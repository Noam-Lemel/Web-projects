"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//first drill
var arr = [1, 2, 3];
var myForEach = function myForEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) callback(arr[i], i);
  }
};
var arrString = '';
myForEach(arr, function (el, i) {
  arrString += "".concat(i, ":").concat(el, "  ");
});
console.log('myForEach: ', arrString);

//second drill
var arr2 = [].concat(_toConsumableArray(arr), [4, 5, 6, 7, 8, 9, 10]);
var mySlice = function mySlice(arr) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr2.length;
  var slice = [];
  from = from > 0 ? from : 0;
  to = to > arr.length ? arr.length : to;
  for (var i = from; i < to; i++) {
    slice.push(arr[i]);
  }
  return slice;
};
console.log(mySlice(arr2, 2, 6));
console.log(mySlice(arr2, 5, 12));
console.log(mySlice(arr2, -2, 4));
console.log(mySlice(arr2));
console.log(arr);
arr = arr.concat(arr2, [19, 20, 21]);
console.log(arr);

//drill 03
var getOpositArray = function getOpositArray(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};
console.log(getOpositArray([1, 2, 3]));
var _getOpositArrayRecutsive = function getOpositArrayRecutsive(arr) {
  var result = _toConsumableArray(arr);
  if (result.length === 0 || result.length === 1) return result;
  var lastEl = result.pop();
  return [lastEl].concat(_getOpositArrayRecutsive(result));
};
console.log(_getOpositArrayRecutsive([1, 2, 3]));

//drill 04
var mySplice = function mySplice(arr, index, deleteNum) {
  var result = _toConsumableArray(arr);
  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }
  if (index > result.length) return result.concat(rest);
  if (deleteNum == null || rest.length === 0) {
    return result.slice(0, index);
  }
  if (deleteNum === 0) return result.slice(0, index).concat(rest, result.slice(index));
  result = result.slice(0, index).concat(rest, result.slice(index + deleteNum));
  return result;
};
console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 4, 40, 50, 60, 70));
console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 15, 40, 50, 60, 70));
console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, undefined, 40, 50, 60, 70));
console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 0, 40, 50, 60, 70));
console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 4));

// drill 05
var myFilter = function myFilter(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) result.push(arr[i]);
  }
  return result;
};
console.log(myFilter([1, 2, 3, 4], function (num) {
  if (num % 2 === 0) return true;
  return false;
}));

//drill 06
var hundredArr = [];
for (var i = 1; i <= 100; i++) hundredArr.push(i);
var isPrimeNumber = function isPrimeNumber(number) {
  if (number === 1) return false;
  for (var devider = 2; devider < number; devider++) {
    if (number % devider === 0) return false;
  }
  return true;
};
console.log('prime numbers : ', hundredArr.filter(isPrimeNumber));
//my Recutsive
var _isPrimeNumberRecutsive = function isPrimeNumberRecutsive(number) {
  var devider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (number < 2) return false;
  if (devider === number) return true;
  return number % devider === 0 ? false : _isPrimeNumberRecutsive(number, devider + 1);
};
console.log('prime numbers : ', hundredArr.filter(function (number) {
  return _isPrimeNumberRecutsive(number);
}));
//Arie's Recutsive
var _isPrimeNumberRecutsive2 = function isPrimeNumberRecutsive2(number, i, arr) {
  if (number < 2) return false;
  var devider = (arguments.length <= 3 ? 0 : arguments.length - 3) === 0 ? number - 1 : arguments.length <= 3 ? undefined : arguments[3];
  if (devider < 2) return true;
  return number % devider === 0 ? false : _isPrimeNumberRecutsive2(number, i, arr, devider - 1);
};
console.log('prime numbers : ', hundredArr.filter(_isPrimeNumberRecutsive2));

//drill 07
var myMap = function myMap(arr, callback) {
  var result = [];
  for (var _i = 0; _i < arr.length; _i++) result.push(callback(arr[_i]));
  return result;
};
console.log(myMap([2, 4, 6], function (num) {
  return Math.pow(num, 2);
}));

//drill 08
var sortLetters = function sortLetters(el2, el1) {
  return el1.localeCompare(el2);
};
console.log(['a', 'b', 'A', 'i', 'c', 'z', 'd'].sort(sortLetters));
var sortLetters2 = function sortLetters2(el2, el1) {
  if (el2 === el1) return 0;
  return el2.toLowerCase() > el1.toLowerCase() ? -1 : 1;
};
console.log(['a', 'b', 'A', 'i', 'c', 'z', 'd'].sort(sortLetters2));

//drill 09 
var myReduce = function myReduce(arr, callback, initialValue) {
  var index = initialValue == null ? 1 : 0;
  var result = initialValue == null ? arr[0] : initialValue;
  for (; index < arr.length; index++) {
    result = callback(result, arr[index]);
  }
  return result;
};
console.log(myReduce([1, 2, 3, 4], function (result, el) {
  return Math.pow(result, el);
}, 2));

//drill 10
var obgReducer = function obgReducer(result, arr) {
  result[arr[0]] = arr[1];
  return result;
};
var arrObj = [['a', 1], ['b', 2], ['c', 3]];
console.log(arrObj.reduce(obgReducer, {}));