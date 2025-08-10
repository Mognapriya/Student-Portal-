const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  instructor: String,
  credits: Number,
});

module.exports = mongoose.model('Course', CourseSchema);

