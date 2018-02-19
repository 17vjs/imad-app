console.log('Loaded!');
alert("hi ");

var img = document.getElementById('madi');
function moveright()
{marginLeft=marginLeft + 10;
img.style.marginLeft=marginleft + 'px';}
img.onclick= function c() {
    var interval = setInterval(moveright,6);

};