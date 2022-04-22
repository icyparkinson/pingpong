const mongoose = require('mongoose')

const PingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: false,
  },
  expense: {
    type: Number,
    required: false,
  },
  balance: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Entry', PingSchema)
