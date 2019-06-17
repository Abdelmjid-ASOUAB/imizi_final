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

//Login Consultant
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


//Login Client
app.get('/loginclient',(req,res)=>{
    const {email, pwd} = req.query;
    const GET_LOG_Q= 'SELECT mail FROM client where mail="'+email+'" and pwd="'+pwd+'"';
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
  //Consultant Regester
app.get('/ConsultantRegister',(req,res)=>{
    const {nom,prenom,tel,email, pwd,seniorite,availability} = req.query;
    const GET_LOG_Q= 'INSERT INTO `consultant`(`nom`, `prenom`, `email`, `pwd`, `tel`,  `seniorite`, `disponibilité`) VALUES ("'+nom+'","'+prenom+'","'+email+'","'+pwd+'","'+tel+'","'+seniorite+'","'+availability+'")';
    connection.query(GET_LOG_Q,(err,result)=>{
        console.log(GET_LOG_Q);
        
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


  //Client Regester
  app.get('/ClientRegister',(req,res)=>{
    const {nom,prenom,tel,email, pwd,clientname} = req.query;
    const GET_LOG_Q= 'INSERT INTO `client`(`representant`,  `mail`, `pwd`, `tel`,  `societe`) VALUES ("'+nom+" "+prenom+'","'+email+'","'+pwd+'","'+tel+'","'+clientname+'")';
    connection.query(GET_LOG_Q,(err,result)=>{
        console.log(GET_LOG_Q);
        
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


//MISSION
app.get('/getmission',(req,res)=>{
    const Select_All_Mission ='SELECT * FROM mission';
    connection.query(Select_All_Mission,(err,result)=>{
        if(err){
            return err;
        }else{
            return res.json({
                data:result
            });
        }
    })  
});


    //get Mission with titel or description 
app.get('/searchmission',(req,res)=>{
    const {title,description} = req.query;
    let Search_Mission="SELECT * FROM mission where Titel LIKE '%"+title+"%' or description	LIKE '%"+description+"%'";
    connection.query(Search_Mission,(err,result)=>{
        if(err){
            return err;
        }else{
            
            return res.json({
                data:result
            });
        }
    })  
});


    //get Mission with Email         

    app.get('/missionemail',(req,res)=>{
        const {email} = req.query;
        let Search_Mission="SELECT * FROM mission where id in( SELECT mission_id FROM Missionclient where client_email = '"+email+"') ";

        connection.query(Search_Mission,(err,result)=>{
            if(err){
                return err;
            }else{
                
                return res.json({
                    data:result
                });
            }
        })  
    });
// Search Mission Content with email Client !
    app.get('/searchemailmission',(req,res)=>{
        const {title,description,email,kaka} = req.query;
        if(kaka){
            console.log("kaka");
            
        }else{
            console.log("no kaka");

        }
        let Search_Mission="SELECT * FROM mission where id in( SELECT mission_id FROM Missionclient where client_email = '"+email+"')  and( Titel LIKE '%"+title+"%' or description	LIKE '%"+description+"%')"
      
      console.log(Search_Mission);
      
       connection.query(Search_Mission,(err,result)=>{
            if(err){
                return err;
            }else{
                
                return res.json({
                    data:result
                });
            }
        })  
    });
    //insert Mission
    let id_mission_insert=0;
    app.get('/insertmission',(req,res)=>{
        const {titel,description,date} = req.query;
        const GET_LOG_Q= 'INSERT INTO `mission`(`Titel`, `description`, `date`) VALUES ("'+titel+'","'+description+'","'+date+'")';
        connection.query(GET_LOG_Q,(err,result)=>{
            console.log(GET_LOG_Q);
            console.log(result.insertId);
            
            if(err){
                return res.send({
                    success: err
                });
            }else{
                id_mission_insert=result.insertId;
                return res.send({
                    success: result.insertId
                });
            }
        })  
    });
    //insert Realation Mission Client 
    app.get('/insertmissionclient',(req,res)=>{
        const {email} = req.query;
        const GET_LOG_Q= 'INSERT INTO `Missionclient`(`client_email`, `mission_id`) VALUES ("'+email+'","'+id_mission_insert+'")';
        connection.query(GET_LOG_Q,(err,result)=>{
            console.log(GET_LOG_Q);
            console.log(result.insertId);
            
            if(err){
                return res.send({
                    success: err
                });
            }else{
                id_mission_insert=result.insertId;
                return res.send({
                    success: result.insertId
                });
            }
        })  
    });
//Remove from Mission table
    app.get('/removemission',(req,res)=>{
        const {id} = req.query;
        const GET_LOG_Q= 'DELETE FROM `mission` WHERE `mission`.`id` = "'+id+'"';
        connection.query(GET_LOG_Q,(err,result)=>{
            console.log(GET_LOG_Q);            
            if(err){
                return res.send({
                    success: err
                });
            }else{
                return res.send({
                    success: result.insertId
                });
            }
        })  
    });
//Remove from MissionClient table

    app.get('/removemissionClient',(req,res)=>{
        const {id} = req.query;
        const GET_LOG_Q= 'DELETE FROM `Missionclient` WHERE `Missionclient`.`mission_id` ="'+id+'"';
        connection.query(GET_LOG_Q,(err,result)=>{
            console.log("remove 2  "+GET_LOG_Q);            
            if(err){
                return res.send({
                    success: err
                });
            }else{
                return res.send({
                    success: result.insertId
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
