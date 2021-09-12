
const mongoose = require('mongoose')

const url ='mongodb://localhost:27017/online-shop'

const productschema =new mongoose.Schema({

    
    name: String,    
    category: String,
    description: String,
    price: String,
    image: String
    
})     

const product = mongoose.model('product',productschema)



exports.getproducts= ()=>{
    return new Promise((resolve,reject)=>{
mongoose.connect(url).then(()=>{
    return product.find({name:"t-sshirt"})}).then(products=>{
        //console.log(products)
        mongoose.disconnect()
    resolve(products)

}).catch(err=>reject(err))

})
}