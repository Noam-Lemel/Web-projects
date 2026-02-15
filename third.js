for(let row=1;row<=9;row++)
{ 
     let message='';
    for(let col=1;col<=10;col++)
    {
        let multi=row*col;
        if(multi===40){
             message+='   ';
            continue;
        }
        if(multi>=90) break;
         message+=multi+(multi<10?"  ":" ");
    }
      console.log(message);
}