const router = require('express').Router()
const homecontroller=require('../controllers/home.controller')
router.get('/',homecontroller.gethome)
module.exports=router