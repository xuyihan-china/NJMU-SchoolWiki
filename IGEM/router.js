
var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.render('index.html');
})
// router.post('/www',function(req,res){

// })
module.exports = router;