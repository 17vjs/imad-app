var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
                'article-one':{
                              title:'ARTICLE-ONE',
                              content:'this is article one.<br>date:5/2/18<br>  <a href="/article-two">article-two</a><br>  <a href="/">home</a>'
                              },
                'article-two':{
                              title:'ARTICLE-TWO',
                              content:`this is article two.<br>date:15/2/18<br>  <a href="/article-one">article-one</a><br>  <a href="/">home</a>`
                              }
                };

function createtemplate(data){
                                var title=data.title;
                                var content=data.content;
                                var htmltemplate=`  <html>
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
                                                    <div>
                                                      
                                                        
                                                           
                                                            
                                                    </div>
                                                    </body>
                                                    </html>`;
                                                    
                                return htmltemplate;
                             }


app.get('/', function (req, res) {
                                      res.sendFile(path.join(__dirname,'ui','index.html'));
                                 });
                                 
                                 
                                 
app.get('/:articlename', function (req, res) {
                                                 var articlename=req.params.articlename;
                                                  res.send(createtemplate(articles[articlename]));
                                              });


app.get('/ui/style.css', function (req, res) {
                                                  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
                                             });

app.get('/ui/main.js', function (req, res) {
                                                  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
