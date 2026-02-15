const PersonMaker= function(name,personId)
{
    this.name=name;
    let id='';
    this.setId= function(newId){
        if(newId.length<5)
            id=newId;
    }
    this.setId(personId);
    this.print=function(){
        console.log("name : "+name+"; id : "+id);
    }
    this.getId=function(){
        return id;
    }
}
let noam=new PersonMaker('noam','123');
noam.print();
noam.setId('516525641');
noam.print();
console.log(noam.getId());

