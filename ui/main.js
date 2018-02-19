console.log('Loaded!');


var img = document.getElementById('madi');
var marginLeft=0;


function moveRight()
{ 
    marginLeft = marginLeft + 1 ;
img.style.marginLeft=marginLeft + 'px';
 if(marginLeft==500){marginLeft=0;}
}

img.onclick=  function c() 
{ 
    var interval = setInterval (moveRight , 1);
    
};

var button=document.getElementById('counter');
var counter=0;
button.onclick = function () {
    counter = counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};