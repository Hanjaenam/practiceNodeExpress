const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 25,
  secure: false,
});

const mailOptions = {
  from: process.env.MAIL_ID,
  to: 'hjn7289@gmail.com',
  subject: 'testSubject',
  text: ' testText',
};
transporter.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log('e');
    console.log(error);
  } else {
    console.log(`Message sent : ${response.message}`);
  }
});
