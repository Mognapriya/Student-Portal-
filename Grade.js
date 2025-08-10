const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  grade: String,
});

module.exports = mongoose.model('Grade', GradeSchema);

