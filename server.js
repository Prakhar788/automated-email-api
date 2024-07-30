require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ScheduledEmail = require('./models/ScheduledEmail');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


const scheduleEmail = (email) => {
    const delay = new Date(email.scheduleTime) - new Date();
    setTimeout(async () => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            debug:true
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: email.recipient,
            subject: email.subject,
            text: email.body
        };

        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.error(error);
                email.status = 'failed';
            } else {
                console.log('Email sent: ' + info.response);
                email.status = 'sent';
            }
            await email.save();
        });
    }, delay);
};


app.post('/schedule-email', async (req, res) => {
    const { recipient, subject, body, scheduleTime } = req.body;
    const email = new ScheduledEmail({ recipient, subject, body, scheduleTime });
    await email.save();
    scheduleEmail(email);
    res.status(201).send(email);
});


app.get('/scheduled-emails', async (req, res) => {
    const emails = await ScheduledEmail.find();
    res.send(emails);
});


app.get('/scheduled-emails/:id', async (req, res) => {
    const email = await ScheduledEmail.findById(req.params.id);
    res.send(email);
});


app.delete('/scheduled-emails/:id', async (req, res) => {
    const email = await ScheduledEmail.findByIdAndDelete(req.params.id);
    res.send(email);
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    const scheduleTime = new Date(Date.now() + 10000).toISOString(); // 5 seconds into the future
console.log(scheduleTime); // "2024-07-30T12:35:01.789Z" (example)
    
});
