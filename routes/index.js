"use strict";

var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/searchSongs', function(req, res, next) {
    var foundSongs = [
        {
            name: 'test 1',
            size: 1337
        },
        {
            name: 'test 2',
            size: 1337
        }
    ];
    res.json(foundSongs);
});

module.exports = router;
