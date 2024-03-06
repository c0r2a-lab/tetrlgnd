const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FinanceHistorySchema = new Schema({
    userid: {
        type: String,
        ref: "user",
        unique: false,
    },
    //finance time ?
    finance_time: {
        type: Date,
        default: Date.now
    },
    //amount of finance
    amount: {
        type: Number,
    },
    //where he did finance
    ip_track: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['withdraw', 'deposit'],
        default: 'deposit'
    },
})

module.exports = mongoose.model('deposithistory', FinanceHistorySchema);