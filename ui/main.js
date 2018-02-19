console.log('Loaded!');
alert("hi ");

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight()
{ 
    marginLeft = marginLeft + 1 ;
img.style.marginLeft=marginLeft + 'px';
if(marginLeft==100)
{exit(0);
}

}
img.onclick= function c() {
    
     var interval = setInterval (moveRight , 1);

};