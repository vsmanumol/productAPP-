const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/productdb');
mongoose.connect('mongodb://localhost:27017/productdb')
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

const Schema=mongoose.Schema;
var NewProductSchema=new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String

});
var ProductData=mongoose.model('product',NewProductSchema);
module.exports= ProductData;
// module.exports = mongoose.model('product', NewProductSchema);