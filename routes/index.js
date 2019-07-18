var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next){
  let rawdata = fs.readFileSync('student.json');
  let student = JSON.parse(rawdata);
  var myDate = new Date(student.createdAt);
  var date1 = myDate.getDate();
  var month1 = myDate.getMonth()+1;
  var year1 = myDate.getFullYear();
  var createdDate = date1+'/'+month1+'/'+year1;
  var latestDate = new Date(student.latestReviewDate);
  var date2 = latestDate.getDate();
  var month2 = latestDate.getMonth()+1;
  var year2 = latestDate.getFullYear();
  var lastReviewDate = date2+'/'+month2+'/'+year2;
  res.render('index', { title: 'Express', name: student,createdDate,lastReviewDate});
});

module.exports = router;