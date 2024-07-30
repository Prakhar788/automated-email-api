require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ScheduledEmail = require('./models/ScheduledEmail');

const app = express();
app.use(express.json());

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
            }
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});