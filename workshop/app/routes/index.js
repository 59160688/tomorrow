var express = require('express');
var router = express.Router();
let users1 = require('./user1.json');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'champyz test test' });
});

router.get('/b', function(req, res, next) {
    res.render('index', {
        title: 'This is title of EJS Template',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        names: ['John Doe', 'Jane Doe', 'Jane Dane']
    });
});

router.get('/c', function(req, res, next) {
    res.cookie('cook', 'champ')
    res.end('created champ');

});

router.get('/json', function(req, res, next) {
    res.cookie('users', users1)
    return res.status(200).json({
        code: 1,
        message: 'OK',
        data: users1
    })
});

router.get('/json/:id', function(req, res, next) {
    res.json(users1.find(users1 => users1.id == req.params.id))
        //console.log(users1.find(users1 => users1.id))
})

router.get('/c/:id', function(req, res, next) {
    res.clearCookie(req.params.id)
    res.end('complete');

});

router.get('/a', function(req, res, next) {
    res.send("Hello About NodeJS......");
});

module.exports = router;