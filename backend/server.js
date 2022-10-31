const app = require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");
const cloudinary = require("cloudinary");

//Handling uncaught exception

process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server dueto uncaught Exception`);
    process.exit(1);
})



dotenv.config({path:"backend/config/config.env"});

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


const server=app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
});


//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server dueto unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    });
})