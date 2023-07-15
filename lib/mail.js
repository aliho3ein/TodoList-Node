const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aliho3ein.onlineshop@gmail.com",
    pass: "youfaajvhyxmvzrs",
  },
});

exports.sendActivateMail = (token, mail) => {
  let detail = {
    from: "aliho3ein.onlineshop@gmail.com",
    to: mail,
    subject: "Active your account",
    html: createEmail(token),
  };

  mailTransporter.sendMail(detail, (err) => {
    err ? console.log(err) : console.log("send email success");
  });
};

const createEmail = (token) => {
  return `
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8" />
   <style>
     section {
       height: 750px;
       width: 480px;
       margin: 50px auto;
       border-radius: 10px;
       padding: 50px 50px 0;
       background-color:#f3f4f5;
     }
     h2 {
       font-weight: 500;
       text-align: start;
       width: 100%;
       font-size: 1rem;
     }
     p {
       margin-top: 50px;
       font-size: 1rem;
     }
     img {
       width: 450px;
     }
     h3 {
       text-align: center;
       color: navy;
       user-select: none;
       text-align:center
     }
     .activeLink {
      all:unset;
      padding:8px 15px;
      border : 1px solid #00003f;
      color : #fff !important;
      margin : 5px auto;
      background: #000073;
      border-radius : 8px ;
      font-size : 2rem;
     }
   </style>
 </head>
 <body>
 <section>
     <h2>Sender : Todo List Website</h2>
     <h2>
       Email :
       <a title="reply" href="mailto:aliho3ein.de@gmail.com"
         >aliho3ein</a
       >
     </h2>
     <p>Klicken Sie auf den Link unten, um Ihr Konto zu aktivieren</p>
     <br/>
     <a href="http://localhost:3000/users/activate/${token}" class="activeLink">aktivieren</a>
     <hr/>
     <img
       src="
   https://www.netbooster.fr/wp-content/uploads/2021/03/meilleurs-outils-emailing-marketing.png
   "
     />
     <h3>Bitte antworten Sie NICHT auf diese E-Mail</h3>
     </section>
 </body>
</html>`;
};
