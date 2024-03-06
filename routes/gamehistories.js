const express = require('express');
const router = express.Router();
const GameHistory = require('../db/GameHistory');
const {check, validationResult} = require('express-validator');

//@route    GET /gamehistories
//@desc     Get the list of all the game histories
//@access   Public
router.get(
    '/',
    async (req, res) => {
        try {
            const gamehistories = await GameHistory.find();
            return res.status(200).json(gamehistories);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({msg: "Server Error"});
        }
    }
    );


// @route   POST /gamehistories/insert
// @desc    Write a new row to db
// @access  Public
router.post(
    '/insert',
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()});
        }

        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    }
);


module.exports = router;