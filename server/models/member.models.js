const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    highScore: {
        type: Number
    },
    lowScore: {
        type: Number
    },
    win: {
        type: Number
    },
    loss: {
        type: Number
    },
    stats: { type: [{
        week: Number,
        posRank: Number,
        powScore: Number,
        powRank: Number,
        pointsF: Number,
        pointsA: Number
    }]}
}, {timestamps: {createdAt: true}})

module.exports.Member = mongoose.model("Member", MemberSchema);