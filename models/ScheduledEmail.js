const mongoose = require('mongoose');

const ScheduledEmailSchema = new mongoose.Schema({
    recipient: String,
    subject: String,
    body: String,
    scheduleTime: Date,
    status: { type: String, default: 'scheduled' }
});

module.exports = mongoose.model('ScheduledEmail', ScheduledEmailSchema);
