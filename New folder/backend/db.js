//1. import mongoose
import mongoose from 'mongoose';
//to connect db
mongoose
.connect("mongodb://pest:pest@ac-kkmn7no-shard-00-00.uifogak.mongodb.net:27017,ac-kkmn7no-shard-00-01.uifogak.mongodb.net:27017,ac-kkmn7no-shard-00-02.uifogak.mongodb.net:27017/studentDbMangalam?ssl=true&replicaSet=atlas-qa3enj-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{console.log("connected to db")})
.catch((err)=>{console.log(err)})