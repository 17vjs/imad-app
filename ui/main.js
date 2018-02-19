console.log('Loaded!');
alert("hi ");

var img = document.getElementById('madi');
var marginLeft=0;
function moveLeft()
{ 
    marginLeft = marginLeft - 1 ;
img.style.marginLeft=marginLeft + 'px';
}
function moveRight()
{ 
    marginLeft = marginLeft + 1 ;
img.style.marginLeft=marginLeft + 'px';
 
}
if(img.style.marginLeft=='0px')
{img.onclick= function c() {
  
     var interval = setInterval (moveRight , 1);


};}
else
{img.onclick= function c() {
  
     var interval = setInterval (moveLeft , 1);


};}