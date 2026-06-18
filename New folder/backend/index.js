// 1.nom init
// 2.npm i exprress
// 3. created a index.js file
//4.importing the express
import express from 'express'
import studentModel from './model.js';
import "./db.js";
//5. Initializing the express to a variable app
const app = express();

//middleware
 // to parse the incoming data
app.use(express.json())

//api
//app.methods("url",useCallbackFun(req,res)=>{})

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/a', (req, res) => {
  res.send('Welcome to node')
})
//api to add data to db
app.post('/',(req,res)=>{
    studentModel(req.body).save()
    res.send("student data added")
});

//api to get data from db
app.get('/s',async (req,res)=>{
    let students = await studentModel.find()
    res.send(students)

})

//to delete a document from db
app.delete('/:id',async (req,res)=>{
  await studentModel.findByIdAndDelete(req.params.id)
  res.send("Data deleted")
})

//to update a document from db
app.put('/:id',async (req,res)=>{
  let upStu = await studentModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("Data updated")
});

//Making the server in listening mode
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});