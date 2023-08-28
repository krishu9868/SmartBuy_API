let express = require("express")
let app = express()
let {UserRouter} = require("./Routers/user.router")
let {productRoutes} = require('./Routers/product.router')
let {connection} = require("./db")
let cors = require('cors')
require('dotenv').config()

app.use(express.json())

const allowedOrigins = ['https://deluxe-daifuku-1dda8e.netlify.app/'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.get("/",(req,res)=>{
    res.send({msg:"Welcome"})
})
app.use('/user',UserRouter)

app.use('/product',productRoutes)

app.listen(process.env.port, async()=>{

    try{

   connection
   console.log('mongodb is running')

    }catch(err){
        console.log(err)
    }

    console.log("server is running")

})
console.log()
