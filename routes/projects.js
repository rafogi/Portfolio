const router = require('express').Router();
let Project = require('../models/projects.model');

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projectName = req.body.projectName;
  const description = req.body.description;
  const picture = req.body.picture;
  const url = req.body.url;
  const monthYear = req.body.monthYear;

  const newProject = new Project({
    projectName,
    description,
    picture,
    url,
    monthYear,
  });

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;