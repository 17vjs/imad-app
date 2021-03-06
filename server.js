var express = require('express');
var morgan = require('morgan');
var crypto=require('crypto');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    username:'vijaysffvf',
    database:'vijaysffvf',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));




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
var names=[];
app.get('/submit', function (req, res) {
    var name=req.query.name;
    names.push(name);
    
                                      res.send(JSON.stringify(names));
                                 });
    var counter=0;                             
 app.get('/counter', function (req, res) {
     counter=counter+1;
                                      res.send(counter.toString());
                                 });
 var pool=new Pool(config);
 app.get('/test', function (req, res) {
pool.query('SELECT * FROM users',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send(JSON.stringify(result.rows));
    }
});
                                    
                                 });    
                    
function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input, salt, 10000, 512,'sha512');
    return hashed.toString('hex');
    
}
 app.get('/hash/:input', function (req, res){
     var hashedString=hash(req.params.input,'this');
     res.send(hashedString);
 });                                
app.get('/articles/:articlename', function (req, res) {
                                                 
                                                 pool.query("SELECT * FROM article WHERE title='" +req.params.articlename+ "'",function(err,result){
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        if(result.rows.length===0)
        {
            res.status(404).send('article not found');
        }
        else{
            var articledata=result.rows[0];
              res.send(createtemplate(articledata));
        }
        }
    });
                                                
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
