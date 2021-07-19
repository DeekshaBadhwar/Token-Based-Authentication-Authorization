const express= require('express')
const app= express()
const cors=require('cors')
const bodyparser=require('body-parser')

const router=require('./routes/userRoutes')




const db=require('./models/index')
const Role=db.role

db.sequelize.sync({force:true})
.then(()=>{
    initial()
})

function initial(){
    Role.create({
        name:"user"
    });
    Role.create({
        name:"moderator"
    })
    Role.create({
        name:"admin"
    })
}



var corsOption={
    origin:"http://localhost:8081"
}
app.use(cors(corsOption))


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/',(req,res)=>{

    res.json({message:"heee"})
})

app.listen(5000,(err)=>{
  if(err){  console.log(err)}
else{console.log("server is running")}
})