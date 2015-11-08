"use strict";

import express from 'express';
import SoundcloudLoader from '../lib/soundcloud-loader.js';

let router   = express.Router();
let scLoader = new SoundcloudLoader();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

router.get('/searchSongs', (req, res, next) => {
    if (!req.query || !req.query.term) {
        res.status(404).send('Missing search query');
        return;
    }

    scLoader
        .request(req.query.term)
        .then((err, result) => {
            if (err) {
                res.status(404).send(err);
                return;
            }

            res.json(result);
        });
});

module.exports = router;