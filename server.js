// 1. serve spa app
// 2. handle emails from contact form + send some nice html for maria
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const app = express();

// serve 'dist' build folder
app.use(express.static('dist'));

// parsing json from QuoteModal.vue
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'javiermruelas@gmail.com',
        pass: ''
    }
});

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions));

app.post('/send', (req, res) => {
    console.log('Received a POST request on this route... = ' + req.body.name, req.body.email, req.body.phone, req.body.help);

    var mailOptions = {
        from: 'javiermruelas@gmail.com',
        to: 'javiermruelas@gmail.com',
        subject: "Elle's Nails Contact",
        template: 'email', // the name of the template file i.e email.handlebars
        context: {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phone: `${req.body.phone}`,
            specifics: `${req.body.help}`
        }
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    res.end('sent');
});


app.listen(process.env.port || 3000);
console.log('Web server is listening at port ' + (process.env.port || 3000));
