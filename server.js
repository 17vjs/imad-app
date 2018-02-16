var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
articleone:{
  title:'article-one',
  content:'this is article one.<br>date:5/2/18'
  },
articletwo:{
  title:'article-two',
  content:`this is article two.<br>date:15/2/18`
  }
};
function createtemplate(data){
var title=data.title;
var content=data.content;
 var htmltemplate=`
 <html>
<head>
<title>
${title}
</title>
        
<link href="/ui/style.css" rel="stylesheet" />
</head>
    
<body>
<div class='container'>
            
<p>
${content}
                        
</p>    
            
</div>
</body>
</html>`;

return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});
app.get('/:articlename', function (req, res) {
  
  res.send(createtemplate(articlea[articlename]));
});

app.get('/article-two', function (req, res) {
   res.send(createtemplate(articletwo));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
