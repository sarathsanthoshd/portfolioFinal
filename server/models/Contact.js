import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address.',
    ],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;