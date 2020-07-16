
const express=require('express');
const ProductData =require('./model/productdata');
const User=require('./model/user')
const api=require('./routes/api');
//const jwt=require('jsonwebtoken');
const cors=require('cors');
const app = express();
var bodyParser=require('body-parser');
app.use(cors());
app.use('/api',api);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended:true })); 

app.get('/',function(req,res,next){
    res.send("hellowordxxxxxxxxxxxxxxxx");
});

//**************************REgister********************************************************************************************//

app.post("/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
  var myData = new User(req.body);
  console.log(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");

      //  let payload={subject:user._id}
      //  let token =jwt.sign(payload,'secretKey');
      //  res.status(200).send({token});

    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
//*************************************************INSERT****************************************************************************//


app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
    console.log(req.body);
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.productCode,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }
    var product =new ProductData(product);
    product.save();  
});
app.get('/products', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
    ProductData.find(function (err, products) {
      if (err) return next(err);
    res.send(products);    
     

    });
   });
   app.get('/productslist', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
    ProductData.find(function (err, products) {
      if (err) return next(err);
    res.send(products);    
     

    });
   });




//******************************UPDATE*************************************************//

app.get('/edit/:id', async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
    try {
        let id = req.params.id;
        console.log(id);
      //const repository = await getProductRepository();
      const products = await ProductData.findById({_id:id});
      res.send(products);
      
    }
    catch (err) {
      return next(err);
    }
  });
//************************DELETE**********************************************//

app.get('/delete/:id', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods: POST,SET, GET, OPTIONS, DELETE");
  try {
      let id = req.params.id;
      console.log(id);
   
     ProductData.findOneAndDelete({_id:id});
    // res.send(products);
    console.log("products is removed");
  }
  catch (err) {
    return next(err);
  }
});


  //*************************************LOGIN************************************88 */
  app.post('/login',(req,res)=>{
    //  let userData=req.body
       let userData=req.body
       console.log(userData);
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
                 
      //             // let payload={subject:user._id}
      //             // let token=jwt.sign(payload,'secretKey')
      //             // res.status(200).send({token});
      //             let payload={subject:user._id}
      //  let token =jwt.sign(payload,'secretKey');
      //  res.status(200).send({token});
      
                 
                   res.status(200).send(user);
              }
          }
       }
       });        
      
  });












   
app.listen(3000,function(){
console.log('listening to port 3000');
});