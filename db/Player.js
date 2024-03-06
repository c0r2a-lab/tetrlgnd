const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    userid: {
        type: String,
        ref: "user"
    },
    scores: {
        type: Number,
        default: 0,
    },
    player_level: {
        type: Number,
        default: 0,
    },
    player_exp: {
        type: Number,
        default: 0,
    },
    //number of won games
    win: {
        type: Number,
        default: 0,
    },
    //number of loss games
    loss: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('player', PlayerSchema);