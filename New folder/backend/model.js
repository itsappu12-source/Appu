//1.install mongoose
//2.import mongoose
import mongoose from 'mongoose';

//Schema creation
let studentSchema = mongoose.Schema({
    sname: String,
    sage: Number,
    sdept: String
})

// let studentModel = mongoose.model("collectionName",schemaName)
let studentModel = mongoose.model("student",studentSchema)

export default studentModel;