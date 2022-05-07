const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const m_email = 'aylin.ozcan@student.ehb.be';
//get form data

//mail transporter that will send the email
let transporter = nodemailer.createTransport({
	service: 'gmail',
  host: 'smtp@gmail.com',
  secure: 'true',
  port: '465',
  auth: {
    type: 'OAuth2', //Authentication type
    user: `${m_email}`,
    clientId: '1067917256300-qao46r58ep21jsal2qlv3hkuk8hsp962.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: 'Refresh_Token'
  }
});

let mailDetails = {
	from: `${s_email}`,
	to: `${m_email}`,
	subject: `${s_name} Sended you a message from Visionixa website.`,
	text: `${s_message}`
};

transporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occured', err);
	} else {
		console.log('Email sent successfully');
	}
  transporter.close();
});

