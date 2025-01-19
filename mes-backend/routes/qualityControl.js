const express = require('express');
const QualityControl = require('../models/QualityControl');
const router = express.Router();

router.get('/', async (req, res) => {
  const inspections = await QualityControl.findAll();
  res.json(inspections);
});

router.post('/', async (req, res) => {
  const newInspection = await QualityControl.create(req.body);
  res.json(newInspection);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updated = await QualityControl.update(req.body, { where: { id } });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await QualityControl.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;