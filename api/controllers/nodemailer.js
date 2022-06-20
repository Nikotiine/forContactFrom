require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "node89-eu.n0c.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.CONTACT_ADRESS,
        pass: process.env.CONTACT_PASSWORD,
    },
});
async function sendContactForm(formulaire) {
    console.log(formulaire)
    const mailOptions = {
        from: formulaire.email,
        to: process.env.CONTACT_ADRESS,
        subject: `Demande de contact de la part de : ${formulaire.lastName} ${formulaire.firstName}`,
        html: `Email de réponse : ${formulaire.email} </br> Contenu du message : ${formulaire.message}`,
    };

    return await transporter.sendMail(mailOptions);
}
module.exports={sendContactForm};