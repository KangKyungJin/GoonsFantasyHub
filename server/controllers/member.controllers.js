const { Member } = require('../models/member.models');
const { request, response } = require('express');

module.exports.createMember = (request, response) => {
    const { name, stats } = request.body;
    Member.create({
        name,
        stats
    })
        .then(member => response.json(member))
        .catch(err => response.status(400).json(err));
}

module.exports.allMembers = (request, response) => {
    Member.find()
        .then(members => response.json(members))
        .catch(err => response.json(err));
}

module.exports.oneMember = (request, response) => {
    Member.findOne({_id:request.params.id})
        .then(member => response.json(member))
        .catch(err => response.status(400).json(err));
}

module.exports.updateMember = (request,response) => {
    Member.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedMember => response.json(updatedMember))
        .catch(err => response.status(400).json(err));
}

