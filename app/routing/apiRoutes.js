'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config()


module.exports = function(app){
    app.post("/api/email", function(req,res){
        var userData = req.body;
        console.log("userdata",  userData);

        var name = req.body.name;
        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

        console.log(process.env.email)
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // remember to use env variables if you open source
        user: process.env.email,
        pass: process.env.pass 
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: `${name} <no-reply@portfolio.com>`, // sender address
    to: `${process.env.email}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `My email is ${email} \n ${message} `, // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.send({message: "Failed to send email. Please try again!"});
    }
    else {
        console.log(`Message ${info.messageId} sent: ${info.response}`);
        res.send({message: "Email sent!"});
    }
});
    });
}