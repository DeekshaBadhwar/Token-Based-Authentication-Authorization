const db=require('../models')
const Roles=db.Roles
const User=db.user

chechDuplicateUsernameOREmail=(req,res,next)=>{
//    username
    User.fidOne({
        where:{
            username:req.body.username
        }

    }).then ( user=>{
        if(user)
        {
            res.status(400).send({
                message:'Error username already exists'
            })
            return
        }

         // Email
         User.findOne({
            where: {
              email: req.body.email
            }
          }).then(user => {
            if (user) {
              res.status(400).send({
                message: "Failed! Email is already in use!"
              });
              return;
            }
      
            next();
          });

    })
    }

ChechRoleExisted=(req,res,next)=>{
    if(req.body.roles){
  for(let i=0;i<req.body.roles.length;i++){
      if(!Roles.includes(req.body.roles[i])){
          res.status(400).send({
              message:"failed to find the role"
          })
          return
      }
  }
    }
    next()
}
const verifySignUp={
    chechDuplicateUsernameOREmail:chechDuplicateUsernameOREmail,
    ChechRoleExisted:ChechRoleExisted
}

module.exports=verifySignUp