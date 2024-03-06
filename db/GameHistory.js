const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameHistorySchema = Schema({
    //userid of player who created room
    userid: {
        type: String,
        ref: 'user'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    started_at: {
        type: Date,
    },
    finished_at: {
        type: Date,
    },
    //how man scores were betted per player
    scores: {
        type: Number
    },
    player_list: [
        {
            userid: {
                type: String,
                ref: "User"
            },
            score: {
                type: Number,
            },
        }
    ]
})

module.exports = mongoose.model('gamehistory', GameHistorySchema);