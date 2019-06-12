const exprss = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = exprss();
const fileUpload = require('express-fileupload');


app.use(fileUpload());
app.use(cors());


const Select_All_user ='SELECT * FROM consultant';
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'imzii'
});
connection.connect(err=>{
    if(err){
        return err;
    }
})
 


app.get('/user',(req,res)=>{
    connection.query(Select_All_user,(err,result)=>{
        if(err){
            return err;
        }else{
            return res.json({
                data:result
            });
        }
    })  
});


app.get('/login',(req,res)=>{
    const {email, pwd} = req.query;
    const GET_LOG_Q= 'SELECT email FROM consultant where email="'+email+'" and pwd="'+pwd+'"';
    connection.query(GET_LOG_Q,(err,result)=>{
        if(err){
            return res.send(err);
        }else{
            return res.send({
                result
            });
        }
    })  
});

//Upload CV File
app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/client/public/uploades/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
  
app.get('/register',(req,res)=>{
    const {nom,prenom,tel,email, pwd,} = req.query;
    const GET_LOG_Q= 'INSERT INTO `consultant`(`nom`, `prenom`, `email`, `pwd`, `tel`) VALUES ("'+nom+'","'+prenom+'","'+email+'","'+pwd+'","'+tel+'")';
    connection.query(GET_LOG_Q,(err,result)=>{
        if(err){
            return res.send({
                success: err
            });
        }else{
            return res.send({
                success: true
            });
        }
    })  
});


app.get('/',(req,res)=>{
    res.send("hello guys");
});



app.listen(4000,()=>{
        console.log('Listen to  Servwerq 4000');
        
}); 
