const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();

//when we use get result show on browser
//post cant see in a browser
//API AND REST API = ?

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        // to show the result in MongoDB browser by thenc shortcut
        //by .save only save the result not show
        .then((result) => {
            res.json(result);
         
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
// to read the data we use get & vice versa for Post
router.get('/getall', (req, res) => {
    //to read the data
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});
// : denotes url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // by new.true can see direct update on postman
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});




// for Login page, result and error


router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result);
            else res.status(400).json({ message: 'login failed' });
        })
        .catch((err) => {
            console.log('err')
            res.status(500).json(err);
        });
})


module.exports = router;
