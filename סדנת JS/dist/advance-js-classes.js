"use strict";

var PersonMaker = function PersonMaker(name, id) {
  this.name = name;
  this.id = id;
};
PersonMaker.prototype.toString = function () {
  return "name: ".concat(this.name, "; id:").concat(this.id);
};
var noam = new PersonMaker('Noam', '316525641');
console.log(noam.toString());
console.log(noam);

//drill 01
var Rectagle = function Rectagle(length, width) {
  this.length = length;
  this.width = width;
};
Rectagle.prototype.Area = function () {
  return this.length * this.width;
};
Rectagle.prototype.Circumference = function () {
  return 2 * this.length + this.width * 2;
};
Rectagle.prototype.toString = function () {
  return "length: ".concat(this.length, " width: ").concat(this.width);
};
var Square = function Square(length) {
  this.length = length;
  Rectagle.call(this, length, length);
};
Square.prototype = Object.create(Rectagle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});
Square.prototype.Circumference = function () {
  return this.length * 4;
};
Square.prototype.toString = function () {
  return "length: ".concat(this.length);
};
var rectagle = new Rectagle(4, 2);
var square = new Square(3);
console.log(square.toString());
console.log(rectagle.toString());