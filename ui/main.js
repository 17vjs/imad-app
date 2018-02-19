console.log('Loaded!');



var button=document.getElementById('counter');
var counter1=0;
button.onclick = function c() {
    counter1 = counter1 + 1;
    var span=document.getElementById('count');
    span.innerHTML = counter1.toString();
};