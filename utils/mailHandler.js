const config = require("../config")
const nodemailer = require('nodemailer')


/**
 * Send Email.
 *
 * @param {string} to
 * @param {string} subject
 * @param {string} html
 *
 */
exports.sendEmail = async (to, subject, html) => {
  try {
    let smtpTrans = nodemailer.createTransport({
      host: config.EMAIL_HOST,
      port: config.EMAIL_PORT,
      secure: config.SECURE,
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS
      }
    })

    let mailOpts = {
      from: config.EMAIL_USER,
      to,
      subject,
      html,

    }

    let mailObj = await smtpTrans.sendMail(mailOpts)
    console.log(mailObj);
    return true

  } catch (error) {
    console.log(error);
    return false
  }
}















// const nodeMailer = require("nodemailer");
// const mailerhbs = require("nodemailer-express-handlebars");
// const path = require("path");
// const config = require("kvell-scripts/config");
// const logo = {
//   filename: "logo.png",
//   path: path.resolve("public/logo.png"),
//   cid: "logo",
// };

// class MailTransporter {
//   constructor(template) {
//     const MAIL_OPTIONS = {
//       host: config.EMAIL_HOST,
//       port: config.EMAIL_PORT,
//       secure: true,
//       service: config.EMAIL_SERVICE,
//       auth: {
//         user: config.EMAIL_USER,
//         pass: config.EMAIL_PASS,
//       },
//     };
//     this.transporter = nodeMailer.createTransport(MAIL_OPTIONS);
//     this.transporter.use("compile", mailerhbs(this.templateOptions(template)));
//   }

//   templateOptions(template) {
//     return {
//       viewEngine: {
//         extName: ".html",
//         partialsDir: path.resolve("views/email"),
//         layoutsDir: path.resolve("views/email"),
//         defaultLayout: `${template}.html`,
//       },
//       viewPath: path.resolve("views/email"),
//       extName: ".html",
//     };
//   }

//   getTransporter() {
//     return this.transporter;
//   }

//   async verifyTransport() {
//     return this.transporter.verify();
//   }

//   sendMail({ to, subject, template, attachments: [logo], context }, close = true) {
//     return new Promise((resolve, reject) => {
//       const mailContent = {
//         to,
//         subject,
//         template,
//         attachments: [logo],
//         context,
//       };
//       this.transporter.sendMail(mailContent, async (err, sendMessageInfo) => {
//         if (close) this.closeTransport();
//         if (err) {
//           console.log(err.message);
//           return reject(err);
//         }
//         console.log(sendMessageInfo);
//         return resolve(true);
//       });
//     });
//   }

//   closeTransport() {
//     this.transporter.close();
//   }
// }

// const mailer = ({ to, subject, template, context }) =>
//   new Promise((resolve, reject) => {
//     console.log(">>>>>>>>>>>>>>>>>>>", { to, subject, template, context });
//     const mail = new MailTransporter(template);
//     const mailContent = { to, subject, template, attachments: [logo], context };
//     mail.sendMail(mailContent).then(
//       (mailInfo) => resolve(mailInfo),
//       (err) => reject(err)
//     );
//   });

// exports.sendMail = (to) => async ({ subject, content, template }) =>
//   await mailer({ to, subject, template, context: content });
