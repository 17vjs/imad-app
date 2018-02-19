console.log('Loaded!');
alert("hi ");

var img = document.getElementById('madi');
var marginLeft=0;
function stop(){
    img.style.marginLeft='0px';
    
}
function moveRight()
{ 
    marginLeft = marginLeft + 1 ;
img.style.marginLeft=marginLeft + 'px';
if(marginLeft==100)
{stop(); 
}

}
img.onclick= function c() {
    
     var interval = setInterval (moveRight , 1);

};