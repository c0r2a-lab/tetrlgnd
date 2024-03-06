const express = require('express');
const router = express.Router();
const FinanceHistory = require('../db/FinanceHistory');
const {check, validationResult} = require('express-validator');


//@route    GET /financehistories
//@desc     Get the list of all the financehistories
//@access   Public
router.get(
    '/',
    async (req, res) => {
        try {
            const financehistories = await FinanceHistory.find();
            return res.status(200).json(financehistories);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({msg: "Server Error"});
        }
    }
    );

// @route   POST /fiancehistories/insert
// @desc    Write a new row to db
// @access  Public
router.post(
    '/insert',
    check('userid', "UserID is required").notEmpty(),
    check('amount', "Input valid value").isNumeric(),
    check('type', "Input valid value").notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()});
        }

        const {userid, amount, type} = req.body;
        
        try {
            let history = new FinanceHistory({
                userid: userid,
                amount: amount,
                type: type,
                ip_track: req.ip,
            });
            await history.save();
            
            let histories = await FinanceHistory.find({userid: userid});
            return res.status(200).json(histories);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    }
);

//@route        GET /financehistories/:from/:to
//@desc         Get Finance Histories between from date and to date
//@access       Public
router.get(
    '/:from/:to',
    async (req, res) => {

        try {
            let histories = FinanceHistory.find({
                $match: {
                    $gte: req.params.from,
                    $lte: req.params.to,
                }
            });

            return res.status(200).json(histories);
        } catch (err) {

            console.log(err.message);
            res.status(500).send("server error");
        }
    }
);

module.exports = router;
