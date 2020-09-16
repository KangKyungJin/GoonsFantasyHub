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
    stats: { type: [{
        week: Number,
        posRank: Number,
        powRank: Number,
    }]}
}, {timestamps: {createdAt: true}})

module.exports.Member = mongoose.model("Member", MemberSchema);