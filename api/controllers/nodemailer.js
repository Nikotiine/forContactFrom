require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_TEST_ADRESS,
        pass: process.env.GMAIL_PASSWORD,
    },
});
async function sendContactForm(formulaire) {
    console.log(formulaire)
    const mailOptions = {
        from: process.env.GMAIL_TEST_ADRESS,
        to: formulaire.email,
        subject: `Demande de contact de la part de : ${formulaire.lastName} ${formulaire.firstName}`,
        html: `Email de réponse : ${formulaire.email} </br> Contenu du message : ${formulaire.message}`,
    };

    return await transporter.sendMail(mailOptions);
}
module.exports={sendContactForm};