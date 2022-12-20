import {response} from "express";

const IS_ADMIN = true;

export const verifyRole = (req, res = response, next) => {
   if(IS_ADMIN) {
       next();
   }  else {
       res.json({
           status: false,
           admin: false,
           message: 'User not Authorized to access this endpoint'
       });
   }
};