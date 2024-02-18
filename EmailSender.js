var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'f190914@cfd.nu.edu.pk',
    pass: ''
  }
});

var mailOptions = {
  from: 'f190914@cfd.nu.edu.pk',
  to: 'usman.azhar@nu.edu.pk',
  subject: 'Project Loops',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});