require("express-async-errors")
const express = require('express')
const AppError = require('./utils/AppError')
const router = require('./routes')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(router)

app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }
    return response.status(500).json({message:"Internal Error in Server"})
})

app.listen(PORT, ()=> console.log(`ServerON ${PORT}`))

