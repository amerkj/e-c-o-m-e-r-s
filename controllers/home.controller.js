
const productsmodel = require('../models/products')
exports.gethome=(req,res,next)=>{
    productsmodel.getproducts().then(products=>{
        
        .then(value=>{console.log(value);})

      // res.render('index',{products:products})
    })
    
}