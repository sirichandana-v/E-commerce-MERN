const app = require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")

//Handling uncaught exception

process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server dueto uncaught Exception`);
    process.exit(1);
})



dotenv.config({path:"backend/config/config.env"});

connectDatabase();


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