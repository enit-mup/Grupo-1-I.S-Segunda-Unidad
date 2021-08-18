const express=require('express');
const router=express.Router();

const pool=require('../database');

router.get('/add',(req,res)=>{
    res.send('GET ADD');
});
router.post('/login',(req,res)=>{
});
router.post('/add',(req,res)=>{
    const sql='Select * from testusers';
    const User={
        username:req.body.username,
        password:req.body.password
    };
    pool.query(sql, error => {
        if (error)
            throw error;
        res.send('Jaa!!!');
    })
    console.log(User);
});
module.exports=router;