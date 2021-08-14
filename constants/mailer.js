const mailer = {}
const config = require("../config")
const nodemailer = require('nodemailer')

mailer.mailSubject = {
  RESET_PASS: {
    subject: "[PGC] Please reset your password",
    template: "reset-password",
  },
  CONTACT: {
    subject: "[PGC] You Got A New Query",
    template: "visitor-query",
  },
  ZOOM_INVITE: {
    subject: "[PGC] You have been invited to join webinar, Scheduled by PGC",
    template: "visitor-query",
  },
  INVITE: {
    subject: "[PGC] You have been invited",
    template: "member-invite",
  },
  COMMENT: {
    subject: "[PGC] A New Comment Is Added in Blog",
    template: "member-invite",
  },
  DONATE_INVOICE: {
    subject: "[PGC] Donation Receipt!",
    template: "member-invite",
  },
}

// Instantiate the SMTP server
mailer.smtpTrans = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: config.EMAIL_PORT,
  secure: config.SECURE,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS
  }
})

module.exports = mailer

