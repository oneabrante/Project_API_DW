import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        pass: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
});



export async function notifyController(req, res) {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: 'EyesUp <xxxxxxxxxxxxxxxxxxxxxx>',
        to: email,
        subject: subject,
        html: message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(500).send(err.message);
        }

        res.status(200).jsonp(req.body);
    });
}
    