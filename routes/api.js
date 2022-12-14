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

router.post('/', (req, res) => {
    console.log('Value: ', req.body.currentCount);

    const data = req.body.currentCount;
    const newState = new currentState({state: data})

    //.save
    newState.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Whoops, internal server error :("});
        }
        else {
            res.json({
                msg: "The current state has been saved"
            }); 
        }
    })


    
});

module.exports = router;