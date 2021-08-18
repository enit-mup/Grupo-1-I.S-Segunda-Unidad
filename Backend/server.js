const express=require('express');
const morgan=require('morgan');
const path=require('path');
const cors=require("cors");
//initializations
const app=express();
//settings
app.set('port',process.env.PORT || 4000);

//Middlewares
//use morgan 
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(
   cors({
       origin:"http://localhost:3000",
       credentials:true,
   }) 
);
//Global Variables
app.use((req,res,next)=>{
    next();
});
//Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentications'));
app.use('/links',require('./routes/links'));

//Public
app.use(express.static(path.join(__dirname,'./public')));
//Starting  the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});












/*
//Routes Login
app.post("/login",(req,res)=>{
    passport.authenticate('local',(error,user,info)=>{
        if(error) throw error;
        if(!user) res.send('No User Exists');
        else{
            req.logIn(user,error=>{
                if(error) throw error;
                res.send('Succesfully Authenticated');
                console.log(req.user);
            })
        }
    });
});
app.get('/user',(req,res)=>{
    res.send(req.user);
});





// Get all estudents
app.get('/api/student',(req,res)=>{
    const sql='Select * from testudiante';
    connection.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.send('No result');
        }
    });
});
// Get student by id
app.get('/api/student/:id',(req,res)=>{
    const {id }=req.params;
    const sql =`select * from testudiante where IDEstudiante=${id}`;
    connection.query(sql,(error,result)=>{
        if(error) throw error;
        if(result.length>0){
            res.json(result);
        }else{
            res.send('No result');
        }
    });
});
// Add new student
app.post('/api/student/add',(req,res)=>{
    const sql='insert into testudiante SET ?';

    const studentObj={
        IDEstudiante:req.body.IDEstudiante,
        Nombres:req.body.Nombres,
        ApPaterno:req.body.ApPaterno,
        ApMaterno:req.body.ApMaterno,
        Email:req.body.Email,
        Direccion:req.body.Direccion,
        Celular:req.body.Celular
    }
    connection.query(sql,studentObj,error=>{
        if(error) throw error;
        res.send('Student created!!!');
    });
});
//update student by id
app.put('/api/student/update/:id',(req,res)=>{
    const {id }=req.params;
    const {IDEstudiante,Nombres,ApPaterno,ApMaterno,Email,Direccion,Celular}=req.body;
    const sql =`update testudiante SET IDEstudiante ='${IDEstudiante}',Nombres='${Nombres}',ApPaterno='${ApPaterno}',
    ApMaterno='${ApMaterno}',Email='${Email}',Direccion='${Direccion}',Celular='${Celular}' where IDEstudiante=${id}`;
    connection.query(sql,error=>{
        if(error) throw error;
        res.send('Student updated!');
    });
});
//delete student by id
app.delete('/api/student/delete/:id',(req,res)=>{
    const{id }=req.params;
    const sql=`delete from testudiante where IDEstudiante='${id}'`;
    connection.query(sql,error=>{
        if(error) throw error;
        res.send('Delete student');
    });
});
*/