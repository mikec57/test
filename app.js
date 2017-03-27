var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello my boys 6.0");
});

app.listen(4000);
