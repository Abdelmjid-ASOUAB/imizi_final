const exprss = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = exprss();
const fileUpload = require("express-fileupload");

app.use(fileUpload());
app.use(cors());

//Connecting  To Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "imzii"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.get("/user", (req, res) => {
  connection.query(Select_All_user, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});



//Login Consultant
app.get("/login", (req, res) => {
  const { email, pwd } = req.query;
  const GET_LOG_Q =
    'SELECT email FROM consultant where email="' +
    email +
    '" and pwd="' +
    pwd +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send({
        result
      });
    }
  });
});


//Login Admin
app.get("/admin", (req, res) => {
  const { email, pwd } = req.query;
  const GET_LOG_Q =
    'SELECT email FROM admin where email="' +
    email +
    '" and pwd="' +
    pwd +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send({
        result
      });
    }
  });
});

//Login Client
app.get("/loginclient", (req, res) => {
  const { email, pwd } = req.query;
  const GET_LOG_Q =
    'SELECT mail FROM client where mail="' + email + '" and pwd="' + pwd + '"';
  connection.query(GET_LOG_Q, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send({
        result
      });
    }
  });
});

//Upload CV File
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  const email= req.body.Namefile;

  console.log(name);
  

  file.mv(`/opt/lampp/htdocs/${email}.pdf`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/opt/lampp/htdocs/${email}.pdf` });
  });
});

//Consultant Regester
app.get("/ConsultantRegister", (req, res) => {
  const { nom, prenom, tel, email, pwd, seniorite, availability,tjm,contract} = req.query;
  const GET_LOG_Q =
    'INSERT INTO `consultant`(`nom`, `prenom`, `email`, `pwd`, `tel`,  `seniorite`, `disponibilite`, `Tjm`, `contract`) VALUES ("' +
    nom +
    '","' +
    prenom +
    '","' +
    email +
    '","' +
    pwd +
    '","' +
    tel +
    '","' +
    seniorite +
    '","' +
    availability +
    '","' +
    tjm +
    '","' +
    contract +
    '")';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);

    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: true
      });
    }
  });
});

//Client Regester
app.get("/ClientRegister", (req, res) => {
  const { nom, prenom, tel, email, pwd, clientname } = req.query;
  const GET_LOG_Q =
    'INSERT INTO `client`(`representant`,  `mail`, `pwd`, `tel`,  `societe`) VALUES ("' +
    nom +
    " " +
    prenom +
    '","' +
    email +
    '","' +
    pwd +
    '","' +
    tel +
    '","' +
    clientname +
    '")';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);

    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: true
      });
    }
  });
});

//get All MISSION
app.get("/getmission", (req, res) => {
  const Select_All_Mission = "SELECT * FROM mission";
  connection.query(Select_All_Mission, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});

//get All Consultant
app.get("/getConsultant", (req, res) => {
  const Select_All_Client = "SELECT * FROM `consultant`  ";
  console.log();
  
  connection.query(Select_All_Client, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});



//get All Client
app.get("/getClient", (req, res) => {
  
  const Select_All_Client = "SELECT * FROM client";
  connection.query(Select_All_Client, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});

//get  Client By Email

app.get("/getClientEmail", (req, res) => {

  
  const {email} = req.query;

  const Select_All_Client = "SELECT * FROM client where mail ='"+email+"'";
  console.log(Select_All_Client);
  
  connection.query(Select_All_Client, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});




//get Mission with titel or description
app.get("/searchmission", (req, res) => {
  const { title, description } = req.query;
  let Search_Mission =
    "SELECT * FROM mission where Titel LIKE '%" +
    title +
    "%' or description	LIKE '%" +
    description +
    "%'";
  connection.query(Search_Mission, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});

//get Mission with Email
app.get("/missionemail", (req, res) => {
  const { email } = req.query;
  let Search_Mission =
    "SELECT * FROM mission where id in( SELECT mission_id FROM Missionclient where client_email = '" +
    email +
    "') ";

  connection.query(Search_Mission, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});

// Search Mission Content with email Client !
app.get("/searchemailmission", (req, res) => {
  const { title, description, email, kaka } = req.query;
  if (kaka) {
    console.log("kaka");
  } else {
    console.log("no kaka");
  }
  let Search_Mission =
    "SELECT * FROM mission where id in( SELECT mission_id FROM Missionclient where client_email = '" +
    email +
    "')  and( Titel LIKE '%" +
    title +
    "%' or description	LIKE '%" +
    description +
    "%')";

  console.log(Search_Mission);

  connection.query(Search_Mission, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
});

//insert Mission
let id_mission_insert = 0;
app.get("/insertmission", (req, res) => {
  const { titel, description, date } = req.query;
  const GET_LOG_Q =
    'INSERT INTO `mission`(`Titel`, `description`, `date`) VALUES ("' +
    titel +
    '","' +
    description +
    '","' +
    date +
    '")';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    console.log(result.insertId);

    if (err) {
      return res.send({
        success: err
      });
    } else {
      id_mission_insert = result.insertId;
      return res.send({
        success: result.insertId
      });
    }
  });
});

//insert Realation Mission Client
app.get("/insertmissionclient", (req, res) => {
  const { email } = req.query;
  const GET_LOG_Q =
    'INSERT INTO `Missionclient`(`client_email`, `mission_id`) VALUES ("' +
    email +
    '","' +
    id_mission_insert +
    '")';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    console.log(result.insertId);

    if (err) {
      return res.send({
        success: err
      });
    } else {
      id_mission_insert = result.insertId;
      return res.send({
        success: result.insertId
      });
    }
  });
});

//Remove from Mission table
app.get("/removemission", (req, res) => {
  const { id } = req.query;
  const GET_LOG_Q = 'DELETE FROM `mission` WHERE `mission`.`id` = "' + id + '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});

//Remove from MissionClient table
app.get("/removemissionClient", (req, res) => {
  const { id } = req.query;
  const GET_LOG_Q =
    'DELETE FROM `Missionclient` WHERE `Missionclient`.`mission_id` ="' +
    id +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log("remove 2  " + GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});

//get Mission with titel or description
app.get("/searchconsultant", (req, res) => {
  let {
    competence,
    seniorite1,
    seniorite2,
    seniorite3,
    seniorite4,
    diponibilite1,
    diponibilite2,
    diponibilite3,
    diponibilite4,
    tjm,contract
  } = req.query;
  let typ = "";
  let sql = "SELECT * FROM consultant";

  if (competence != "") {
    sql += " where competence LIKE '%" + competence + "%'";
    typ = "competence";
  } else if (
    seniorite1 != "" ||
    seniorite2 != "" ||
    seniorite3 != "" ||
    seniorite4 != ""
  ) {
    sql +=
     
      " where seniorite IN ('" +
      seniorite1 +
      "','" +
      seniorite2 +
      "','" +
      seniorite3 +
      "','" +
      seniorite4 +
      "')";
    typ = "seniorite";
  } else if (
    diponibilite1 != "" ||
    diponibilite2 != "" ||
    diponibilite3 != "" ||
    diponibilite4 != ""
  ) {
    sql +=
      
      " where disponibilite IN ('" +
      diponibilite1 +
      "','" +
      diponibilite2 +
      "','" +
      diponibilite3 +
      "','" +
      diponibilite4 +
      "')";
    typ = "disponibilité";
  }else if (tjm != "") {
    sql += " where Tjm = '" + tjm+ "'";
    typ = "tjm";
  }else if (contract != "") {
    sql += " where contract = '" + contract+ "'";
    typ = "contract";
  }

  if (competence != "" && typ != "competence") {
    sql += " and competence LIKE '%" + competence + "%'";
  }
  if (
    (seniorite1 != "" ||
      seniorite2 != "" ||
      seniorite3 != "" ||
      seniorite4 != "") &&
    typ != "seniorite"
  ) {
    sql +=
  
    " and seniorite IN ('" +
    seniorite1 +
    "','" +
    seniorite2 +
    "','" +
    seniorite3 +
    "','" +
    seniorite4 +
    "')";
  }
  if (
    (diponibilite1 != "" ||
      diponibilite2 != "" ||
      diponibilite3 != "" ||
      diponibilite4 != "") &&
    typ != "disponibilité"
  ) {
    sql +=
   
    " and disponibilite IN ('" +
    diponibilite1 +
    "','" +
    diponibilite2 +
    "','" +
    diponibilite3 +
    "','" +
    diponibilite4 +
    "')";
  }

  if (tjm != "" && typ != "tjm") {
    sql +=  " and Tjm= '" + competence + "'";

  }

  if (contract != "" && typ != "contract") {
    sql +=  " and contract= '" + contract + "'";

  }


  if(sql==="SELECT * FROM consultant"){
    sql += " where active ='active'";
  }else{
    sql += " and active ='active'";

  }

  console.log(sql);
  

  connection.query(sql, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json({
        data: result
      });
    }
  });
  
});


//Update Active  in Consultant table
app.get("/activeConsultant", (req, res) => {
  const { id,active } = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET active = "'+active+'"  WHERE `id` ="' +
    id +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log("remove 2  " + GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});

//Update All  in Consultant table
app.get("/updateconsultant", (req, res) => {
  const { id,nom, prenom, tel, email, pwd, seniorite, availability,tjm,contract} = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET `nom` = "'+nom+'" , `prenom` = "'+prenom+'" , `email` = "'+email+'" , `pwd` = "'+pwd+'" , `tel` = "'+tel+'" ,  `seniorite` = "'+seniorite+'" , `disponibilite` = "'+availability+'" , `Tjm` = "'+tjm+'" , `contract`= "'+contract+'" '
    
    +'  WHERE `id` ="' +
    id +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log("remove 2  " + GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});


//Remove from Mission table
app.get("/removeConsultant", (req, res) => {
  const { id } = req.query;
  const GET_LOG_Q = 'DELETE FROM `consultant` WHERE `consultant`.`id` = "' + id + '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});


//Update Active  in Consultant table
app.get("/activeClient", (req, res) => {
  const { id,active } = req.query;
  const GET_LOG_Q =
    'UPDATE client SET active = "'+active+'"  WHERE `id` ="' +
    id +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log("remove 2  " + GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});

app.get("/removeClient", (req, res) => {
  const { id } = req.query;
  const GET_LOG_Q = 'DELETE FROM `client` WHERE `client`.`id` = "' + id + '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});

//Update All  in Consultant table
app.get("/updateclient", (req, res) => {
  const { id,representant, societe, tel, email, pwd} = req.query;
  const GET_LOG_Q =
    'UPDATE client SET `representant` = "'+representant+'" , `societe` = "'+societe+'" , `mail` = "'+email+'" , `pwd` = "'+pwd+'" , `tel` = "'+tel+'"'
    
    +'  WHERE `id` ="' +
    id +
    '"';
  connection.query(GET_LOG_Q, (err, result) => {
    console.log(GET_LOG_Q);
    if (err) {
      return res.send({
        success: err
      });
    } else {
      return res.send({
        success: result.insertId
      });
    }
  });
});




app.listen(4000, () => {
  console.log("Listen to  Servwerq 4000");
});
