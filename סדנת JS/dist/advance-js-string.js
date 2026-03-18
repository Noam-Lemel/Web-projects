"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//drill 01
// my Fixed solution
var myIncludes = function myIncludes(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  for (var i = position; i < str.length; i++) {
    var found = true;
    for (var j = 0; j < strSearched.length - strSearched.length; j++) {
      if (str[i + j] !== strSearched[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
};
// Arie's Solution
var myIncludes2 = function myIncludes2(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i2 = 0;
  for (var i = position; i < str.length; i++) {
    if (str[i] !== strSearched[i2]) {
      i -= i2;
      i2 = 0;
      continue;
    }
    if (i2 === strSearched.length - 1) return true;
    i2++;
  }
  return false;
};
var strOut = "aaac";
var strIn = "aac";
console.log(myIncludes2(strOut, strIn));

//drill 02
//my fixed solution
var myIndexOf = function myIndexOf(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  for (var i = position; i < str.length; i++) {
    for (var j = 0; j < strSearched.length; j++) {
      if (str[i + j] !== strSearched[j]) {
        break;
      }
      if (j === strSearched.length - 1) return i;
    }
  }
  return -1;
};
strOut = "HHHHHGGFDaaac";
strIn = "aac";
console.log(myIndexOf(strOut, strIn));

//Arie's Solution
var myIndexOf2 = function myIndexOf2(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i2 = 0;
  for (var i = position; i < str.length; i++) {
    if (str[i] !== strSearched[i2]) {
      i -= i2;
      i2 = 0;
      continue;
    }
    if (i2 === strSearched.length - 1) return i - i2;
    i2++;
  }
  return -1;
};
strOut = "HHHHHGGFDaaacknvknavaac";
strIn = "aac";
console.log(myIndexOf2(strOut, strIn));

//drill 03
//my Fixed solution
var myLastIndexOf = function myLastIndexOf(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - 1;
  for (var i = position; i >= 0; i--) {
    for (var j = 0; j < strSearched.length; j++) {
      if (str[i + j] !== strSearched[j]) break;
      if (j === strSearched.length - 1) return i;
    }
  }
  return -1;
};
strOut = "HHHHHGGFDaaacknvknavaac";
strIn = "aac";
console.log(myLastIndexOf(strOut, strIn));

//Arie's Solution
var myLastIndexOf2 = function myLastIndexOf2(str, strSearched) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i2 = strSearched.length - 1;
  var savedIndex;
  for (var i = str.length - 1; i >= position; i--) {
    if (i2 === strSearched.length - 1) savedIndex = i;
    if (str[i] !== strSearched[i2]) {
      i = savedIndex;
      i2 = strSearched.length - 1;
      continue;
    }
    if (i2 === 0) return i;
    i2--;
  }
  return -1;
};
strOut = "ggg aac aax";
strIn = "aac";
console.log(myLastIndexOf2(strOut, strIn));

//drill 04
var mySlice = function mySlice(str) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var endIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length;
  var result = '';
  if (startIndex > str.length - 1) return result;
  endIndex = endIndex > str.length ? str.length : endIndex;
  for (var i = startIndex; i < endIndex; i++) result += str[i];
  return result;
};
console.log(mySlice("my name is noam", 3, 7));
console.log("my name is noam".slice(3, 7));

//drill 05
//regular selution
var myCounter = function myCounter(str, strSearched) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    var found = true;
    for (var j = 0; j < strSearched.length; j++) {
      if (str[i + j] !== strSearched[j]) {
        found = false;
        break;
      }
    }
    if (found) result++;
  }
  return result;
};
console.log(myCounter('my name is noam', 'm'));

//Arie's regular selution
var arieCounter = function arieCounter(str, strSearched) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    i = str.indexOf(strSearched, i);
    if (i === -1) return 0;
    result++;
  }
  return result;
};
console.log(arieCounter('my name is noam', 'm'));

//Recorsive Solution
var _myCounterRecorsive = function myCounterRecorsive(str, strSearched) {
  if (str.length < strSearched.length) return 0;
  if (str.slice(0, strSearched.length) === strSearched) return 1 + _myCounterRecorsive(str.slice(1), strSearched);else return 0 + _myCounterRecorsive(str.slice(1), strSearched);
};
console.log(_myCounterRecorsive('my name is noam', 'm'));

//arie's Recorsive Solution
var _arieCounterRecorsive = function arieCounterRecorsive(str, strSearched) {
  var i = str.indexOf(strSearched);
  if (i === -1) return 0;
  return 1 + _arieCounterRecorsive(str.slice(i + 1), strSearched);
};
console.log(_arieCounterRecorsive('my name is noam', 'm'));

//drill 06
var myReplace = function myReplace(str, strToReplace, strReplacment) {
  var i = str.indexOf(strToReplace);
  if (i === -1) return str;
  return str.slice(0, i).concat(strReplacment, str.slice(i + strToReplace.length));
};

