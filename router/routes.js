const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Certificateschems = require("../schema/cschema");
const Voterschema = require("../schema/vschema");
var ObjectId = require('mongodb').ObjectId;

router.post('/', (req, res) => {
    res.send('hello server');
});


router.post('/submit-form', async (req, res) => {
    const Data = req.body;
    try {
        const existingData = await Voterschema.findOne({ name: Data.name, phone: Data.phone });
        console.log(existingData);
        if (!existingData) {
            await Voterschema.create(Data);
            const optionCount = await Certificateschems.findOne({ option: Data.option });
            if (optionCount) {
                await Certificateschems.findOneAndUpdate({ option: Data.option }, { $inc: { count: 1 } });
            } else {
                await Certificateschems.create({ option: Data.option, count: 1 });
            }
            res.sendStatus(200);
        } else {
            res.status(200).send({ message: 'User already exists' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while submitting form data');
    }
});





router.get('/get-counts', async (req, res) => {
    try {
        const counts = await Certificateschems.find();
        const formattedCounts = counts.reduce((acc, curr) => ({ ...acc, [curr.option]: curr.count }), {});
        res.status(200).json(formattedCounts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while getting counts');
    }
});

module.exports = router;


