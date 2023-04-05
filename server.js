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

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stephaniecodes202@gmail.com',
            pass: 'obotcdkxdcpcivox'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'stephanieb170@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: `Message: ${req.body.message} from: ${req.body.fullName}`
    }

    try {
        transporter.sendMail(mailOptions, (error, info) => {
          if(error) {
            console.log(error);
            res.send('error');
          } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
          }
        });
      } catch (err) {
        console.log(err);
        res.send('error');
      }
      

  /*  transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log('error:' + error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })

    app.get('/success', (req, res) => {

        res.send('<h1>Your Message was Successfully Send!</h1>');
    })
    */
    
});



app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
});
