// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  console.log(req.body);
  require("dotenv").config();
  console.log(process.env.password, "pass");

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "mtushar162011@bscse.uiu.ac.bd",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "mtushar162011@bscse.uiu.ac.bd",
    to: "mtushar53@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).send();
}
