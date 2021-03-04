const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API,
        domain: ''
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));



const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'paul@paulflanagan.com',
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;