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
  const monthYear = Date.parse(req.body.monthYear);

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

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(exercise => {
      project.projectName = req.body.projectName;
      project.description = req.body.description;
      project.picture = req.body.picture;
      project.monthYear = Date.parse(req.body.monthYear);

      exercise.save()
        .then(() => res.json('project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;