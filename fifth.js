const PersonMaker=function(name,id){
    this.name=name;
    this.id=id;
    PersonMaker.personsNumber++;
} 
PersonMaker.personsNumber=0; 
PersonMaker.setPersonsNumber=function(value){
    this.personsNumber=value;
}
let noam=new PersonMaker('noam','4587438');
let tom=new PersonMaker('tom','45874438');
let Yossi=new PersonMaker('yosi','45874438');
console.log(PersonMaker.personsNumber);
PersonMaker.setPersonsNumber(5);
console.log(PersonMaker.personsNumber);
console.log(noam);
