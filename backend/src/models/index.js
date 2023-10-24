const sequelize = require('../../config/db');  

const Resume = require('./apolloModels/Resume');
const Career = require('./apolloModels/Career');
const Partner = require('./apolloModels/Partner');
const Story = require('./apolloModels/Story');
const Service = require('./apolloModels/Service');
const Project = require('./apolloModels/Project');
const Users = require('./apolloModels/Users');

module.exports = {
  Resume,
  Career,
  Partner,
  Story,
  Service,
  Project,
  Users,
};