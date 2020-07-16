const express=require('express');
const router=express.Router(); 
// const User=require('../model/user');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/productdb')
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

router.get('/',(req,res)=>{
res.send("from API");

});
// router.post("/register", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
//     var myData = new User(req.body);
//     console.log(req.body);
//     myData.save()
//       .then(item => {
//         res.send("item saved to database");
//       })
//       .catch(err => {
//         res.status(400).send("unable to save to database");
//       });
//   });
router.post('/login',(req,res)=>{

    //  let userData=req.body
       let userData=req.body
       User.findOne({email:userData.email},(err,user)=>{
      if(err)
      {
          console.log(err);
      }
      else
      {
          if(!user)
          {
  
              res.status(401).send('invalid email');
  
          }else
          {
  
              if(user.password !== userData.password)
              {
                  res.status(401).send('invalid');
  
              }
              else
              {
                 
                  let payload={subject:user._id}
                  let token=jwt.sign(payload,'secretKey')
                  res.status(200).send({token});
      
                 
                  // res.status(200).send(user);
              }
          }
      }
      });        
      
  });
  
  
  
  function verifyToken(req,res,next)
  {
      if(!req.headers.authorization)
      {
          return res.status(401).send('Unauthorized request');
      }
      let token = req.headers.authorization.split('')[1]
  
        if(token ==='null')
          { 
           return res.status(401).send('Unauthorized request'); 
          }
           let payload =jwt.verify(token,'secretKey');
           if(!payload)
                {
                    return res.status(401).send('Unauthorized request');
                }
  
       req.userId= payload.subject
       next()
      
      
      }
//   if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }
  
  


module.exports =router;