console.log('Loaded!');
alert("hi ");

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight()
{ if (marginLeft<=1000)
    {marginLeft = marginLeft + 1 ;
img.style.marginLeft=marginLeft + 'px';}
else
{marginLeft=0;
img.style.marginLeft=marginLeft + 'px';}
}
img.onclick= function c() {
    var interval = setInterval (moveRight , 1);
   

};