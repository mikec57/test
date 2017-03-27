var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello my boys 3.0");
});

app.listen(4000);
