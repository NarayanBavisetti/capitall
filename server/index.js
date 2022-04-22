const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config();


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false,
    // useUnifiedTopology:true
}).then(() => console.log("DB connected successfully")).catch((err) => console.log(err))


app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(require("./router/auth"))
app.use(require('./router/itemsRoute'))
// const User = require('./model/userSchema')

// const authRoutes = require('./router/auth')
// app.use(authRoutes)
// const itemsRoutes = require('./router/itemsRoute')
// app.use(itemsRoutes)

app.listen(PORT , () => {
    console.log(`port is running at ${PORT}`)
})