console.log('Loaded!');



var button=document.getElementById('button');

button.onclick = function () {
    var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState ===XMLHttpRequest.DONE) {
          if(request.status === 200){
              var counter=request.responseText;
                var span=document.getElementById('count');
    span.innerHTML = counter.toString();
          }
      } 
    };
    request.open('GET','http://vijaysffvf.imad.hasura-app.io/counter',true);
    request.send(null);
  
};

var submit=document.getElementById('submit');
submit.onclick=function (){
     var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState ===XMLHttpRequest.DONE) {
          if(request.status === 200){
              var names=request.responseText;
              names=JSON.parse(names);
   var list='';
   for (var i=0;i<names.length;i++)
   {list+='<li>'+names+'<li>';
   }
   var u1=document.getElementById('namelist');
   u1.innerHTML=list;
          }
      } 
    };
    var nameInput=document.getElementById('name');
var name = nameInput.value;
    request.open('GET','http://vijaysffvf.imad.hasura-app.io/submit?=' + name,true);
    request.send(null);
  
};