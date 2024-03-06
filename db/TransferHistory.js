const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WithdrawHistorySchema = new Schema({
    ///who sent ?
    userid: {
        type: String,
        ref: "user"
    },
    //who received ?
    received: {
        type: String,
    },
    //when he did transfer ?
    transfered: {
        type: Date,
        default: Date.now
    },
    //how many scores sent ?
    amount: {
        type: Number,
    },
    //where he transfered ?
    ip_track: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('transferhistory', WithdrawHistorySchema);