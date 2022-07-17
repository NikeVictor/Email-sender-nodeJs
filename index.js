const express = require('express');
const nodemailer = require("nodemailer")
require('dotenv').config()
const app = express()
const port = 3000

let transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });

  let mailOptions = {
      from: 'nikevictorchijindu@gmail.com',
      to: 'nikevictor4437@gmail.com',
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})