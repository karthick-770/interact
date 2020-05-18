const express = require('express')
const router = express.Router()

    router.get('/',(req,res) =>{
        res.send('from api')
    })

router.post('/customerlogin',(req,res)=>{
    let userData = req.body

    
})
    module.exports = router