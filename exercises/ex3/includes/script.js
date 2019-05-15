let Arr= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let squareToilet=document.getElementsByTagName("main")[0];
let squareShitter=document.getElementById("shitABrick");
let letters=[];
let squares=[];
let squarescontainer=[];
let squareSize=80;
let squareID=0;
let chosen=[];
let font=30;

let letter=function(){
    let ahhhhh=document.createElement('h1');
    ahhhhh.style.alignContent="center";
    ahhhhh.style.fontSize = font +"px";
    font+=5;                      
    ahhhhh.innerHTML=Arr[Math.floor(Math.random() * Arr.length)];
    squares[squares.length-1].appendChild(ahhhhh);
}

squareShitter.onclick=function(){
    for(let i=0;i<3;i++)
    {
        createSquare();
        squareToilet.appendChild(squares[squares.length-1]);
        
    }
    
}

let createSquare=function(){
    let square=document.createElement('div');
    square.style.width = squareSize +"px";
    square.style.height = squareSize +"px";
    
    square.className = "square";         
    squareSize+=20;      
    squares.push(square);
    squarescontainer.push(square);
    letter();
}


//===========================================================================/


$("main").on("click", ".square", function () {
  let obj=this;
  obj.className='reveal';
  chosen.push(obj);

  if(chosen.length>=2){
    compare();
  }

});







let compare=function(){
  let first=chosen[0].children[0]
  let second=chosen[1].children[0];
    if (first.innerHTML == second.innerHTML && first !=second){
        chosen[0].className='correct';
        chosen[1].className='correct';
    }
    setTimeout(function() { clear(chosen);}, 500);
}


function clear(){
    if (!(chosen[0].className.includes('correct')) && !(chosen[0].className.includes('correct'))){
      for(let i = 0; i < chosen.length; ++i){
        chosen[i].className = 'square';
      }
    }
    if(chosen.length == 2){
      chosen = [];
    }
  }