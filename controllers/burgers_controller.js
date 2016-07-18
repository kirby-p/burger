var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.get('/weekday', function(req,res) {
    res.render('index', lunches[0]);
});
app.get('/weekend', function(req,res) {
    res.render('index', lunches[1]);
});

app.get('/lunches', function(req,res) {
    res.render('AllLunches', {
      foods: lunches,
      eater: 'david'
    });
});