const keys = require('../config/keys');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../db/User');

// @route   GET /auth
// @desc    Get user by token
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// @route    POST /auth
// @desc     Authentication user & get token
// @access  Public
router.post(
    '/',
    check('userid', "Please input userid").notEmpty(),
    check('password', "Password is required").notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {userid, password} = req.body;

        try {
            let user = await User.findOne({userid});
            if(!user) {
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({errors: [{msg: 'invalid credentials'}]});
            } 
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                keys.jwtSecret,
                {expiresIn: '5 days'},
                (err, token) => {
                    if (err) throw err;
                    res.json({token});
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);

module.exports = router;