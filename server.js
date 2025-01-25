// const express=require("express")
// const dotEnv=require("dotenv")
// const {MongoClient}=require("mongodb")
// const app=express()

// dotEnv.config()

// MongoClient.connect(process.env.mongo_uri)
// .then(()=>{
//     console.log("mongodb connected successfully");
// })
// .catch((error)=>{
//     console.log("Error:",error);
// })
// const port=5001
// console.log(process.env)
// app.listen(port,()=>{
//     console.log(`server started successfully ${port}`);
// })


const express=require("express")
const dotEnv=require("dotenv")
const mongoose=require("mongoose")
const body_parser=require("body-parser")
const app=express()

dotEnv.config()

mongoose.connect(process.env.mongo_uri)
.then(()=>{
    console.log("mongodb connected successfully");
})
.catch((error)=>{
    console.log("Error:",error);
})
const port=5001
console.log(process.env)
app.listen(port,()=>{
    console.log(`server started successfully ${port}`);
})













