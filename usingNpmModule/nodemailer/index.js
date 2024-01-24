//importing package
const nodemailer = require("nodemailer");
require("dotenv").config();

// console.log(process.env);
//using google transport portocol to send email creating the transport object
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD, //
  },
});

const sendEmail = async ({ from, to, subject, text, html, attachments }) => {
  // content to whom and what message  we want to send
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
    attachments,
  };
  //using SMTP service provider as mentioned above to send mail using sendMail funtion
  await transport.sendMail(mailOptions, (err) => {
    if (err) {
      return console.log(`Error: ${err}`);
    }
    return console.log(`Email is sent successfully `);
  });
};

// sendEmail();

module.exports = { sendEmail };
