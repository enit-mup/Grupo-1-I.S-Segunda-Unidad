const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Welcome to my API :3');
});

module.exports=router;