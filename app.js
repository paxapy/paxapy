var express = require('express');
var app = express();
var consolidate = require('consolidate')

app.configure(function() {
    app.engine('html', consolidate.mustache)
    app.set('view engine', 'html')
    app.set('views', __dirname + "/templates");
    app.set("view options", { layout: 'base.html' });
    app.use(express.static(__dirname + "/static"));
});

app.get('/', function(req, res){
    res.render('base.html');
});


app.listen(process.env.PORT || 8000)
console.log('running...')