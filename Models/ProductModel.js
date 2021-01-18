const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema = new Schema({
    web:{type:String},
    webUrl:{type:String},
    storage:{type:Number},
    price:{type:Number} ,
    productTitle:{type:String}, 
    productDescription:{type:String},
    productImage:{type:String}
})



module.exports = mongoose.model('product',ProductSchema);