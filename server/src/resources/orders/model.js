import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  ticker: {
    type: String,
    enum: ['GOOG', 'FB', 'ORCL'],
    required: true
  },
  side: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  shares: {
    type: Number,
    required: true,
    min: 0
  },
  open: {
    type: Boolean,
    required: true
  }
});

export default mongoose.model('Order', orderSchema);
