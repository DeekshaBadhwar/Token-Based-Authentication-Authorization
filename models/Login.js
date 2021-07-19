const Sequelize=require('sequelize')
const db=require('../util/database')

const Login =db.define('login',{
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    type:{
        type:Sequelize.STRING,
        allowNull:false,
        values:['applicant','recruiter']
    }
})


module.exports=Login