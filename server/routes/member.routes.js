const memberController = require('../controllers/member.controllers');

module.exports = function(app) {
    app.post('/api/members', memberController.createMember);
    app.get('/api/members', memberController.allMembers);
    app.get('/api/members/:id', memberController.oneMember);
    app.put('/api/members/:id', memberController.updateMember);
}