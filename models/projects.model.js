const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
    url: { type: String, required: true },
    monthYear: { type: String, required: true },
  }, {
    timestamps: true,
  });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;