//drill 6.5
//regular selution
var myReplaceAll = function myReplaceAll(str, strToReplace, strReplacment) {
  var result = str;
  var i = result.indexOf(strToReplace);
  while (i !== -1) {
    var st1 = result.slice(0, i);
    var st2 = result.slice(i + strToReplace.length);
    result = st1.concat(strReplacment, st2);
    i = result.indexOf(strToReplace, i + strReplacment.length);
  }
  return result;
};
console.log(myReplaceAll("my name is noam and noam and noam", 'noam', 'chen'));

//Arie's regular selution
var arieReplaceAll = function arieReplaceAll(str, strToReplace, strReplacment) {
  while (str.includes(strToReplace)) str = str.replace(strToReplace, strReplacment);
  return str;
};
//Recorsive Solution
var _myReplaceAllRec = function myReplaceAllRec(str, strToReplace, strReplacment) {
  var i = str.indexOf(strToReplace);
  if (i === -1) return str;
  var str1 = str.slice(0, i);
  return str1.concat(strReplacment, _myReplaceAllRec(str.slice(i + strToReplace.length), strToReplace, strReplacment));
};
console.log(_myReplaceAllRec("my name is noam and noam and noam", 'noam', 'chen'));

//Arie's Recorsive Solution
var _arieReplaceAllRec = function arieReplaceAllRec(str, strToReplace, strReplacment) {
  if (!str.includes(strToReplace)) return str;
  return _arieReplaceAllRec(str.replace(strToReplace, strReplacment), strToReplace, strReplacment);
};
console.log("my name is noam and noam and noam".replaceAll('noam', 'chen'));

//gemini's drill
var _myMax = function myMax(arr) {
  if (arr.length < 2) return arr[0];
  var current = arr[0];
  var maxOfRest = _myMax(arr.slice(1));
  return current > maxOfRest ? current : maxOfRest;
};
console.log(_myMax([2, 8, 3]));

//gemini's drill 02
var _myPower = function myPower(base, exponent) {
  if (exponent === 0) return 1;
  return base * _myPower(base, exponent - 1);
};
console.log(_myPower(2, 3));

//gemini's drill 03
var _mySumDigits = function mySumDigits(num) {
  if (num < 10) return num;
  var lastNumber = num % 10;
  num = parseInt(num / 10);
  return lastNumber + _mySumDigits(num);
};
console.log(_mySumDigits(126));

//drill 07
//regular selution
var mySplit = function mySplit(str, separator) {
  if (separator == null) {
    return [str];
  }
  var result = [];
  if (separator === '') {
    for (var i = 0; i < str.length; i++) result.push(str[i]);
    return result;
  }
  var currentIndex = 0;
  var lastIndex = 0;
  while (currentIndex !== -1) {
    currentIndex = str.indexOf(separator, lastIndex);
    if (currentIndex === -1) {
      result.push(str.slice(lastIndex));
      break;
    }
    result.push(str.slice(lastIndex, currentIndex));
    lastIndex = currentIndex + separator.length;
  }
  return result;
};
console.log(mySplit("my name is noam", " "));

//Recorsive Solution
var _mySplitRec = function mySplitRec(str, separator) {
  if (separator == null) return [str];
  if (separator === '') {
    if (str === '') return [];
    return [str[0]].concat(_mySplitRec(str.slice(1), separator));
  }
  var separatorIndex = str.indexOf(separator);
  if (separatorIndex === -1) return [str];
  return [str.slice(0, separatorIndex)].concat(_mySplitRec(str.slice(separatorIndex + separator.length), separator)).filter(function (str) {
    return str !== '';
  });
};
console.log(_mySplitRec("my name is noam", " "));

//drill 08
//first try
var myPermutation = function myPermutation(str) {
  var result = new Set();
  var _getCombination = function getCombination(remain, current) {
    if (remain.length === 0) result.add(current);
    for (var i = 0; i < remain.length; i++) {
      var _char = remain[i];
      var nextRemain = remain.slice(0, i) + remain.slice(i + 1);
      _getCombination(nextRemain, current + _char);
    }
  };
  _getCombination(str, "");
  return _toConsumableArray(result);
};
console.log(myPermutation('abc'));
//arie's solution
var ariePermutation = function ariePermutation(str) {
  var strChar = str.split('');
  var result = new Set();
  var _getEnumerations = function getEnumerations(chars, enumaration) {
    if (chars.length === 0) result.add(enumaration);else {
      for (var i = 0; i < chars.length; i++) {
        var newChars = _toConsumableArray(chars);
        var _char2 = newChars.splice(i, 1);
        var newenumaration = enumaration + _char2;
        _getEnumerations(newChars, newenumaration);
      }
    }
  };
  _getEnumerations(strChar, "");
  return _toConsumableArray(result);
};
console.log(ariePermutation('abc'));