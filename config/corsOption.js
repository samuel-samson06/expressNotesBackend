const allowedCors  = require("./allowedCors");

const corsOptions ={
    origin:(origin,callback)=>{
        if(allowedCors.indexOf(origin)!== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not Allowed by cors'))
        }
    },
    credentials:true,
    optionsSuccessStatus:200
}

module.exports = corsOptions;