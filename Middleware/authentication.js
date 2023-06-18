let {redis} = require('../redis.db')
let JWT = require('jsonwebtoken')
require('dotenv').config()


let UserAuthenticate = async(req,res,next)=>{
       
    let token = await redis.get(req.body.email)

    if(token == null){

        res.send({msg:"you didn't login yet, do login first"})

    }else{

        JWT.verify(token,process.env.privateKey,(err,result)=>{
            if(err){
                res.send({msg:err.message})
            }else{
                next()
            }
        })

    }

}

module.exports = {UserAuthenticate}