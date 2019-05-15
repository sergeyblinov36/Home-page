$(document).ready(function () {


let Arr= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let squareShitter=$('#square_pooper');
let letters=[];
let leftovers=[];
let squareSize=80;
let squareID=0;
let index=0;
$('.shitABrick').click(function(){
    for(let i=0; i<2 && squareID<48;i++ ){
        createSquare();
      //  choseLetters();
    }
})

function createSquare(){
    let square=$(document.createElement('div')).attr("class","square"+"square_"+squareID).css({
        "height":squareSize+"px",
        "width":squareSize+"px"
    })

$('square_pooper').append('square');
squareSize+=20;
let letter=letters[Math.floor(Math.random() * letters.length)]
squareID++;

}

function choseLetters(){
    for(let i=0;i<2;i++){
        let random=Math.floor(Math.random() * Arr.length);
        letters[i]=Arr[random];
        letters[i+2]=Arr[random];
    }

}

});