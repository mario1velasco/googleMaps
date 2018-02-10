const mongoose = require('mongoose');
// const CAMPAIGN_CATEGORIES = require('./plan-categories');

const planSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  imgUrl: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: [true, 'Creator is required'],
  //   ref: 'User'
  // },
  sunny: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  duration: {
    type: Number,
    required: [true, 'Duration time is required']
  },
  days:{
    type: String,
    required: [true, 'Days time is required']
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required']
  },
  endTime: {
    type: String,
    required: [true, 'End time is required']
  },
  startPosition: {
    type: String,
    required: [true, 'Start position is required']
    // match: [/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/, 'Please fill a valid position address']
  },
  endPosition: {
    type: String,
    required: [true, 'End position is required']
    // match: [/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/, 'Please fill a valid position address']
  }
}, {
  timestamps: true
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;