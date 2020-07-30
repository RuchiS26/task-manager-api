const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rchi.singhal@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the club, ${name}.`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rchi.singhal@gmail.com',
        subject: 'Hope to see you soon',
        text: `GoodBye, ${name}. Good luck for future hope to see you soon`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}