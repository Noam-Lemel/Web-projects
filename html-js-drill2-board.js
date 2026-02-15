const board=document.getElementById('board');
setTimeout(()=>{
    for(let row=0; row<8;row++){
        for(let col=0;col<8;col++)
        {
        const spot=document.createElement('div');
        if((row+col)%2!==0)
            spot.classList.add('black');
        else
             spot.classList.add('white');
        board.appendChild(spot);
        }
    }
},1500)