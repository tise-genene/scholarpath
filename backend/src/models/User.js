const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  educationLevel: {
    type: String,
    enum: ['High School', 'Undergraduate', 'Graduate', 'PhD'],
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  gpa: {
    type: Number,
    min: 0,
    max: 4,
    required: true
  },
  preferences: {
    countries: [String],
    degreeLevels: [String],
    studyFields: [String],
    minGpa: Number,
    maxDeadline: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  failedLoginAttempts: {
    type: Number,
    default: 0
  },
  lockedUntil: {
    type: Date
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String
  }
});

// Update last login time
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);
