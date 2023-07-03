"use strict";

/**
 * Middleware to handle logs report 
 */

export let logs_report = async(req:any, res:any, next:any)=>{
   

        console.log("***********************")
        console.log('method',req.method)
        console.log('Url',req.originalUrl)
        console.log('params',req.params)
        console.log('query',req.query)
        console.log("***********************")

        
        next();
};

// module.exports = {logs_report};