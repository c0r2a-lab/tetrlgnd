const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
//const normalize = require('normalize-url');
const {check, validationResult} = require('express-validator');
const keys = require('../config/keys');
const User = require('../db/User');
const Player = require('../db/Player');

// @route       POST /users/register
// @desc        Register new user
// @access      Public
router.post(
    '/register',
    check('userid', 'UserID is required').notEmpty(),
    check('email', "Please input a vaid Email address").isEmail(),
    check('password', "Password is required").notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()});
        }

        const { userid, email, password } = req.body;

        try {

            let user_byid = await User.findOne({userid: userid});

            if(user_byid) {
                return res.status(400).json({errors: [{msg: 'This userid has already been used.'}]});
            }

            let user_byemail = await User.findOne({email: email});

            if(user_byemail) {
                return res.status(400).json({errors: [{msg: 'This email has already been registered.'}]});
            }

            // const avatar = normalize(
            //     gravatar.url(email, {
            //         s: '200',
            //         r: 'pg',
            //         d: 'mm'
            //     }),
            //     { forceHttps: true }
            // );

            //removed : avatar
            const newUser = new User({
                userid: userid,
                email: email,
                password: password
            });
            console.log(userid, email, password);

            const salt = await bcrypt.genSalt(10);

            newUser.password = await bcrypt.hash(password, salt);

            await newUser.save();

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
            console.log(err.message);
            res.status(500).send('Server error');
        }
    }
)

module.exports = router;



