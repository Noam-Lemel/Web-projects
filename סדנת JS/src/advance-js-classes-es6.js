//exemple
class Person{
    static personCounter=0;
    constructor(name,id){
        this._name=name;
        this.id=id;
        Person.personCounter++;
    }
    toString(){
        return `name: ${this.name}, id: ${this.id}`;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    static getPersonCount(){
        return this.personCounter;
    }
}
let noam=new Person('noam','316525641');
console.log(noam.toString());

class Student extends Person{
    constructor(name,id,subject){
        super(name,id);
        this.subject=subject;
    }
    toString(){
        return super.toString()+` subject: ${this.subject}`;
    }
}
let chen=new Student('chen','7485734',"math");
console.log(chen.toString());

//drill 01
class Polygon{
    constructor(name,...rest){
         this.sideNum=rest.length>2?rest.length:null;
        if(this.sideNum!==null){
        this.name=name;
        this.side=[...rest];}
        else{
            this.name='Impossible Shape';
            this.side=null;
        }
    }
    get circumference(){
        if(this.name==='Impossible Shape') return null;
        let result=0;
        for(let i=0;i<this.sideNum;i++){
            result+=this.side[i];
        }
        return result;
    }
    get area(){
        return null;
    }
    toString(){
        if(this.name==='Impossible Shape')
            return 'this is Impossible Shape';
        else
            return `${this.name} have ${this.sideNum} sides`;
    }
}
class Rectangle extends Polygon{
    constructor(length,width){
        super("rectangle",length,length,width,width);
        this.length=length;
        this.width=width;
    }
     get area(){
         return this.length*this.width;
    }
     toString(){
         if(this.name==='Impossible Shape')
            return super.toString();
        else
            return super.toString()+` and have length of ${this.length}, and width of ${this.width}`;
    }
}
class Square extends Rectangle{
    constructor(length){
        super(length,length);
        this.name='square';
    }
    toString(){
         if(this.name==='Impossible Shape')
            return super.toString();
        else
            return `the Square have length of ${this.length}`;
    }
}
let square=new Square(4);
console.log(square.circumference);
let rectangle=new Rectangle(2,6);
console.log(rectangle.circumference);
let polygon=new Polygon("trapezoid",4,4);
console.log(polygon.toString());