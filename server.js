const exprss = require("express");
const cors = require("cors");
const mysql = require("mysql");
const cmd = require("node-cmd");
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
    'SELECT * FROM consultant where email="' +
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
    'SELECT email FROM admin where email="' + email + '" and pwd="' + pwd + '"';
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
  const email = req.body.Namefile;


  file.mv(`C:/xampp/htdocs/CVs/${email}.pdf`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/opt/lampp/htdocs/${email}.pdf`
    });
  });
});

//Consultant Regester
app.get("/ConsultantRegister", (req, res) => {
  const {
    nom,
    prenom,
    tel,
    email,
    pwd,
    
  } = req.query;
  const GET_LOG_Q =
    'INSERT INTO `consultant`(`nom`, `prenom`, `email`, `pwd`, `tel`) VALUES ("' +
    nom +
    '","' +
    prenom +
    '","' +
    email +
    '","' +
    pwd +
    '","' +
    tel +
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


//get  Client By Email
app.get("/getExperience", (req, res) => {
  const { email } = req.query;

  const Select_All_Client = "SELECT * FROM experience where email ='" + email + "'";
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


//get  Client By Email
app.get("/getConsultanttEmail", (req, res) => {
  const { email } = req.query;

  const Select_All_Client = "SELECT * FROM consultant where email ='" + email + "'";
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
  const { email } = req.query;

  const Select_All_Client = "SELECT * FROM client where mail ='" + email + "'";
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
    tjm,
    contract
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
  } else if (tjm != "") {
    sql += " where Tjm = '" + tjm + "'";
    typ = "tjm";
  } else if (contract != "") {
    sql += " where contract = '" + contract + "'";
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
    sql += " and Tjm= '" + competence + "'";
  }

  if (contract != "" && typ != "contract") {
    sql += " and contract= '" + contract + "'";
  }

  if (sql === "SELECT * FROM consultant") {
    sql += " where active ='active'";
  } else {
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
  const { id, active } = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET active = "' + active + '"  WHERE `id` ="' + id + '"';
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
  const {
    id,
    nom,
    prenom,
    tel,
    email,
    pwd,
    seniorite,
    availability,
    tjm,
    contract,
    competence,
    experience,
    education,
    certificats,
    profile,
    projects,
    langues
  } = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET `nom` = "' +
    nom +
    '" , `prenom` = "' +
    prenom +
    '" , `email` = "' +
    email +
    '" , `pwd` = "' +
    pwd +
    '" , `tel` = "' +
    tel +
    '" ,  `seniorite` = "' +
    seniorite +
    '" , `disponibilite` = "' +
    availability +
    '" , `Tjm` = "' +
    tjm +
    '" , `contract`= "' +
    contract +
    '"  , `competence`= "' +
    competence +
    '"  , `experience`= "' +
    experience +
    '"  , `education`= "' +
    education +
    '"  , `certificats`= "' +
    certificats +
    '"  , `profile`= "' +
    profile +
    '"  , `projects`= "' +
    projects +
    '"  , `langues`= "' +
    langues +
    '" ' +
    '  WHERE `id` ="' +
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

//Update personnelle Information in Consultant table
app.get("/updateconsultantPersonnelle", (req, res) => {
  const {
    id,
    nom,
    prenom,
    tel,
    email,
    pwd,
    } = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET `nom` = "' +
    prenom +
    '" , `prenom` = "' +
    nom +
    '" , `email` = "' +
    email +
    '" , `pwd` = "' +
    pwd +
    '" , `tel` = "' +
    tel +
    '" ' +
    '  WHERE `id` ="' +
    id +
    '"';
  console.log(GET_LOG_Q);
  
  
    connection.query(GET_LOG_Q, (err, result) => {
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
app.get("/updateconsultantProfessionnelle", (req, res) => {
  const {
    id,
    competence,
    experience,
    education,
    certificats,
    profile,
    projects,
    langues
  } = req.query;
  const GET_LOG_Q =
    'UPDATE consultant SET  `competence`= "' +
    competence +
    '"  , `experience`= "' +
    experience +
    '"  , `education`= "' +
    education +
    '"  , `certificats`= "' +
    certificats +
    '"  , `profile`= "' +
    profile +
    '"  , `projects`= "' +
    projects +
    '"  , `langues`= "' +
    langues +
    '" ' +
    '  WHERE `id` ="' +
    id +
    '"';
    console.log("=====langues=====");
    console.log(langues);
    
 /* connection.query(GET_LOG_Q, (err, result) => {
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
  });*/
});

//Remove from Mission table
app.get("/removeConsultant", (req, res) => {
  const { id } = req.query;
  const GET_LOG_Q =
    'DELETE FROM `consultant` WHERE `consultant`.`id` = "' + id + '"';
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
  const { id, active } = req.query;
  const GET_LOG_Q =
    'UPDATE client SET active = "' + active + '"  WHERE `id` ="' + id + '"';
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
  const { id, representant, societe, tel, email, pwd } = req.query;
  const GET_LOG_Q =
    'UPDATE client SET `representant` = "' +
    representant +
    '" , `societe` = "' +
    societe +
    '" , `mail` = "' +
    email +
    '" , `pwd` = "' +
    pwd +
    '" , `tel` = "' +
    tel +
    '"' +
    '  WHERE `id` ="' +
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

//Execute a command
app.get("/getCmnd", (req, res) => {
  cmd.get("python affichage.py", function(err, data, stderr) {


   setTimeout (()=>{},3000)
   console.log("wait the current dir contains these files :\n\n", data);

    return res.send({
      success: data
    });
  });
});
//ClaneExperEmail
app.get("/claneExp", (req, res) => {
  const { email } = req.query;
  const GET_LOG_Q = 'DELETE FROM `experience` WHERE `experience`.`email` = "' + email + '"';
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

app.post("/updateconsultantProfessionnelle", (req, res) => {
  

  const id = req.body.id;
  const langues = req.body.langues;
  const competence = req.body.competence;

  
  const experience =req.body.experience;
  const education =req.body.education;
  const certificats =req.body.certificats;
  const profile = req.body.profile;
  const projet = req.body.projet;


  const vv =
  'UPDATE consultant SET  `competence`= "' +
  competence +
  '"  , `experience`= "' +
  experience +
  '"  , `education`= "' +
  education +
  '"  , `certificats`= "' +
  certificats +
  '"  , `profile`= "' +
  profile +
  '"  , `projects`= "' +
  projet +
  '"  , `langues`= "' +
  langues +
  '" ' +
  '  WHERE `id` ="' +
  id +
  '"';


  console.log("remove 2  " + vv);


   connection.query(vv, (err, result) => {
     // console.log("remove 2  " + vv);
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


app.post("/insertExp", (req, res) => {
  

  const email = req.body.email;
  const intitule= req.body.intitule;
  const description= req.body.description;
  const dateDebut= req.body.dateDebut;
  const dateFin= req.body.dateFin;
  const duree= req.body.duree;

  console.log(intitule);
  console.log(description);
  console.log(dateDebut);
  console.log(dateFin);
  console.log(duree);
  
  const vv =
  'INSERT INTO `experience`(`intitule`, `description`, `dateDebut`, `dateFin`, `duree`, `email`) VALUES ("' +
 intitule +
  '","' +
 description +
  '","' +
 dateDebut  +
  '","' +
  dateFin  +
  '","' +
 duree  +
  '","' +
  email +
  '")';
  const delet ="DELETE FROM `experience` WHERE email='"+email+"'"

  console.log( delet);

   connection.query(vv, (err, result) => {
     // console.log("remove 2  " + vv);
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
  console.log("Listen to  Server 4000");
});
