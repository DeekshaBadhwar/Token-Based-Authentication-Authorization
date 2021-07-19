const Sequelize=require('sequelize')
const db=require('../util/database')

const Role=db.define('role',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    }
})
module.exports=Role