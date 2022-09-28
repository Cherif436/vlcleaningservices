const nodemailer = require('nodemailer');

const multer = require('multer');

const fs = require('fs');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

var to;
var subject;
var body;
var path;

var Storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,'./cv')
  },
  filename: function(req,file,callback){
    callback(null,file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
})

var upload = multer({
  storage: Storage
}).single('cv')

app.use(express.static('public'));

app.post('/sendemail', (req, res) => {
  upload(req, res, function(err){
    if(err){
      console.log(err);
      return res.end("Erreur d'envoi")
    }else{
      to = req.body.to
      subject = req.body.subject
      body = req.body.body

      path = req.body.path

      console.log(to);
      console.log(subject);
      console.log(body);
      console.log(path);

      var transporter = nodemailer.createTransport({
        service:'gmail', 
        auth: {
          user:'chercher1909@gmail.com', 
          pass:'mermer0809'
        }
      })

      var mailOptions = {
        from:'chercher1909@gmail.com',
        to:to,
        subject:subject,
        text:body,
        attachments: [
          {
            path:path
          }
        ]
      }

      transporter.sendMail(mailOptions,function(err,info){
        if(err){
          console.log(err);
        }else{
          console.log("Email envoyé"+info.response);

          fs.unlink(path,function(err){
            if(err){
              return res.end(err)
            }else{
              console.log('Supprimé');
              return res.redirect('/result.js');
            }
          })
        }
      })

    }
  })
})

app.get('/', (req, res) => {
  res.sendFile('/index.js');
})