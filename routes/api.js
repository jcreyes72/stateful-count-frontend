const express = require('express');

const router = express.Router();

const currentState = require('../models/currentState')

// Route
router.get('', (req, res) => {

    currentState.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', data)
        });

});

module.exports = router;