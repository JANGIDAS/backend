import express from 'express'
import mongoDb from './db/connect.js';
import { addUser , getUser} from './controllers/user.controller.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const PORT = 4000


// route
app.post('/create-user', addUser)
app.get('/get-user', getUser)

mongoDb()
.then(() => {
  app.listen(PORT,(req,res)=>{
    console.log('mongodb i connected');
    console.log(`server in runnig on : ${PORT}`)
  })
})





