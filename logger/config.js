require('dotenv').config({ path: __dirname+'/.env' })

module.exports = {
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
    senderEmailAddress: process.env.SENDER_NAME + " <" + process.env.SENDER_EMAIL_ADDRESS + ">",
    receiverEmailAddresses: process.env.RECEIVER_EMAIL_ADDRESSES,
    emailSubject: process.env.EMAIL_SUBJECT
}