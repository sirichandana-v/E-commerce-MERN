const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload");

const errorMiddleware=require('./middleware/error')


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//route imports

const productRoute=require('./routes/productRoute');
const userRoute=require("./routes/userRoute");
const orderRoute=require("./routes/orderRoute");

app.use('/api/v1', productRoute);
console.log("got here");
app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);

//middleware error

app.use(errorMiddleware);




module.exports=app;