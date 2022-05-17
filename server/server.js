"use strict";
const express = require('express'); //Node.js web framework
const path = require('path');

const nodemailer = require('nodemailer'); //Module to send emails
const multiparty = require('multiparty'); //Parses form data for Node.js apps
const xoauth2 = require('xoauth2'); //A module for generating tokens, sending and receiving emails
require("dotenv").config(); //Allows use of environment variables


const _email = 'zcn.aylin@gmail.com'; //use my secondary email to send mail
const r_email = 'aylin.ozcan@student.ehb.be' //Receiver email

//Express configuration
const app = express();

const router = express.Router();
const port = process.env.PORT || 3000;

//index.html as first page of the app
app.route('/').get((req, res) => {
  res.status(200).sendFile(joinPath(__dirname, '../front-end/index.html'));
})

//Run express webserver
app.listen(port, () => {
  console.Console;log(`App listening at port ${port}.`);
})


//Reusable mail transporter that will send the email
let transporter = nodemailer.createTransport({
	service: 'gmail',
  host: 'smtp@gmail.com',
  secure: 'true', //True for port 465, false for others
  port: '465',
  auth: {
    type: 'OAuth2', //Authentication type
    user: `${s_email}`,
    clientId: '1067917256300-qao46r58ep21jsal2qlv3hkuk8hsp962.apps.googleusercontent.com', //Via google cloud platform - visionixa project
    clientSecret: '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', //Via google cloud platform - visionixa project
    refreshToken: '1//0425hlgLmrxBTCgYIARAAGAQSNwF-L9IrKeK2zoOi8GYckBsV20NS98BGQfQDObIk0tST7DGJgacimRvDFkVFG3fjTvqdJrRBR_o' //Via 0Auth2 playground
  }
});

//Defines transport object information
let mailDetails = {
	from: `${_email}`,
	to: `${r_email}`,
	subject: `${s_name} Sended you a message from Visionixa website.`,
	text: `${s_message}`
};

//Sends email
transporter.sendMail(mailDetails, (err, data) => {
	if(err) {
		console.log('Error Occured', err);
	} else {
		console.log('Email sent successfully');
	}
  transporter.close();
});

