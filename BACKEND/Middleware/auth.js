const jwt = require('jsonwebtoken');
const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '../.env')})

const JWTTOKEN = process.env.jwtSecret

module.exports = function(req, res, next){
    //Get token from header
    const token = req.header('x-auth-token');

    if(!token){
        //if not token
        return res.status(401).json({msg: 'No token, authorization denied'});

    }
    //verify token
    try{
        const decoded = jwt.verify(token, JWTTOKEN);
        req.user = decoded.user;
        next();
    }catch (e) {
        console.error(e.message);
        res.status(401).json({msg : 'Token is not valid'})
    }

}