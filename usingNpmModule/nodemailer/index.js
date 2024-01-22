//importing package
const nodemailer = require("nodemailer");

//using google transport portocol to send email creating the transport object
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "surazpandey832@gmail.com",
    pass: "viztdpeqgqqcuima",
  },
});

const sendEmail = () => {
  // content to whom and what message  we want to send
  const mailOptions = {
    from: "Suraj Pandey <surazpandey101@gmail.com>",
    to: "surazpandey101@gmail.com",
    subject: "Testing",
    text: "Hello world!",
  };
  //using SMTP service provider as mentioned above to send mail using sendMail funtion
  transport.sendMail(mailOptions, (err) => {
    if (err) {
      return console.log(`Error: ${err}`);
    }
    return console.log(`Email is sent successfully `);
  });
};

// sendEmail();

module.exports = { sendEmail };

// transport.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });
