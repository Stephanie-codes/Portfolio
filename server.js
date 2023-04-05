const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;

// Middleware 
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {
    console.log(req.body);

    const client = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "stephaniecodes202@gmail.com",
            pass: ""
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "stephaniecodes202@gmail.com",
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    client.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
});
