const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime: String,
  courseName: String,
});

module.exports = mongoose.model('Schedule', ScheduleSchema);

