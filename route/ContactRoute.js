const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post("/contact", (req, res) => {
    let { name, email, message } = req.body;
    if (name.length === 0 || email.length === 0 || message.length === 0) {
        return res.json({
            msg: "Please fill all the fields"
        });
    };

    let smtpTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "name@gmail.com",
            pass: "******"
        }
    });

    let emailOptions = {
        from: email,
        to: 'name@gmail.com',
        subject: `Message from ${name}`,
        html: `
                <h3>Informations</h3>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                </ul>
                <h3>Message</h3>
                <p>${message}</p>
            `
    }


    smtpTransporter.sendMail(emailOptions, (error) => {
        try {
            if (error) return res.status(400).send({ msg: "Please fill all ther fields" });
            res.status(200).json({
                msg: "Thank you for contacting Thien Ba!"
            })
        } catch (error) {
            if (error) return res.status(500).json({ msg: "This is server error" });
        }
    })
});

module.exports = router;