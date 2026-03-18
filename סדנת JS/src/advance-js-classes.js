const PersonMaker=function(name,id){
    this.name=name;
    this.id=id;
}
PersonMaker.prototype.toString= function(){
    return `name: ${this.name}; id:${this.id}`;
}
let noam=new PersonMaker('Noam','316525641');
console.log(noam.toString());
console.log(noam);

//drill 01
const Rectagle=function(length,width){
    this.length=length;
    this.width=width;
}
Rectagle.prototype.Area=function(){
    return this.length*this.width;
}
Rectagle.prototype.Circumference=function(){
    return (2*this.length)+(this.width*2);
}
Rectagle.prototype.toString=function(){
    return `length: ${this.length} width: ${this.width}`;
}
const Square=function(length){
    this.length=length;
    Rectagle.call(this,length,length);
}
Square.prototype=Object.create(Rectagle.prototype,{
    constructor:{
        configurable:true,
        enumerable: true,
        value:Square,
        writable:true
    }
})
Square.prototype.Circumference=function(){
    return this.length*4;
}
Square.prototype.toString=function(){
    return `length: ${this.length}`;
}
let rectagle=new Rectagle(4,2);
let square=new Square(3);
console.log(square.toString());
console.log(rectagle.toString());
