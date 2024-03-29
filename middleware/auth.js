const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // get token from header
    const token = req.header('x-auth-token');

    // check if not token
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'})
    }

    // verify token
    try {
        jwt.verify(token, keys.jwtSecret, (err, decoded) => {
            if(error) {
                return res.status(401).json({msg: 'Token is not valid'});
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        console.error('something wrong with auth middleware');
        res.status(500).json({msg: 'server error'});
    }
};