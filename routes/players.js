const express = require('express');
const router = express.Router();
const Player = require('../db/Player');
const {check, validationResult} = require('express-validator');

//@route            GET /players
//@desc             Get players list
//@access           Public
router.get(
    '/',
    async (req, res) => {
        try {
            const players = await Player.find();
            return res.status(200).json(players);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({msg: "Server Error"});
        }
    }
);

//@route            GET /players/:userid
//@desc             Get player info 
//@access           Public
router.get(
    '/:userid',
    async (req, res) => {
        const { userid } = req.params;
        console.log(userid);
        try {
            const player = await Player.findOne({userid: userid});
            return res.status(200).json(player);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({msg: "Server Error"});
        }
    }
)

//@route            POST /players
//@desc             Insert a new player
//@access           Public
router.post(
    '/insert',
    check('userid', "UserID is required").notEmpty(),
    async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()});
        }

        const { userid } = req.body;

        try {
            let newPlayer = new Player({
                userid: userid,
            });

            await newPlayer.save();

            let player = await Player.findOne({userid: userid});
            return res.status(200).json(player);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    }
)

module.exports = router;


